import { AnimatedSection } from "@/components/marketing/animated-section";
import { MARKETING_SURFACE } from "@/components/marketing/section-panel";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { SiteShell } from "@/components/layout/site-shell";
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBERS } from "@/lib/contact-info";
import { resolveKontaktHeadingTitle } from "@/lib/kontakt-cta";
import { cn } from "@/lib/utils";

const CONTACT_PAGE_TITLE_FALLBACK = "Zatražite ponudu za video nadzor";

export default function ContactPage({
  searchParams
}: {
  searchParams?: { cta?: string | string[] };
}) {
  const headingTitle = resolveKontaktHeadingTitle(searchParams, CONTACT_PAGE_TITLE_FALLBACK);

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-16 md:px-6 md:pt-24">
        <SectionHeading
          eyebrow="Kontakt"
          title={headingTitle}
          description="Opišite nekretninu ili portfelj lokacija — poslat ćemo ponudu i tehnički koridor za smart security implementaciju."
        />
      </section>

      <AnimatedSection className="mx-auto w-full max-w-4xl px-4 pb-20 md:px-6">
        <div className={cn(MARKETING_SURFACE, "mb-8 p-5 text-sm text-slate-600 md:p-8")}>
          <p className="font-semibold text-slate-900">Dostupni i na broju</p>
          <p className="mt-1 min-w-0 break-words">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-slate-900 underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <ul className="mt-3 space-y-1.5">
            {CONTACT_PHONE_NUMBERS.map(({ href, label, contact }) => (
              <li key={href}>
                <a href={href} className="font-medium text-slate-900 underline-offset-2 hover:underline">
                  {label}
                  <span className="font-normal text-slate-600"> — {contact}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </AnimatedSection>
    </SiteShell>
  );
}
