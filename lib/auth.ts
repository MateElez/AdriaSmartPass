import { jwtVerify, SignJWT } from "jose";
import type { NextRequest, NextResponse } from "next/server";

export const ADMIN_COOKIE_NAME = "asp_admin_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 12;

export type AdminSession = {
  email: string;
  role: "admin";
};

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("Missing JWT_SECRET environment variable");
  }

  return new TextEncoder().encode(secret);
}

export async function createAdminToken(email: string) {
  return new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(email)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getJwtSecret());
}

export async function verifyAdminToken(token: string): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret());
    if (payload.role !== "admin" || typeof payload.sub !== "string") {
      return null;
    }

    return {
      email: payload.sub,
      role: "admin"
    };
  } catch {
    return null;
  }
}

export async function getAdminSessionFromRequest(request: NextRequest) {
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!token) {
    return null;
  }

  return verifyAdminToken(token);
}

export function setAdminSessionCookie(response: NextResponse, token: string) {
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_SECONDS
  });
}

export function clearAdminSessionCookie(response: NextResponse) {
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0
  });
}
