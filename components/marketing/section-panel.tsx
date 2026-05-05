import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Naslovi sekcija unutar panela — lijevo, uz čitljivu širinu */
export const SECTION_HEADING_MARKETING = "relative mx-0 max-w-3xl text-left";

/** Kartice u mreži (problem, za koga, koraci, statistike …) */
export const MARKETING_CARD =
  "rounded-2xl border border-slate-300/70 bg-slate-50/80 shadow-soft backdrop-blur-sm transition hover:border-slate-400/70 hover:shadow-md";

/** Veći blokovi (usluge, usporedbe Prije/Poslije) */
export const MARKETING_SURFACE =
  "rounded-3xl border border-slate-300/70 bg-slate-50/80 shadow-soft backdrop-blur-sm transition hover:border-slate-400/70";

/** Naglašeni blok (npr. „Poslije”, istaknuti sadržaj) */
export const MARKETING_SURFACE_EMPHASIS =
  "rounded-3xl border border-slate-300/70 bg-gradient-to-br from-slate-200/70 via-slate-100/70 to-slate-50/80 shadow-soft backdrop-blur-sm";

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
        "scroll-mt-24 overflow-hidden rounded-3xl border border-slate-300/70 bg-gradient-to-b from-slate-50/80 via-slate-100/70 to-slate-200/50 shadow-soft ring-1 ring-slate-200/70",
        className
      )}
    >
      <div
        className={cn(
          "relative px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16",
          innerClassName
        )}
      >
        <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-slate-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-slate-200/50 blur-3xl" />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
