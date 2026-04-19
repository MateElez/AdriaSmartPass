import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const token = cookies().get(ADMIN_COOKIE_NAME)?.value;
  const session = token ? await verifyAdminToken(token) : null;

  if (!session) {
    redirect("/admin/login");
  }

  return <AdminDashboard adminEmail={session.email} />;
}
