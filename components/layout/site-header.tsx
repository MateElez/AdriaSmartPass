"use client";

import { LogoWordmark } from "@/components/brand/logo-wordmark";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_TABS = [
  { label: "Početna", href: "/#pocetna" },
  { label: "O nama", href: "/#o-nama" },
  { label: "Problem", href: "/#problem" },
  { label: "Rješenje", href: "/#rjesenje" },
  { label: "Usluge", href: "/#usluge" },
  { label: "Kako radimo", href: "/#kako-radimo" },
  { label: "Blog", href: "/#blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#kontakt" }
] as const;

/** Na početnoj: samo hash (isti dokument). S drugih ruta: puni put da preglednik učita `/` i pomakne na sidro — `Link` u App Routeru to često ne napravi. */
function homeSectionHref(pathname: string, sectionHref: (typeof NAV_TABS)[number]["href"]) {
  return pathname === "/" ? sectionHref.slice(1) : sectionHref;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-300/70 bg-slate-50/80 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[3.75rem] w-full max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:min-h-16 sm:gap-3 sm:px-4 md:min-h-[4.25rem] md:gap-4 md:px-5 md:py-2.5 lg:px-6">
        <a
          href={homeSectionHref(pathname, "/#pocetna")}
          className="flex shrink-0 items-center rounded-md transition hover:opacity-[0.92] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
          aria-label="Adria Security Systems — premium smart property security"
        >
          <LogoWordmark className="h-9 max-w-[min(82vw,22rem)] sm:h-10 sm:max-w-[min(78vw,26rem)] md:h-11 md:max-w-[min(52vw,28rem)] lg:h-12 lg:max-w-none xl:h-[3.25rem]" />
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-end gap-2 lg:gap-3 xl:gap-4 md:flex">
          {NAV_TABS.map((link) => {
            const isActive = pathname === "/" && link.href.endsWith("#pocetna");
            return (
              <a
                key={link.href}
                href={homeSectionHref(pathname, link.href)}
                className={cn(
                  "whitespace-nowrap text-xs font-medium transition lg:text-sm",
                  isActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-slate-300/70 bg-slate-50/60 p-2.5 text-slate-700 touch-manipulation md:hidden"
          aria-label={open ? "Zatvori navigaciju" : "Prikaži navigaciju"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            initial={reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-slate-300/70 bg-slate-50 md:hidden"
          >
            <div className="px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:px-4">
              <nav className="flex flex-col gap-1">
                {NAV_TABS.map((link) => {
                  const isActive = pathname === "/" && link.href.endsWith("#pocetna");
                  return (
                    <a
                      key={link.href}
                      href={homeSectionHref(pathname, link.href)}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "min-h-11 rounded-lg px-3 py-2.5 text-sm font-medium transition touch-manipulation",
                        isActive
                          ? "bg-slate-200/60 text-slate-900"
                          : "text-slate-700 hover:bg-slate-200/50 hover:text-slate-900"
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
