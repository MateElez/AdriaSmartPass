import { NextRequest } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/auth";
import { handleLeadPost } from "@/lib/api/handle-lead-post";
import { leadListQuerySchema } from "@/lib/schemas/lead";
import { getLeadDashboardMetrics, listLeads } from "@/lib/services/lead-service";

export async function POST(request: NextRequest) {
  return handleLeadPost(request);
}

export async function GET(request: NextRequest) {
  const session = await getAdminSessionFromRequest(request);
  if (!session) {
    return Response.json({ error: "Neautorizirano" }, { status: 401 });
  }

  const queryParams = {
    page: request.nextUrl.searchParams.get("page") ?? "1",
    pageSize: request.nextUrl.searchParams.get("pageSize") ?? "20",
    status: request.nextUrl.searchParams.get("status") || undefined,
    projectType: request.nextUrl.searchParams.get("projectType") || undefined
  };

  const parsed = leadListQuerySchema.safeParse(queryParams);
  if (!parsed.success) {
    return Response.json(
      { error: "Neispravni parametri upita.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const [list, metrics] = await Promise.all([listLeads(parsed.data), getLeadDashboardMetrics()]);

  return Response.json({
    success: true,
    ...list,
    metrics
  });
}
