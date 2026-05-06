import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Ista tipografija i boja za male „eyebrow” naslove (Problem, Kontakt, FAQ, …). */
export const SECTION_EYEBROW_CLASS =
  "text-xs font-semibold uppercase tracking-[0.22em] text-brand-600";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto min-w-0 max-w-3xl text-center", className)}>
      {eyebrow ? <p className={cn("mb-3", SECTION_EYEBROW_CLASS)}>{eyebrow}</p> : null}
      <h2 className="text-balance break-words font-heading text-2xl font-bold leading-[1.1] tracking-[-0.03em] text-slate-950 sm:text-3xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
