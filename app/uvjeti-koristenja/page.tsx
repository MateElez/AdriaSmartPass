import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Uvjeti korištenja | Adria SmartPass",
  description: "Uvjeti korištenja web stranice Adria SmartPass."
};

export default function TermsOfUsePage() {
  return (
    <SiteShell>
      <article className="relative z-10 mx-auto w-full min-w-0 max-w-3xl break-words px-4 pb-20 pt-16 text-slate-900 md:px-6 md:pt-24">
        <h1 className="font-heading text-3xl font-bold md:text-4xl">Uvjeti korištenja</h1>
        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          Korištenjem ove web stranice prihvaćate ove uvjete korištenja.
        </p>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Sadržaj stranice</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Sav sadržaj na stranici služi isključivo informativnoj svrsi. Nastojimo pružiti točne i ažurne informacije,
            ali ne jamčimo njihovu potpunu točnost.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Promjene sadržaja</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Adria SmartPass zadržava pravo izmjene sadržaja, usluga i informacija na stranici u bilo kojem trenutku bez
            prethodne najave.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Odgovornost</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Ne odgovaramo za eventualne štete nastale korištenjem informacija s ove stranice. Sav sadržaj koristite na
            vlastitu odgovornost.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Vanjske poveznice</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Stranica može sadržavati poveznice na druge web stranice za koje ne preuzimamo odgovornost.
          </p>
        </section>
      </article>
    </SiteShell>
  );
}
