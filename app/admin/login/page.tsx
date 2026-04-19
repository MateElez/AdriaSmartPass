import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "@/lib/auth";

type AdminLoginPageProps = {
  searchParams: {
    next?: string | string[];
  };
};

function normalizeNextPath(next: string | string[] | undefined) {
  const value = Array.isArray(next) ? next[0] : next;
  if (!value || !value.startsWith("/")) {
    return "/admin";
  }
  return value;
}

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const token = cookies().get(ADMIN_COOKIE_NAME)?.value;
  const session = token ? await verifyAdminToken(token) : null;
  if (session) {
    redirect("/admin");
  }

  const nextPath = normalizeNextPath(searchParams.next);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,127,125,0.25),transparent_45%),radial-gradient(circle_at_bottom,rgba(245,158,11,0.18),transparent_50%)]" />
      <div className="relative w-full max-w-md">
        <AdminLoginForm nextPath={nextPath} />
      </div>
    </main>
  );
}
