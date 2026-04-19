import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/marketing/animated-section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ServiceCard } from "@/components/marketing/service-card";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { HOW_IT_WORKS_STEPS, SERVICE_ITEMS } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-14 md:px-6 md:pt-20">
        <SectionHeading
          eyebrow="Usluge"
          title="Sigurnosne instalacije prilagođene operativnim timovima"
          description="Od novih ugradnji do retrofit nadogradnji, svaku uslugu izvode certificirani tehničari."
        />
      </section>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {SERVICE_ITEMS.map((service) => (
            <ServiceCard
              key={service.slug ?? service.title}
              title={service.title}
              description={service.description}
              href={`/services#${service.slug}`}
            />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 pb-14 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">Detalji usluga</p>
          <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
            Što dobivate za svaku vrstu usluge
          </h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Klikom na “Saznaj više” dobit ćete pregled koraka i što je uključeno u izvedbu.
          </p>
        </div>

        <div className="mt-8 space-y-4 md:space-y-5">
          {SERVICE_ITEMS.map((service) => (
            <div
              key={service.slug ?? service.title}
              id={service.slug}
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8"
            >
              <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-start">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={900}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 480px"
                    unoptimized
                    className="mx-auto h-52 w-full max-w-md rounded-xl object-cover object-center sm:h-60 md:h-64"
                  />
                </div>

                <div>
                  <h3 className="font-heading text-2xl font-semibold text-slate-900">{service.title}</h3>
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
                    <Link href="/contact" className="inline-block w-full sm:w-auto">
                      <Button className="w-full sm:w-auto">
                        Zatražite ponudu
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 pb-14 md:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-10">
          <h2 className="font-heading text-3xl font-bold text-slate-900">Pristup implementaciji</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                  Faza {index + 1}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-6">
        <div className="rounded-3xl border border-brand-100 bg-brand-50 p-8 md:p-10">
          <h3 className="font-heading text-2xl font-bold text-brand-900">
            Trebate prilagođeni plan implementacije za svoj objekt?
          </h3>
          <p className="mt-3 max-w-2xl text-sm text-brand-800 md:text-base">
            Pošaljite broj vrata, zahtjeve pristupa i željeni rok. Pripremit ćemo praktičan plan
            ugradnje i ponudu.
          </p>
          <Link href="/contact" className="mt-6 inline-block">
            <Button>
              Zatražite ponudu
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </SiteShell>
  );
}
