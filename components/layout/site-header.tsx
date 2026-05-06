"use client";

import { LogoWordmark } from "@/components/brand/logo-wordmark";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { KONTAKT_PRIMARY_BUTTON_LABEL } from "@/lib/kontakt-cta";
import { cn } from "@/lib/utils";

const NAV_TABS = [
  { label: "Usluge", href: "/#usluge" },
  { label: "Kako radimo", href: "/#kako-radimo" },
  { label: "O nama", href: "/#o-nama" },
  { label: "Blog", href: "/#blog" },
  { label: "Kontakt", href: "/#kontakt" }
] as const;

/** Na početnoj: samo hash (isti dokument). S drugih ruta: puni put da preglednik učita `/` i pomakne na sidro — `Link` u App Routeru to često ne napravi. */
function homeSectionHref(pathname: string, sectionHref: string) {
  return pathname === "/" ? sectionHref.slice(1) : sectionHref;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.25rem] w-full max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4 md:gap-4 md:px-6">
        <a
          href={homeSectionHref(pathname, "/#pocetna")}
          className="flex shrink-0 items-center rounded-md transition hover:opacity-[0.92] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
          aria-label="Adria Security Systems — premium smart property security"
        >
          <LogoWordmark className="h-9 max-w-[min(82vw,22rem)] sm:h-10 sm:max-w-[min(78vw,26rem)] md:h-10 md:max-w-[min(44vw,28rem)] lg:h-11 lg:max-w-none" />
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 md:flex lg:gap-5">
          <nav className="flex flex-wrap items-center justify-end gap-x-2 gap-y-1 lg:gap-x-3 lg:gap-y-2">
            {NAV_TABS.map((link) => (
              <a
                key={link.href}
                href={homeSectionHref(pathname, link.href)}
                className="whitespace-nowrap text-sm font-medium text-slate-700 transition hover:text-slate-950 hover:underline hover:decoration-slate-300 hover:underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={homeSectionHref(pathname, "/#kontakt")}
            className={cn(
              "inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 px-4 text-sm font-semibold text-white transition hover:bg-brand-600",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 focus-visible:ring-offset-2"
            )}
          >
            {KONTAKT_PRIMARY_BUTTON_LABEL}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-700 touch-manipulation md:hidden"
          aria-label={open ? "Zatvori navigaciju" : "Prikaži navigaciju"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:px-4">
            <nav className="flex flex-col gap-1">
              <a
                href={homeSectionHref(pathname, "/#kontakt")}
                onClick={() => setOpen(false)}
                className="min-h-11 rounded-xl bg-brand-500 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 touch-manipulation"
              >
                  {KONTAKT_PRIMARY_BUTTON_LABEL}
                </a>
              {NAV_TABS.map((link) => {
                return (
                  <a
                    key={link.href}
                    href={homeSectionHref(pathname, link.href)}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "min-h-11 rounded-lg px-3 py-2.5 text-sm font-medium transition touch-manipulation",
                      "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
