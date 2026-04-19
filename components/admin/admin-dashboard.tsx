"use client";

import { useEffect, useState } from "react";
import { BarChart3, Filter, Loader2, LogOut, UserSearch, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import {
  LEAD_STATUS_OPTIONS,
  LEAD_STATUS_STYLES,
  PROJECT_TYPE_OPTIONS
} from "@/lib/constants";
import type { LeadDashboardMetrics } from "@/types/lead";
import type { LeadStatusValue, ProjectTypeValue } from "@/types/enums";

type LeadRecord = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string | null;
  projectType: ProjectTypeValue;
  message: string;
  status: LeadStatusValue;
  source: string;
  createdAt: string;
  updatedAt: string;
};

type LeadResponsePayload = {
  success: boolean;
  leads: LeadRecord[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  metrics: LeadDashboardMetrics;
};

type AdminDashboardProps = {
  adminEmail: string;
};

function projectTypeLabel(projectType: ProjectTypeValue) {
  const option = PROJECT_TYPE_OPTIONS.find((item) => item.value === projectType);
  return option?.label ?? projectType;
}

function statusLabel(status: LeadStatusValue) {
  const option = LEAD_STATUS_OPTIONS.find((item) => item.value === status);
  return option?.label ?? status;
}

function formatDate(value: string) {
  const date = new Date(value);
  return new Intl.DateTimeFormat("hr-HR", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

export function AdminDashboard({ adminEmail }: AdminDashboardProps) {
  const { pushToast } = useToast();
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [metrics, setMetrics] = useState<LeadDashboardMetrics | null>(null);
  const [statusFilter, setStatusFilter] = useState<LeadStatusValue | "">("");
  const [projectTypeFilter, setProjectTypeFilter] = useState<ProjectTypeValue | "">("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [updatingLeadId, setUpdatingLeadId] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<LeadRecord | null>(null);

  useEffect(() => {
    void fetchLeads();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, projectTypeFilter, page]);

  function handleUnauthorized(response: Response) {
    if (response.status === 401) {
      window.location.href = "/admin/login";
      return true;
    }
    return false;
  }

  async function fetchLeads() {
    try {
      if (loading) {
        setLoading(true);
      } else {
        setRefreshing(true);
      }

      const params = new URLSearchParams({
        page: String(page),
        pageSize: "20"
      });

      if (statusFilter) {
        params.set("status", statusFilter);
      }

      if (projectTypeFilter) {
        params.set("projectType", projectTypeFilter);
      }

      const response = await fetch(`/api/leads?${params.toString()}`, {
        method: "GET",
        cache: "no-store"
      });

      if (handleUnauthorized(response)) {
        return;
      }

      if (!response.ok) {
        throw new Error("Dohvat leadova nije uspio.");
      }

      const payload = (await response.json()) as LeadResponsePayload;
      setLeads(payload.leads);
      setMetrics(payload.metrics);
      setTotalPages(payload.totalPages);
    } catch (error) {
      pushToast({
        title: "Učitavanje leadova nije uspjelo",
        description: error instanceof Error ? error.message : "Osvježite nadzornu ploču.",
        variant: "error"
      });
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  async function handleStatusUpdate(leadId: string, nextStatus: LeadStatusValue) {
    try {
      setUpdatingLeadId(leadId);
      const response = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus })
      });

      if (handleUnauthorized(response)) {
        return;
      }

      if (!response.ok) {
        throw new Error("Ažuriranje statusa leada nije uspjelo.");
      }

      setLeads((current) =>
        current.map((lead) =>
          lead.id === leadId ? { ...lead, status: nextStatus, updatedAt: new Date().toISOString() } : lead
        )
      );

      await fetchLeads();
      pushToast({
        title: "Lead je ažuriran",
        description: `Status je promijenjen u: ${statusLabel(nextStatus)}.`,
        variant: "success"
      });
    } catch (error) {
      pushToast({
        title: "Ažuriranje nije uspjelo",
        description: error instanceof Error ? error.message : "Pokušajte ponovno.",
        variant: "error"
      });
    } finally {
      setUpdatingLeadId(null);
    }
  }

  async function handleDelete(leadId: string) {
    const confirmed = window.confirm("Trajno obrisati ovaj lead?");
    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: "DELETE"
      });

      if (handleUnauthorized(response)) {
        return;
      }

      if (!response.ok) {
        throw new Error("Brisanje leada nije uspjelo.");
      }

      setLeads((current) => current.filter((lead) => lead.id !== leadId));
      await fetchLeads();
      pushToast({
        title: "Lead je obrisan",
        description: "Zapis leada je uklonjen.",
        variant: "success"
      });
    } catch (error) {
      pushToast({
        title: "Brisanje nije uspjelo",
        description: error instanceof Error ? error.message : "Pokušajte ponovno za trenutak.",
        variant: "error"
      });
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-300">Admin CRM</p>
            <h1 className="font-heading text-2xl font-semibold text-white">Nadzorna ploča leadova</h1>
          </div>
          <div className="flex items-center gap-3">
            <p className="hidden text-sm text-slate-400 md:block">{adminEmail}</p>
            <Button variant="ghost" className="border border-white/15" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Odjava
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 md:px-6">
        {loading || !metrics ? (
          <div className="grid gap-4 md:grid-cols-4">
            <Skeleton className="h-28 bg-white/10" />
            <Skeleton className="h-28 bg-white/10" />
            <Skeleton className="h-28 bg-white/10" />
            <Skeleton className="h-28 bg-white/10" />
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">Ukupno leadova</p>
              <p className="mt-3 font-heading text-3xl font-semibold text-white">{metrics.total}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">Novi leadovi</p>
              <p className="mt-3 font-heading text-3xl font-semibold text-sky-300">{metrics.newLeads}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">Stopa konverzije</p>
              <p className="mt-3 font-heading text-3xl font-semibold text-emerald-300">
                {metrics.conversionRate}%
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-500">Leadovi ovaj tjedan</p>
              <p className="mt-3 font-heading text-3xl font-semibold text-amber-300">{metrics.thisWeek}</p>
            </div>
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
            <div className="mb-2 flex items-center gap-2 text-slate-300">
              <BarChart3 className="h-4 w-4" />
              <p className="text-sm font-semibold">Pregled pipelinea</p>
            </div>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Kontaktirani: {metrics?.contacted ?? 0}</p>
              <p>U obradi: {metrics?.inProgress ?? 0}</p>
              <p>Dobiveni: {metrics?.won ?? 0}</p>
              <p>Izgubljeni: {metrics?.lost ?? 0}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 xl:col-span-3">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Filter className="h-4 w-4" />
                Filteri
              </div>

              <select
                value={statusFilter}
                onChange={(event) => {
                  setStatusFilter(event.target.value as LeadStatusValue | "");
                  setPage(1);
                }}
                className="h-10 rounded-lg border border-white/15 bg-slate-950 px-3 text-sm text-slate-100 outline-none focus:border-brand-400"
              >
                <option value="">Svi statusi</option>
                {LEAD_STATUS_OPTIONS.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>

              <select
                value={projectTypeFilter}
                onChange={(event) => {
                  setProjectTypeFilter(event.target.value as ProjectTypeValue | "");
                  setPage(1);
                }}
                className="h-10 rounded-lg border border-white/15 bg-slate-950 px-3 text-sm text-slate-100 outline-none focus:border-brand-400"
              >
                <option value="">Sve vrste projekata</option>
                {PROJECT_TYPE_OPTIONS.map((projectType) => (
                  <option key={projectType.value} value={projectType.value}>
                    {projectType.label}
                  </option>
                ))}
              </select>

              <div className="w-full text-xs text-slate-500 sm:ml-auto sm:w-auto">
                Analitički pregled: Prosj. vrijeme odgovora 1,8 h | Trend +14%
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm">
                <thead className="bg-slate-950/80 text-xs uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-medium">Ime</th>
                    <th className="px-4 py-3 font-medium">E-mail</th>
                    <th className="px-4 py-3 font-medium">Telefon</th>
                    <th className="px-4 py-3 font-medium">Vrsta projekta</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Datum</th>
                    <th className="px-4 py-3 font-medium">Akcije</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 bg-slate-900/80">
                  {loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                      <tr key={`skeleton-row-${index}`}>
                        <td className="px-4 py-3">
                          <Skeleton className="h-4 w-28 bg-white/10" />
                        </td>
                        <td className="px-4 py-3">
                          <Skeleton className="h-4 w-36 bg-white/10" />
                        </td>
                        <td className="px-4 py-3">
                          <Skeleton className="h-4 w-24 bg-white/10" />
                        </td>
                        <td className="px-4 py-3">
                          <Skeleton className="h-4 w-20 bg-white/10" />
                        </td>
                        <td className="px-4 py-3">
                          <Skeleton className="h-9 w-28 bg-white/10" />
                        </td>
                        <td className="px-4 py-3">
                          <Skeleton className="h-4 w-24 bg-white/10" />
                        </td>
                        <td className="px-4 py-3">
                          <Skeleton className="h-4 w-20 bg-white/10" />
                        </td>
                      </tr>
                    ))
                  ) : leads.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-12">
                        <div className="flex flex-col items-center justify-center text-center text-slate-400">
                          <UserSearch className="h-8 w-8 text-slate-500" />
                          <p className="mt-3 text-sm font-medium text-slate-300">Nema leadova</p>
                          <p className="mt-1 text-xs">
                            Novi upiti s weba automatski će se prikazati ovdje.
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    leads.map((lead) => (
                      <tr key={lead.id}>
                        <td className="px-4 py-3 text-slate-100">{lead.fullName}</td>
                        <td className="px-4 py-3 text-slate-300">{lead.email}</td>
                        <td className="px-4 py-3 text-slate-300">{lead.phone}</td>
                        <td className="px-4 py-3 text-slate-300">{projectTypeLabel(lead.projectType)}</td>
                        <td className="px-4 py-3">
                          <select
                            value={lead.status}
                            disabled={updatingLeadId === lead.id}
                            onChange={(event) =>
                              handleStatusUpdate(lead.id, event.target.value as LeadStatusValue)
                            }
                            className="h-9 rounded-lg border border-white/15 bg-slate-950 px-2 text-xs text-slate-100 outline-none focus:border-brand-400 disabled:opacity-60"
                          >
                            {LEAD_STATUS_OPTIONS.map((status) => (
                              <option key={status.value} value={status.value}>
                                {status.label}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3 text-slate-400">{formatDate(lead.createdAt)}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setSelectedLead(lead)}
                              className="rounded-md border border-white/15 px-2 py-1 text-xs text-slate-200 transition hover:bg-white/10"
                            >
                              Pregled
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(lead.id)}
                              className="rounded-md border border-rose-400/30 px-2 py-1 text-xs text-rose-300 transition hover:bg-rose-500/10"
                            >
                              Obriši
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
              <p className="text-xs text-slate-500">
                {refreshing ? (
                  <span className="inline-flex items-center gap-1">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    Osvježavanje
                  </span>
                ) : (
                  "Nadzorna ploča sinkronizirana"
                )}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="border border-white/10"
                  disabled={page <= 1}
                  onClick={() => setPage((value) => Math.max(1, value - 1))}
                >
                  Prethodna
                </Button>
                <span className="text-xs text-slate-500">
                  Stranica {page} / {totalPages}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="border border-white/10"
                  disabled={page >= totalPages}
                  onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
                >
                  Sljedeća
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {selectedLead ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/80 p-4 sm:items-center">
          <div className="max-h-[min(90dvh,calc(100dvh-2rem))] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-soft sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Detalji leada</p>
                <h3 className="mt-1 font-heading text-2xl font-semibold text-white">
                  {selectedLead.fullName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="rounded-lg p-1 text-slate-400 transition hover:bg-white/10 hover:text-slate-200"
                aria-label="Zatvori detalje"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">E-mail</p>
                <p className="mt-1 text-sm text-slate-200">{selectedLead.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Telefon</p>
                <p className="mt-1 text-sm text-slate-200">{selectedLead.phone}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Tvrtka</p>
                <p className="mt-1 text-sm text-slate-200">{selectedLead.company ?? "Nije navedeno"}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Vrsta projekta</p>
                <p className="mt-1 text-sm text-slate-200">{projectTypeLabel(selectedLead.projectType)}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Status</p>
                <Badge className={LEAD_STATUS_STYLES[selectedLead.status]}>
                  {statusLabel(selectedLead.status)}
                </Badge>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Zaprimljeno</p>
                <p className="mt-1 text-sm text-slate-200">{formatDate(selectedLead.createdAt)}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-slate-500">Poruka</p>
              <p className="mt-2 break-words rounded-xl border border-white/10 bg-slate-950 p-4 text-sm text-slate-300">
                {selectedLead.message}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <Button variant="secondary" onClick={() => setSelectedLead(null)}>
                Zatvori
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
