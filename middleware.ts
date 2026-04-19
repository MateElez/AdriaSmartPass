import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "@/lib/auth";

function isAdminPath(pathname: string) {
  return pathname === "/admin" || pathname.startsWith("/admin/");
}

function isLeadApiPath(pathname: string) {
  return pathname === "/api/leads" || pathname.startsWith("/api/leads/");
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (pathname === "/api/leads" && request.method === "POST") {
    return NextResponse.next();
  }

  if (!isAdminPath(pathname) && !isLeadApiPath(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const session = token ? await verifyAdminToken(token) : null;
  if (session) {
    return NextResponse.next();
  }

  if (isLeadApiPath(pathname)) {
    return NextResponse.json({ error: "Neautorizirano" }, { status: 401 });
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin/:path*", "/api/leads/:path*"]
};
