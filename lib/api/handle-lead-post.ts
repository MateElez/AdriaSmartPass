import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { checkRateLimit } from "@/lib/rate-limit";
import { notifyOwnerAboutLead, sendLeadSubmissionConfirmation } from "@/lib/notifications";
import { createLeadSchema } from "@/lib/schemas/lead";
import { createLead } from "@/lib/services/lead-service";

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

/** Zajednička obrada POST za /api/leads i /api/contact. */
export async function handleLeadPost(request: NextRequest) {
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

  const payload = await request.json().catch(() => null);
  const parsed = createLeadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Neispravan format lead podataka.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const lead = await createLead({ ...parsed.data, source: "website" });

  await sendLeadEmailsSafely(lead.id, () => notifyOwnerAboutLead(lead), "owner");
  await sendLeadEmailsSafely(lead.id, () => sendLeadSubmissionConfirmation(lead), "user");

  revalidatePath("/admin");

  return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 });
}
