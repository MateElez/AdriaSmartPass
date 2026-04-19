import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { getAdminSessionFromRequest } from "@/lib/auth";
import { updateLeadStatusSchema } from "@/lib/schemas/lead";
import { deleteLead, updateLeadStatus } from "@/lib/services/lead-service";

type RouteContext = {
  params: {
    id: string;
  };
};

export async function PATCH(request: NextRequest, { params }: RouteContext) {
  const session = await getAdminSessionFromRequest(request);
  if (!session) {
    return NextResponse.json({ error: "Neautorizirano" }, { status: 401 });
  }

  const payload = await request.json().catch(() => null);
  const parsed = updateLeadStatusSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Neispravan format statusa.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const lead = await updateLeadStatus(params.id, parsed.data.status);
    revalidatePath("/admin");
    return NextResponse.json({ success: true, lead });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ error: "Lead nije pronađen." }, { status: 404 });
    }
    return NextResponse.json({ error: "Ažuriranje leada nije uspjelo." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  const session = await getAdminSessionFromRequest(request);
  if (!session) {
    return NextResponse.json({ error: "Neautorizirano" }, { status: 401 });
  }

  try {
    await deleteLead(params.id);
    revalidatePath("/admin");
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
      return NextResponse.json({ error: "Lead nije pronađen." }, { status: 404 });
    }
    return NextResponse.json({ error: "Brisanje leada nije uspjelo." }, { status: 500 });
  }
}
