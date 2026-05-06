import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  LayoutDashboard,
  Lock,
  ShieldCheck,
  Users,
  Video,
  Wand2
} from "lucide-react";
import { AnimatedSection } from "@/components/marketing/animated-section";
import {
  MARKETING_CARD,
  MARKETING_SURFACE,
  MARKETING_SURFACE_EMPHASIS,
  SECTION_HEADING_MARKETING,
  SectionPanel
} from "@/components/marketing/section-panel";
import { BlogCard } from "@/components/marketing/blog-card";
import { SECTION_EYEBROW_CLASS, SectionHeading } from "@/components/marketing/section-heading";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { SiteShell } from "@/components/layout/site-shell";
import { ContactForm } from "@/components/forms/contact-form";
import { BLOG_POSTS } from "@/lib/blog-meta";
import {
  FAQ_ITEMS,
  HOW_IT_WORKS_STEPS,
  SERVICE_ITEMS,
  SOCIAL_PROOF_MAIN_STAT,
  SOCIAL_PROOF_OUTCOME,
  TESTIMONIALS
} from "@/lib/constants";
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBERS } from "@/lib/contact-info";
import { KONTAKT_PRIMARY_BUTTON_LABEL } from "@/lib/kontakt-cta";
import { cn } from "@/lib/utils";

const HOME_BLOG_PREVIEW = BLOG_POSTS.slice(0, 3);

const PROBLEM_LANDING_CARDS: Array<{ title: string; body: string; Icon: typeof Lock }> = [
  {
    title: "Nedostatak pregleda nad objektom",
    body: "Ulazi, parking, zajednički i servisni prostori ostaju bez stvarnog nadzora — ne znate što se događa kad niste prisutni.",
    Icon: Lock
  },
  {
    title: "Nema brzog uvida kad se nešto dogodi",
    body: "Kad stigne poziv ili upozorenje, nemate trenutni live pregled ni pouzdanu provjeru situacije na daljinu.",
    Icon: LayoutDashboard
  },
  {
    title: "Više lokacija, bez centralnog pregleda",
    body: "Kod više objekata informacije su raspršene i nepovezane — bez jednog mjesta gdje imate puni pregled.",
    Icon: Users
  },
  {
    title: "Incidenti bez jasnog zapisa",
    body: "Bez kvalitetnog nadzora i snimke teško je utvrditi što se dogodilo te zaštititi objekt, reputaciju ili interes prema osiguranju.",
    Icon: ShieldCheck
  }
];

const RJESENJE_COMPARE_PRIJE = [
  {
    title: "Bez jasnog pregleda nad objektom",
    body: "Ne znate što se događa kad niste na lokaciji."
  },
  {
    title: "Odluke bez potpunih informacija",
    body: "Probleme često saznajete od drugih — bez jasnog uvida u stvarnu situaciju."
  },
  {
    title: "Reagirate tek nakon incidenta",
    body: "Tek kad se nešto dogodi pokušavate utvrditi što se dogodilo i kako je nastao problem."
  }
] as const;

const RJESENJE_COMPARE_POSLIJE = [
  {
    title: "Stalan pregled nad objektom",
    body: "U svakom trenutku imate live uvid u ono što se događa na lokaciji."
  },
  {
    title: "Brža reakcija na važne situacije",
    body: "Odmah vidite što zahtijeva pažnju i reagirate bez nagađanja."
  },
  {
    title: "Pouzdan zapis i pregled događaja",
    body: "Sve kritične zone ostaju dokumentirane za kasniji pregled i provjeru."
  }
] as const;

/** Dinamički render — izbjegava povremeni Next 14 bug pri statičkom izvozu ove rute. */
export const dynamic = "force-dynamic";

function HeroMockDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-brand-500/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
          </div>
          <div className="min-w-0 text-center">
            <p className="truncate text-xs font-semibold text-slate-700">Adria Security — Monitoring pregled</p>
            <p className="mt-0.5 text-[11px] text-slate-500">Live · Snimke · Događaji</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
            Aktivno
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: "Live", active: true },
              { label: "Snimke", active: false },
              { label: "Događaji", active: false }
            ].map((tab) => (
              <span
                key={tab.label}
                className={cn(
                  "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold",
                  tab.active ? "border-brand-200 bg-brand-500/10 text-brand-700" : "border-slate-200 bg-white text-slate-600"
                )}
              >
                {tab.label}
              </span>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-subtle">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Kamere / zone</p>
              <div className="mt-3 space-y-2">
                {[
                  { name: "Villa — Ulaz / Perimetar", meta: "Live pogled", tone: "bg-emerald-500", pill: "Live" },
                  { name: "Parking zona", meta: "Snimanje u tijeku", tone: "bg-brand-500", pill: "Recording" },
                  { name: "Servisni ulaz", meta: "Stabilno", tone: "bg-slate-400", pill: "OK" }
                ].map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 transition hover:bg-white"
                  >
                    <span className={cn("mt-0.5 h-9 w-9 shrink-0 rounded-xl border border-slate-200 bg-white")} aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-950">{row.name}</p>
                      <p className="mt-0.5 truncate text-xs text-slate-500">{row.meta}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                      <span className={cn("h-1.5 w-1.5 rounded-full", row.tone)} aria-hidden />
                      {row.pill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Događaji</p>
              <div className="mt-3 space-y-2">
                {[
                  { time: "22:14", label: "Detekcija kretanja", tone: "bg-brand-500" },
                  { time: "21:48", label: "Pregled snimke", tone: "bg-slate-400" },
                  { time: "21:06", label: "Provjera perimetra", tone: "bg-emerald-500" }
                ].map((evt) => (
                  <div key={evt.time + evt.label} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-subtle">
                    <span className={cn("mt-1 h-2 w-2 rounded-full", evt.tone)} aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-slate-500">{evt.time}</p>
                      <p className="mt-0.5 truncate text-sm font-medium text-slate-800">{evt.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {["Obavijesti: aktivno", "Pohrana: OK"].map((chip) => (
                  <span key={chip} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <SiteShell>
      <section
        id="pocetna"
        className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 pt-14 sm:px-4 sm:pb-20 sm:pt-16 md:px-6 md:pb-24 md:pt-20"
      >
        <div className="grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
          <div className="min-w-0">
            <p className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 sm:px-4 sm:text-xs">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            Premium video nadzor
          </p>
            <h1 className="mt-5 text-balance font-heading text-[2.65rem] font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:mt-6 sm:text-5xl md:text-[4.25rem]">
              Profesionalni{" "}
              <span className="text-brand-600">video nadzor</span> i{" "}
              <span className="text-brand-600">monitoring</span> za{" "}
              <span className="text-brand-600">sigurnost</span> vaših nekretnina.
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:mt-6 sm:text-base md:text-lg">
              Projektiramo i ugrađujemo sustave video nadzora za ville, apartmane, hotele i poslovne objekte — uz diskretnu
              montažu, pouzdanu pohranu i jasan pregled događaja kad zatrebate mir ili dokaz.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#kontakt"
                className={cn(
                  "inline-flex h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 text-base font-semibold text-white transition hover:bg-brand-600",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 focus-visible:ring-offset-2",
                  "sm:h-11 sm:w-auto"
                )}
              >
                {KONTAKT_PRIMARY_BUTTON_LABEL}
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </a>
              <a
                href="#kako-radimo"
                className={cn(
                  "inline-flex h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-xl bg-slate-100 px-6 text-base font-semibold text-slate-900 transition hover:bg-slate-200",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/30 focus-visible:ring-offset-2",
                  "sm:h-11 sm:w-auto"
                )}
              >
                Pogledajte kako radimo
              </a>
            </div>
          </div>

          <div className="min-w-0 md:pt-2">
            <HeroMockDashboard />
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="problem">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Problem"
            title={
              <>
                Sigurnost se najčešće primijeti{" "}
                <span className="text-brand-600">tek kad nešto pođe po zlu</span>.
              </>
            }
            description="Bez stalnog uvida u objekt, vlasnici i operateri često reagiraju tek nakon problema — umjesto da rizik drže pod kontrolom unaprijed."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {PROBLEM_LANDING_CARDS.map(({ title, body, Icon }) => (
              <div key={title} className={cn(MARKETING_CARD, "p-6 md:p-7")}>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-950">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <p className="font-heading text-base font-semibold text-slate-950">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="rjesenje">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Rješenje"
            title="Stalni pregled i kontrola nad objektom."
            description="Umjesto da reagirate tek nakon problema, dobivate jasniji pregled kritičnih zona i brže odluke — profesionalni video nadzor i udaljeni nadzor prilagođeni najmu i ugostiteljstvu."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className={cn("rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8")}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Prije</p>
              <div className="mt-4 space-y-5">
                {RJESENJE_COMPARE_PRIJE.map(({ title, body }) => (
                  <div key={title}>
                    <p className="font-heading text-sm font-semibold text-slate-900">{title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={cn(MARKETING_SURFACE_EMPHASIS, "p-6 md:p-8")}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">Poslije</p>
              <ul className="mt-4 space-y-5 text-sm text-slate-700">
                {RJESENJE_COMPARE_POSLIJE.map(({ title, body }) => (
                  <li key={title} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" aria-hidden />
                    <div>
                      <p className="font-heading font-semibold text-slate-900">{title}</p>
                      <p className="mt-1.5 leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="scenariji">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Scenariji"
            title="Tri situacije koje najčešće rješavamo"
            description="Primjeri iz prakse — sustav prilagođavamo objektu, načinu rada i razini nadzora koja vam treba."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-950">
                <Video className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900">Dolazak i odlazak gostiju</h3>
              <p className="mt-2 text-sm text-slate-600">
                Pregled ulaza, prilaza i zajedničkih zona tijekom check-ina/check-outa te jasan zapis ako dođe do problema ili spora.
              </p>
            </article>
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-950">
                <Users className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900">Operativa i servisno osoblje</h3>
              <p className="mt-2 text-sm text-slate-600">
                Uvid u kretanje i aktivnosti u servisnim i zajedničkim prostorima bez oslanjanja na nagađanja ili usmene informacije.
              </p>
            </article>
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-950">
                <LayoutDashboard className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900">Vlasnik ili manager na daljinu</h3>
              <p className="mt-2 text-sm text-slate-600">
                Live pregled objekta, obavijesti i brza provjera situacije kad niste na lokaciji ili upravljate na daljinu.
              </p>
            </article>
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="usluge">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Usluge"
            title="Usluge koje donose stvaran pregled i kontrolu"
            description="Projektiramo, ugrađujemo i konfiguriramo sigurnosne sustave prilagođene načinu rada vašeg objekta."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {SERVICE_ITEMS.map((service) => (
              <div
                key={service.slug ?? service.title}
                id={service.slug}
                className={cn(
                  MARKETING_CARD,
                  "scroll-mt-24 p-6 md:p-7 hover:-translate-y-0.5 hover:shadow-soft"
                )}
              >
                <div className="flex min-w-0 flex-col">
                  <h3 className="font-heading text-xl font-semibold leading-snug text-slate-950 sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.details}</p>
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">Najčešće uključuje</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={cn(MARKETING_SURFACE, "mt-8 space-y-3 p-6 md:p-8")}>
            <p className="text-sm leading-relaxed text-slate-700">
              Kombinaciju kamera, pohrane i mrežne infrastrukture biramo prema stvarnim potrebama objekta i načinu korištenja.
            </p>
            <p className="text-sm leading-relaxed text-slate-700">
              Ne nudimo generičke pakete — nego sustav koji ima smisla za vaš prostor i operativu.
            </p>
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="kako-radimo">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Kako radimo"
            title="4 koraka do sigurnosnog sustava koji radi pouzdano"
            description="Jasan proces od procjene do puštanja u rad — bez improvizacije i nepotrebne kompleksnosti."
          />
          <div className="mt-10">
            <div className="relative">
              <div className="pointer-events-none absolute left-[20px] top-2 h-[calc(100%-12px)] w-px bg-slate-200" aria-hidden />
              <div className="space-y-6">
                {HOW_IT_WORKS_STEPS.map((step, index) => {
                  const icons = [ClipboardCheck, LayoutDashboard, Wand2, ShieldCheck];
                  const Icon = icons[index % icons.length];
                  const stepNum = String(index + 1).padStart(2, "0");
                  return (
                    <div key={step.title} className="relative grid gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-subtle">
                      <div className="flex items-start gap-4">
                        <div className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-950">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-heading text-xl font-semibold text-slate-950">
                            <span className="text-brand-600">{stepNum}</span>
                            <span className="text-slate-400"> — </span>
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="povjerenje">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Povjerenje"
            title="Provjereno u stvarnim objektima"
            description="Sustavi koje postavljamo vlasnicima i timovima daju bolji pregled nad objektom, bržu reakciju kad se nešto dogodi i pouzdan zapis događaja kad je potreban stvaran uvid."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className={cn(MARKETING_CARD, "p-5 md:p-6")}>
              <p className="font-heading text-2xl font-semibold text-slate-900">{SOCIAL_PROOF_MAIN_STAT.headline}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{SOCIAL_PROOF_MAIN_STAT.body}</p>
            </div>
            <div className={cn(MARKETING_CARD, "p-5 md:p-6")}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Najčešći rezultat</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">{SOCIAL_PROOF_OUTCOME}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.attribution} className={cn(MARKETING_CARD, "flex h-full flex-col p-5 md:p-6")}>
                <blockquote className="text-sm leading-relaxed text-slate-700">„{t.quote}”</blockquote>
                <figcaption className="mt-4 text-xs text-slate-500">— {t.attribution}</figcaption>
              </figure>
            ))}
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="o-nama">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="O nama"
            title="Premium sigurnosni sustavi za moderne nekretnine"
            description="Adria Security Systems specijaliziran je za video nadzor i smart security sustave za vile, apartmane, hotele i manje poslovne objekte."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="min-w-0 space-y-4 text-[15px] leading-relaxed text-slate-700 md:text-lg">
              <p>
                Sustave prilagođavamo stvarnom načinu korištenja objekta — sezoni, smjenama gostiju, svakodnevnoj operativi i radu osoblja. Cilj je jasan pregled ključnih zona, pouzdan nadzor i jednostavnije upravljanje objektom kad niste na lokaciji.
              </p>
              <p>
                Ne gledamo sigurnost kao samo postavljanje kamera. Gradimo sustave koji dugoročno imaju smisla za objekt i mogu se kasnije nadograđivati kroz alarm, kontrolu pristupa i dodatne sigurnosne slojeve.
              </p>
              <p>
                Fokus nam je stabilan sustav, uredna izvedba i sigurnosna infrastruktura koja smanjuje operativni stres i daje vam stvaran pregled nad objektom.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Praktično",
                  icon: LayoutDashboard,
                  body: "Jasan pregled ključnih zona i brz uvid u situacije koje zahtijevaju pažnju."
                },
                {
                  title: "Pouzdano",
                  icon: ShieldCheck,
                  body: "Stabilan rad sustava tijekom sezone, većeg prometa i zahtjevnih uvjeta rada."
                },
                {
                  title: "Uz podršku",
                  icon: Users,
                  body: "Sustav se može širiti zajedno s objektom — od video nadzora do dodatnih sigurnosnih integracija."
                }
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className={cn(MARKETING_CARD, "p-6")}>
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-950">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{card.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="blog" className="overflow-visible">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Blog"
            title="Tri članka za početak"
            description="Kratki uvidi i praktične teme iz područja video nadzora, sigurnosti i upravljanja objektima."
          />
          <div className="relative z-10 mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {HOME_BLOG_PREVIEW.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                category={post.category}
                imageSrc={post.imageSrc}
                imageAlt={post.imageAlt}
                excerpt={post.excerpt}
                dateLabel={post.dateLabel}
                readTimeLabel={post.readTimeLabel}
                href={`/blog/${post.slug}`}
              />
            ))}
          </div>
          <div className="relative z-10 mt-10">
            <Link
              href="/blog"
              className="relative inline-flex min-h-11 items-center rounded-lg px-2 py-2 text-sm font-semibold text-slate-900 underline-offset-4 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
            >
              Pogledaj sve članke na blogu
            </Link>
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="faq">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="FAQ"
            title="Česta pitanja"
            description="Kratki odgovori na najčešće nedoumice prije ugradnje."
          />
          <div className="mt-10">
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <section
          id="kontakt"
          className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[32px] border border-slate-200/90 bg-gradient-to-b from-slate-50 via-white to-slate-50 px-5 py-14 text-slate-900 shadow-subtle sm:px-6 md:px-10 md:py-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-brand-500/[0.035]" aria-hidden />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mx-auto inline-flex items-center rounded-full border border-brand-200/80 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-700">
              Konzultacije
            </p>
            <h2 className="mt-6 text-balance font-heading text-3xl font-black leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-4xl md:text-5xl">
              Sigurnosni pregled vašeg objekta
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>Opišite svoj objekt i način korištenja — bilo da se radi o jednom objektu ili više objekata.</p>
              <p>
                Na temelju toga predlažemo kako postaviti video nadzor i monitoring sustav koji ima smisla za vaš način rada —
                bez nepotrebne opreme i kompleksnosti.
              </p>
              <p>Odgovaramo unutar 24 sata s jasnim sljedećim koracima.</p>
            </div>
          </div>

          <div className="relative mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-subtle">
              <p className={SECTION_EYEBROW_CLASS}>Kontakt</p>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p className="min-w-0 break-words">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-black underline-offset-4 visited:text-black hover:text-black hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
                {CONTACT_PHONE_NUMBERS.map(({ href, label, contact }) => (
                  <p key={href}>
                    <a
                      href={href}
                      className="font-semibold text-black underline-offset-4 visited:text-black hover:text-black hover:underline"
                    >
                      {label}
                      <span className="font-normal text-black"> — {contact}</span>
                    </a>
                  </p>
                ))}
                <p className="text-slate-600">Split, Hrvatska</p>
              </div>
            </div>

            <div className="min-w-0">
              <ContactForm />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </SiteShell>
  );
}
