import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  DoorOpen,
  Headphones,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users
} from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/marketing/animated-section";
import {
  MARKETING_CARD,
  MARKETING_SURFACE,
  MARKETING_SURFACE_EMPHASIS,
  SECTION_HEADING_MARKETING,
  SectionPanel
} from "@/components/marketing/section-panel";
import { BlogCard } from "@/components/marketing/blog-card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
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
import {
  homeKontaktHref,
  KONTAKT_CTA_LABELS,
  KONTAKT_HOME_TITLE_FALLBACK,
  resolveKontaktHeadingTitle
} from "@/lib/kontakt-cta";
import { cn } from "@/lib/utils";

const HOME_BLOG_PREVIEW = BLOG_POSTS.slice(0, 4);

/** Dinamički render — izbjegava povremeni Next 14 bug pri statičkom izvozu ove rute. */
export const dynamic = "force-dynamic";

export default function HomePage({
  searchParams
}: {
  searchParams?: { cta?: string | string[] };
}) {
  const kontaktHeadingTitle = resolveKontaktHeadingTitle(searchParams, KONTAKT_HOME_TITLE_FALLBACK);
  return (
    <SiteShell>
      <section
        id="pocetna"
        className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 pt-14 sm:px-4 sm:pb-20 sm:pt-16 md:px-6 md:pt-24"
      >
        <div className="min-w-0 max-w-4xl">
          <p className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-700 sm:px-4 sm:text-xs">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            Ulaz bez ključeva
          </p>
          <h1 className="mt-5 text-balance font-heading text-[1.7rem] font-bold leading-[1.18] text-slate-900 sm:mt-6 sm:text-4xl md:text-6xl md:leading-tight">
            Zaboravite ključeve. Gosti ulaze sami — vi imate mir.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:mt-6 sm:text-base md:text-lg">
            Ugrađujemo pametne brave i kontrolu pristupa za apartmane, kratkoročni najam, male hotele i poslovne
            prostore u Hrvatskoj.
          </p>
          <ul className="mt-5 space-y-2.5 text-[15px] leading-snug text-slate-700 sm:mt-6 sm:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
              <span>Manje dogovaranja i čekanja na check-in</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
              <span>Nema izgubljenih ključeva i dupliranja</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
              <span>Pristup za goste, čistače i osoblje — bez stresa</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={homeKontaktHref(0)} className="w-full min-w-0 sm:w-auto" scroll>
              <Button size="lg" className="h-12 w-full touch-manipulation sm:h-11 sm:w-auto">
                {KONTAKT_CTA_LABELS[0]}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#problem" className="w-full min-w-0 sm:w-auto">
              <Button variant="secondary" size="lg" className="h-12 w-full touch-manipulation sm:h-11 sm:w-auto">
                Pogledaj kako pomaže
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="problem">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Problem"
            title="Poznato vam je ovo?"
            description="Ako iznajmljujete ili upravljate objektom, pristup često postane najveći izvor sitnog stresa."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Check-in se rastegne jer gost kasni ili se izgubi.",
              "Netko mora 'skočiti' predati ključ — i to često u nezgodno vrijeme.",
              "Ključevi se izgube, ne vrate ili završe kod krive osobe.",
              "Koordinacija s čistačima je stalno dopisivanje i pozivi.",
              "Ne znate tko je zadnji ušao i kad.",
              "Svaka izmjena gosta znači novi krug dogovaranja."
            ].map((item) => (
              <div key={item} className={cn(MARKETING_CARD, "flex items-start gap-3 p-5 md:p-6")}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-600" />
                <p className="text-sm text-slate-700">{item}</p>
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
            title="Pametna brava je jednostavno rješenje za pristup bez ključeva"
            description="Umjesto fizičkog ključa, pristup se daje digitalno: kodom, karticom ili putem aplikacije (ovisno o objektu i potrebi)."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className={cn(MARKETING_SURFACE, "p-6 md:p-8")}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Prije</p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-slate-900">Ključevi i čekanje</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  "Dogovaranje termina i čekanje na check-in",
                  "Izgubljeni ključevi i dupliranja",
                  "Stalni pozivi s čistačima i osobljem"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn(MARKETING_SURFACE_EMPHASIS, "p-6 md:p-8")}>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Poslije</p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-slate-900">Kontrola i mir</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  "Gost dobije upute i ulazi sam, kad mu odgovara",
                  "Pristup za čistače i osoblje po vremenu i ulozi",
                  "Vi imate pregled i mogućnost ukidanja pristupa kad god treba"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                    <span>{item}</span>
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
            description="Primjeri iz prakse — ostatak (apartmani, hoteli, poslovni prostori) prilagođavamo načinu kako objekt stvarno radi."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 shadow-inner">
                <DoorOpen className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900">Dolazak gosta (npr. Airbnb)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Gost dobije jasan ulazak bez čekanja na ključ. Vi ne koordinirate svaki dolazak.
              </p>
            </article>
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 shadow-inner">
                <Users className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900">Čistači i osoblje</h3>
              <p className="mt-2 text-sm text-slate-600">
                Pristup u dogovorenom terminu — bez poruka „tko ima ključ”.
              </p>
            </article>
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 shadow-inner">
                <Smartphone className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900">Vlasnik na daljinu</h3>
              <p className="mt-2 text-sm text-slate-600">
                Dodavanje i ukidanje pristupa kad se najam mijenja — bez fizičkog ključa.
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
            title="Usluge koje donose rezultat"
            description="Ugradnja, postavljanje pristupa i podrška — bez komplikacija i bez gubljenja vremena."
          />
          <div className="mt-10 space-y-4 md:space-y-5">
            {SERVICE_ITEMS.map((service, serviceIndex) => (
              <div
                key={service.slug ?? service.title}
                id={service.slug}
                className={cn(MARKETING_SURFACE, "scroll-mt-24 p-6 md:p-8")}
              >
                <div className="grid min-w-0 gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-start">
                  <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/80 p-3 shadow-inner backdrop-blur-sm sm:p-4">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      width={480}
                      height={360}
                      unoptimized
                      className="mx-auto h-44 w-full max-w-md object-contain sm:h-52 md:h-64"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">{service.title}</h3>
                    <p className="mt-3 text-sm text-slate-600">{service.details}</p>
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                        Najčešće uključuje
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link
                        href={homeKontaktHref(serviceIndex)}
                        className="inline-block w-full min-w-0 sm:w-auto"
                        scroll
                      >
                        <Button className="h-12 w-full touch-manipulation sm:h-10 sm:w-auto">
                          {KONTAKT_CTA_LABELS[serviceIndex % KONTAKT_CTA_LABELS.length]}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={cn(MARKETING_SURFACE, "mt-8 p-6 md:p-8")}>
            <p className="text-sm leading-relaxed text-slate-700">
              Opremu biramo prema vratima, prometu i ulogama — pametne brave, čitače ili sustave kontrole pristupa. Ne
              „iz kataloga”, nego što ima smisla za vaš objekt. Okvir trajanja rada i mogućnost ulaza kad mreže nema ovise o
              modelu i vratima — detalji su u FAQ ispod.
            </p>
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="kako-radimo">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Kako radimo"
            title="4 koraka do mirnijeg najma"
            description="Procjena, dogovor rješenja, ugradnja i postavljanje — sve jasno, bez improvizacije."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div key={step.title} className={cn(MARKETING_CARD, "p-5 md:p-6")}>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Korak {index + 1}</p>
                <h3 className="mt-2 font-heading text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="povjerenje">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Povjerenje"
            title="Provjereno u praksi"
            description="Realno, bez velikih obećanja — cilj je da pristup radi mirno i pouzdano."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className={cn(MARKETING_CARD, "p-5 md:p-6")}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{SOCIAL_PROOF_MAIN_STAT.label}</p>
              <p className="mt-2 font-heading text-2xl font-semibold text-slate-900">{SOCIAL_PROOF_MAIN_STAT.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Apartmani, kuće za odmor i manji objekti diljem Hrvatske</p>
            </div>
            <div className={cn(MARKETING_CARD, "p-5 md:p-6")}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Najčešći rezultat</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-800">{SOCIAL_PROOF_OUTCOME}</p>
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
            title="Smirena ugradnja, jasna pravila pristupa"
            description="Adria SmartPass pomaže vlasnicima apartmana, kuća i manjih objekata za smještaj uvesti pouzdan pristup bez ključeva i stalnog dogovaranja."
          />
          <div className="relative mx-auto mt-10 max-w-3xl space-y-4 border-l-[3px] border-brand-400/70 pl-4 text-[15px] leading-relaxed text-slate-700 sm:pl-6 md:mt-12 md:pl-8 md:text-lg">
            <p>
              Radimo prema svakodnevnoj upotrebi: gosti u različito vrijeme, čistači po rasporedu, vi bez stalnog
              angažmana. Svaki objekt ima svoju logiku — sustav prilagođavamo najmu koji stvarno funkcionira.
            </p>
            <p>
              Ne nudimo univerzalna rješenja. Biramo provjerenu opremu, testiramo prije predaje i ostajemo dostupni za
              promjene korisnika i situacije na terenu.
            </p>
            <p className="font-medium text-slate-900">
              Cilj je sustav koji dugoročno štedi vrijeme i smanjuje potrebu za stalnim angažmanom.
            </p>
          </div>
          <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 shadow-inner">
                <Sparkles className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Praktično
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Jednostavan pristup za goste i vas — bez koordinacije svakog dolaska.
              </p>
            </article>
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 shadow-inner">
                <ShieldCheck className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Pouzdano
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Konfiguracija i test prije predaje; stabilan rad i kad je prometa više.
              </p>
            </article>
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 sm:col-span-2 md:p-7 lg:col-span-1")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 shadow-inner">
                <Headphones className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Uz podršku
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Promjene korisnika i prilagodbe — brzo i bez kompliciranja.
              </p>
            </article>
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="blog" className="overflow-visible">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Blog"
            title="Četiri članka za početak"
            description="Kratki uvidi prije odluke — cjelokupni sadržaj na stranici bloga."
          />
          <div className="relative z-10 mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
              className="relative inline-flex min-h-11 items-center rounded-lg px-2 py-2 text-sm font-semibold text-brand-600 underline-offset-4 transition hover:text-brand-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
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
          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className={cn(MARKETING_CARD, "group open:border-brand-200 open:shadow-md")}
              >
                <summary className="cursor-pointer list-none px-4 py-3.5 text-sm font-semibold text-slate-900 touch-manipulation sm:px-5 sm:py-4 md:px-6">
                  <span className="flex items-start justify-between gap-3">
                    <span className="min-w-0 flex-1 pr-1 leading-snug">{item.question}</span>
                    <span className="mt-0.5 shrink-0 text-lg leading-none text-slate-400 transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-slate-100 px-4 pb-4 pt-0 text-sm leading-relaxed text-slate-600 sm:px-5 md:px-6">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl scroll-mt-24 px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="kontakt">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Kontakt"
            title={kontaktHeadingTitle}
            description="Opišite objekt i što želite postići. Javit ćemo se unutar 24h s konkretnim prijedlogom sljedećih koraka za vaš objekt."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className={cn(MARKETING_SURFACE, "p-5 md:p-8")}>
              <p className="text-sm font-semibold text-slate-900">Kontakt</p>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <p className="min-w-0 break-words">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-brand-700 underline-offset-2 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
                {CONTACT_PHONE_NUMBERS.map(({ href, label, contact }) => (
                  <p key={href}>
                    <a href={href} className="font-medium text-brand-700 underline-offset-2 hover:underline">
                      {label}
                      <span className="font-normal text-slate-600"> — {contact}</span>
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
        </SectionPanel>
      </AnimatedSection>
    </SiteShell>
  );
}
