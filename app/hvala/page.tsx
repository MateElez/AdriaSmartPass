import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { MARKETING_SURFACE } from "@/components/marketing/section-panel";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hvala na upitu | Adria SmartPass",
  description: "Vaš upit je zaprimljen — javljamo se unutar 24 sati."
};

export default function ThankYouPage() {
  return (
    <SiteShell>
      <article className="relative z-10 mx-auto w-full max-w-2xl px-4 pb-24 pt-16 text-center text-slate-900 md:px-6 md:pt-24">
        <div className={cn(MARKETING_SURFACE, "px-6 py-10 md:px-10 md:py-12")}>
          <h1 className="font-heading text-3xl font-bold md:text-4xl">Hvala na upitu</h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-slate-600 md:text-base">
            Vaš upit je uspješno poslan. Javljamo se unutar 24h s konkretnim prijedlogom.
          </p>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-slate-600">
            Ako želite ubrzati proces, možete nam odmah poslati slike vrata ili dodatne informacije na email.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex h-12 touch-manipulation items-center justify-center rounded-xl bg-brand-500 px-8 text-base font-semibold text-white transition hover:bg-brand-600 md:h-11"
          >
            Natrag na početnu
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
