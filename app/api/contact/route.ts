import { NextRequest } from "next/server";
import { handleLeadPost } from "@/lib/api/handle-lead-post";

/** Isti tijek obrade kao POST /api/leads (za kompatibilnost s /api/contact). */
export async function POST(request: NextRequest) {
  return handleLeadPost(request);
}
