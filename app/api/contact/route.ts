import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { notifyOwnerAboutLead, sendLeadSubmissionConfirmation } from "@/lib/notifications";
import { createLeadSchema } from "@/lib/schemas/lead";

function getClientIdentifier(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") ?? "unknown";
}

async function sendLeadEmailsSafely(leadId: string, notify: () => Promise<void>, label: string) {
  try {
    await notify();
  } catch (error) {
    console.error(`[lead-email:${label}] leadId=${leadId}`, error);
  }
}

/** Jedini aktivni endpoint za kontakt upite — samo Resend e-mailovi, bez baze. */
export async function POST(request: NextRequest) {
  const identifier = getClientIdentifier(request);
  const rateLimitResult = checkRateLimit(`lead-intake:${identifier}`, {
    limit: 5,
    windowMs: 60_000
  });

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      {
        error: "Previše upita u kratkom roku. Pričekajte i pokušajte ponovno.",
        retryAfter: rateLimitResult.retryAfter
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimitResult.retryAfter)
        }
      }
    );
  }

  const raw = await request.json().catch(() => null);
  const payload =
    raw && typeof raw === "object" && !Array.isArray(raw)
      ? { ...raw, fullName: (raw as Record<string, unknown>).fullName ?? (raw as Record<string, unknown>).name }
      : raw;
  const parsed = createLeadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Neispravan format lead podataka.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const leadId = randomUUID();
  const lead = {
    id: leadId,
    fullName: parsed.data.fullName.trim(),
    email: parsed.data.email.trim().toLowerCase(),
    phone: parsed.data.phone.trim(),
    company: parsed.data.company?.trim() || null,
    projectType: parsed.data.projectType,
    message: parsed.data.message.trim()
  };

  await sendLeadEmailsSafely(lead.id, () => notifyOwnerAboutLead(lead), "owner");
  await sendLeadEmailsSafely(lead.id, () => sendLeadSubmissionConfirmation(lead), "user");

  return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 });
}
