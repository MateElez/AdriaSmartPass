import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Users,
  Video
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
          <p className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-slate-300/70 bg-slate-50/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-700 sm:px-4 sm:text-xs">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
            Premium video nadzor · smart security
          </p>
          <h1 className="mt-5 text-balance font-heading text-[1.7rem] font-bold leading-[1.18] text-slate-900 sm:mt-6 sm:text-4xl md:text-6xl md:leading-tight">
            Profesionalni video nadzor i monitoring za sigurnost vaših nekretnina.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:mt-6 sm:text-base md:text-lg">
            Projektiramo i ugrađujemo smart security sustave za ville, apartmane, hotele i poslovne objekte — uz diskretnu
            montažu, pouzdanu pohranu i jasan pregled događaja kad zatrebate mir ili dokaz.
          </p>
          <ul className="mt-5 space-y-2.5 text-[15px] leading-snug text-slate-700 sm:mt-6 sm:text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-slate-900" />
              <span>
                <span className="font-medium text-slate-800">Video nadzor</span> — IP kamere i snimanje prilagođeno vašem
                objektu
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-slate-900" />
              <span>
                <span className="font-medium text-slate-800">Monitoring</span> — centralizirani nadzor za jednu ili više
                lokacija
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-slate-900" />
              <span>
                <span className="font-medium text-slate-800">Sigurnost nekretnina</span> — ville, apartmani, hoteli i
                poslovni portfelji
              </span>
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
                Zašto profesionalni nadzor
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
            description="U rentalu i hospitalityu sigurnost se često vidi tek kad nešto pukne: bez kontinuiranog nadzora i real-time uvida u objekt, rizik i trošak preuzimate reaktivno — umjesto da ih upravljate unaprijed."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Nedostatak nadzora nad objektom: zajednički prostori, parking i servisne zone bez pokrivenosti — ne znate što se događa između obilazaka.",
              "Sigurnosni rizici u rental i hospitality objektima: prometni najam, noćni rad osoblja i vrijedna infrastruktura traže drugačiji standard od „kamere za štetu”.",
              "Nemate real-time pregled — kad alarm ili poziv stigne, i dalje nakon pet minuta ne znate što se događa na licu mjesta.",
              "Potreba za remote monitoringom: živite ili radite izvan lokacije, a nemate jedan pouzdan kanal za live pogled i obavijesti.",
              "Više lokacija ili timova — svatko ima svoj fragment informacije; nema jedinstvenog monitoring sustava za istinu o incidentu.",
              "Incident utječe na reputaciju i osiguranje: bez dokumentiranog zapisa teško dokazujete što se dogodilo i zaštitite portfelj."
            ].map((item) => (
              <div key={item} className={cn(MARKETING_CARD, "flex items-start gap-3 p-5 md:p-6")}>
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-slate-900" />
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
            title="Video nadzor, remote monitoring i smart security sustavi za vaš objekt"
            description="Umjesto da reagirate nakon problema, imate real-time pregled i kontrolu nad objektom — profesionalni video nadzor, udaljeni monitoring i integrirani smart security sloj prilagođeni rentalu i hospitalityu."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className={cn(MARKETING_SURFACE, "p-6 md:p-8")}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Prije</p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-slate-900">Bez nadzora i uvida</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  "Nema nadzora — objekt je „izvan pogleda” između obilazaka ili smjena.",
                  "Nesigurnost za tim i portfelj: događaje saznajete iz priča, ne iz činjenica.",
                  "Reaktivno upravljanje — tek nakon incidenta tragate što se dogodilo i koliko je koštalo."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn(MARKETING_SURFACE_EMPHASIS, "p-6 md:p-8")}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">Poslije</p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-slate-900">Real-time monitoring i kontrola</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {[
                  "Real-time monitoring — live pogled i obavijesti kad zona koju pratite zahtijeva pažnju.",
                  "Sigurnosni pregled objekta — kontinuirani video nadzor kritičnih zona uz pohranu za kasniju analizu.",
                  "Kontrola i uvid u svako vrijeme — remote monitoring za vlasnike i timove, bez obzira gdje ste."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-slate-900" />
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
            description="Primjeri iz prakse — ostatak (boutique hoteli, corporate retreats, poslovni kampusi) prilagođavamo vašem SLA-u i brand standardima."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-200/70 text-slate-900 shadow-inner">
                <Video className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900">Dolazak gosta</h3>
              <p className="mt-2 text-sm text-slate-600">
                Sigurnosni nadzor ulaza i perimetra: monitoring kritičnih zona u realnom vremenu i jasan zapis ako dođe do incidenta.
              </p>
            </article>
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-200/70 text-slate-900 shadow-inner">
                <Users className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900">Osoblje i čišćenje</h3>
              <p className="mt-2 text-sm text-slate-600">
                Sigurnosni nadzor aktivnosti u objektu i servisnim zonama — operativa ima kontekst događaja bez nagađanja i naknadnih rasprava.
              </p>
            </article>
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-200/70 text-slate-900 shadow-inner">
                <LayoutDashboard className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-lg font-semibold text-slate-900">Vlasnik na daljinu</h3>
              <p className="mt-2 text-sm text-slate-600">
                Remote video monitoring i sigurnosni uvid u svako vrijeme — pregled kritičnih lokacija, obavijesti i brza provjera kad ste izvan grada ili države.
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
            description="Projektiranje, ugradnja video nadzora i kontinuirana podrška monitoring sustava — uz jasan ROI za operativu najma."
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
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                        Najčešće uključuje
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-slate-700">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-slate-900" />
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
              Kombinaciju kamera, NVR-a, mreže i oblaka biramo prema arhitekturi objekta, profilu gostiju i vašim zahtjevima
              za čuvanje zapisa. Ne prodajemo generičke pakete — nego smart security sloj koji podržava vaš poslovni model.
              Detalji o redundantnosti i pohrani u FAQ ispod.
            </p>
          </div>
        </SectionPanel>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-3 pb-16 sm:px-4 sm:pb-20 md:px-6 md:pb-24">
        <SectionPanel id="kako-radimo">
          <SectionHeading
            className={SECTION_HEADING_MARKETING}
            eyebrow="Kako radimo"
            title="4 koraka do pouzdanog monitoringa"
            description="Procjena rizika, projekt, ugradnja i predaja uz obuku — dokumentirano, kao što B2B partner očekuje."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div key={step.title} className={cn(MARKETING_CARD, "p-5 md:p-6")}>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">Korak {index + 1}</p>
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
            description="Imamo improved security visibility, manje incidenata i bolju kontrolu nekretnina: full property visibility uz remote security control i 24/7 monitoring capability, spremno od prvog signala do dokumentiranog dokaza."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className={cn(MARKETING_CARD, "p-5 md:p-6")}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{SOCIAL_PROOF_MAIN_STAT.label}</p>
              <p className="mt-2 font-heading text-2xl font-semibold text-slate-900">{SOCIAL_PROOF_MAIN_STAT.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">Vile, apartmani, hoteli i business properties diljem Hrvatske — s full property visibility.</p>
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
            title="Premium smart property security company"
            description="Adria Security Systems je premium smart property security company specijalizirana za video surveillance i monitoring sustave za villas, apartments, hotels i small business properties."
          />
          <div className="relative mx-auto mt-10 max-w-3xl space-y-4 border-l-[3px] border-slate-900/50 pl-4 text-[15px] leading-relaxed text-slate-700 sm:pl-6 md:mt-12 md:pl-8 md:text-lg">
            <p>
              Radimo s portfeljem nekretnina i prilagođavamo security arhitekturu vašem realnom prometu: sezona, smjene, eventi i servisne rute. Rezultat je sustav koji donosi full property visibility kroz IP kamere, pohranu i remote monitoring — tako da tim uvijek zna što se događa.
            </p>
            <p>
              Ugradnja je samo početak. Postavljamo skalabilne sigurnosne sustave s jasnim deploymentom i roadmapom: video nadzor je jezgra, a kasnija proširenja uključuju integracije za access control i smart automation kad vaš model to zatraži.
            </p>
            <p className="font-medium text-slate-900">
              Naš cilj je integrated property security solution koja smanjuje operativni stres, podiže standard u hospitalityu i daje dokumentirani, objektivan trag događaja kad god je potrebna sigurnosna odluka.
            </p>
          </div>
          <div className="relative mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-200/70 text-slate-900 shadow-inner">
                <Sparkles className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                Praktično
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Jasan pregled događaja i obavijesti kad zona zahtijeva pažnju — manje „što je bilo?” razgovora, više provjerene slike.
              </p>
            </article>
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 md:p-7")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-200/70 text-slate-900 shadow-inner">
                <ShieldCheck className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                Pouzdano
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Optika, bitrate i napajanje podešeni za noćni rad, jaku sezonu i kritične uvjete — uz stabilan monitoring koji podnosi realan ritam operacije.
              </p>
            </article>
            <article className={cn(MARKETING_CARD, "flex flex-col p-6 sm:col-span-2 md:p-7 lg:col-span-1")}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-200/70 text-slate-900 shadow-inner">
                <Headphones className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                Uz podršku
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Nova lokacija ili proširenje tima — skaliramo sustav i pripremamo buduće integracije (access control i smart automation) bez „big bang” reworka.
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
          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className={cn(MARKETING_CARD, "group open:border-slate-400/70 open:shadow-md")}
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
            description="Opišite portfelj ili pojedinačnu nekretninu i ciljeve za video nadzor. Javit ćemo se unutar 24h s konkretnim sljedećim koracima."
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
