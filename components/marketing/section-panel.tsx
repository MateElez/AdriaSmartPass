import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Naslovi sekcija unutar panela — lijevo, uz čitljivu širinu */
export const SECTION_HEADING_MARKETING = "relative mx-0 max-w-3xl text-left";

/** Kartice u mreži (problem, za koga, koraci, statistike …) */
export const MARKETING_CARD =
  "rounded-3xl border border-slate-200 bg-white shadow-subtle transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-soft";

/** Veći blokovi (usluge, usporedbe Prije/Poslije) */
export const MARKETING_SURFACE =
  "rounded-3xl border border-slate-200 bg-white shadow-subtle transition hover:border-slate-300";

/** Naglašeni blok (npr. „Poslije”, istaknuti sadržaj) */
export const MARKETING_SURFACE_EMPHASIS =
  "rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-white shadow-subtle";

type SectionPanelProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function SectionPanel({ id, children, className, innerClassName }: SectionPanelProps) {
  return (
    <div
      id={id}
      className={cn(
        "scroll-mt-24 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-subtle",
        className
      )}
    >
      <div
        className={cn(
          "relative px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16",
          innerClassName
        )}
      >
        <div className="pointer-events-none absolute -right-24 top-0 h-56 w-56 rounded-full bg-brand-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-brand-100/45 blur-3xl" />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
