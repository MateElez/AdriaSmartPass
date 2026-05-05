import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-200 via-slate-100 to-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid opacity-70" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 min-w-0 w-full">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
