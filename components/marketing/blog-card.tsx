import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MARKETING_CARD } from "@/components/marketing/section-panel";
import { cn } from "@/lib/utils";

type BlogCardProps = {
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  excerpt: string;
  dateLabel: string;
  readTimeLabel: string;
  href: string;
};

/** Klasičan <a> umjesto next/link — pouzdana navigacija na stranicu članka u svim okruženjima. */
export function BlogCard({ title, category, imageSrc, imageAlt, excerpt, dateLabel, readTimeLabel, href }: BlogCardProps) {
  return (
    <a
      href={href}
      className={cn(
        MARKETING_CARD,
        "group relative z-10 flex h-full cursor-pointer flex-col overflow-hidden p-4 no-underline outline-none ring-offset-slate-50 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 active:scale-[0.99] touch-manipulation sm:p-5 md:p-6"
      )}
    >
      <div className="-mx-4 -mt-4 mb-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 sm:-mx-5 sm:-mt-5 sm:mb-5 md:-mx-6 md:-mt-6">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1280px) 280px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            priority={false}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 sm:text-xs sm:tracking-[0.22em]">
          {category}
        </p>
        <p className="text-[11px] text-slate-500 sm:text-xs">{dateLabel} · {readTimeLabel}</p>
      </div>

      <h3 className="mt-3 font-heading text-lg font-semibold leading-snug text-slate-900 group-hover:text-slate-900 sm:mt-4 sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
        Pročitaj više
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
      </span>
    </a>
  );
}
