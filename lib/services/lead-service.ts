import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import type { CreateLeadInput, LeadListQueryInput } from "@/lib/schemas/lead";
import type { LeadDashboardMetrics } from "@/types/lead";

type LeadWhereFilters = {
  status?: string;
  projectType?: string;
};

function buildLeadWhereClause(filters: LeadWhereFilters): Prisma.LeadWhereInput {
  const where: Prisma.LeadWhereInput = {};

  if (filters.status) {
    where.status = filters.status as Prisma.LeadWhereInput["status"];
  }

  if (filters.projectType) {
    where.projectType = filters.projectType as Prisma.LeadWhereInput["projectType"];
  }

  return where;
}

export async function createLead(data: CreateLeadInput) {
  return prisma.lead.create({
    data: {
      fullName: data.fullName.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      company: data.company?.trim() || null,
      projectType: data.projectType,
      message: data.message.trim(),
      source: data.source?.trim() || "website"
    }
  });
}

export async function listLeads(query: LeadListQueryInput) {
  const where = buildLeadWhereClause({
    status: query.status,
    projectType: query.projectType
  });
  const skip = (query.page - 1) * query.pageSize;

  const [leads, total] = await Promise.all([
    prisma.lead.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: query.pageSize
    }),
    prisma.lead.count({ where })
  ]);

  return {
    leads,
    page: query.page,
    pageSize: query.pageSize,
    total,
    totalPages: Math.max(1, Math.ceil(total / query.pageSize))
  };
}

export async function updateLeadStatus(id: string, status: string) {
  return prisma.lead.update({
    where: { id },
    data: { status: status as unknown as Prisma.LeadUpdateInput["status"] }
  });
}

export async function deleteLead(id: string) {
  return prisma.lead.delete({
    where: { id }
  });
}

export async function getLeadDashboardMetrics(): Promise<LeadDashboardMetrics> {
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const [total, newLeads, thisWeek, grouped] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: "NEW" } }),
    prisma.lead.count({ where: { createdAt: { gte: oneWeekAgo } } }),
    prisma.lead.groupBy({
      by: ["status"],
      _count: { status: true }
    })
  ]);

  const countByStatus: Record<string, number> = {
    NEW: 0,
    CONTACTED: 0,
    IN_PROGRESS: 0,
    WON: 0,
    LOST: 0
  };

  grouped.forEach((item: { status: string; _count: { status: number } }) => {
    countByStatus[item.status] = item._count.status;
  });

  const conversionRate = total === 0 ? 0 : Number(((countByStatus.WON / total) * 100).toFixed(1));

  return {
    total,
    newLeads,
    contacted: countByStatus.CONTACTED,
    inProgress: countByStatus.IN_PROGRESS,
    won: countByStatus.WON,
    lost: countByStatus.LOST,
    conversionRate,
    thisWeek
  };
}
