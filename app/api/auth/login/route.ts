import { compare } from "bcryptjs";
import { NextResponse } from "next/server";
import { adminLoginSchema } from "@/lib/schemas/auth";
import { createAdminToken, setAdminSessionCookie } from "@/lib/auth";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = adminLoginSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Neispravan format podataka za prijavu.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();
  const adminHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !adminHash) {
    return NextResponse.json({ error: "Administratorske vjerodajnice nisu konfigurirane." }, { status: 500 });
  }

  const emailMatches = parsed.data.email.toLowerCase() === adminEmail;
  const passwordMatches = await compare(parsed.data.password, adminHash);

  if (!emailMatches || !passwordMatches) {
    return NextResponse.json({ error: "Neispravan e-mail ili lozinka." }, { status: 401 });
  }

  const token = await createAdminToken(adminEmail);
  const response = NextResponse.json({
    success: true,
    user: { email: adminEmail, role: "admin" }
  });

  setAdminSessionCookie(response, token);
  return response;
}
