import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { CONTACT_EMAIL } from "@/lib/contact-info";

export const metadata: Metadata = {
  title: "Politika privatnosti | Adria SmartPass",
  description: "Politika privatnosti za web stranicu Adria SmartPass."
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <article className="relative z-10 mx-auto w-full min-w-0 max-w-3xl break-words px-4 pb-20 pt-16 text-slate-900 md:px-6 md:pt-24">
        <h1 className="font-heading text-3xl font-bold md:text-4xl">Politika privatnosti</h1>
        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          Adria SmartPass poštuje vašu privatnost i obvezuje se štititi vaše osobne podatke.
        </p>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Koje podatke prikupljamo</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Prikupljamo samo podatke koje nam sami pošaljete putem kontakt forme, kao što su ime i prezime, e-mail adresa i
            telefonski broj.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Svrha prikupljanja</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Vaše podatke koristimo isključivo za odgovor na vaš upit, pripremu ponude i daljnju komunikaciju vezanu uz naše
            usluge.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Pohrana podataka</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Podatke čuvamo samo onoliko dugo koliko je potrebno za komunikaciju i realizaciju dogovora.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Dijeljenje podataka</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Vaše podatke ne dijelimo s trećim stranama, osim ako je to nužno za pružanje usluge ili ako to zahtijeva zakon.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Vaša prava</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            U svakom trenutku možete zatražiti uvid, ispravak ili brisanje svojih podataka slanjem zahtjeva na e-mail adresu
            ispod.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-slate-900">Kontakt</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Za sva pitanja vezana uz privatnost podataka možete nas kontaktirati na:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-brand-600 underline underline-offset-4 transition hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </article>
    </SiteShell>
  );
}
