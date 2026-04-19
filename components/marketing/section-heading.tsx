import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto min-w-0 max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance break-words font-heading text-2xl font-bold leading-snug text-slate-900 sm:text-3xl md:text-4xl">
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
