import { AnimatedSection } from "@/components/marketing/animated-section";
import { MARKETING_SURFACE } from "@/components/marketing/section-panel";
import { SECTION_EYEBROW_CLASS, SectionHeading } from "@/components/marketing/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { SiteShell } from "@/components/layout/site-shell";
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBERS } from "@/lib/contact-info";
import { KONTAKT_HOME_TITLE_FALLBACK, resolveKontaktHeadingTitle } from "@/lib/kontakt-cta";
import { cn } from "@/lib/utils";

export default function ContactPage({
  searchParams
}: {
  searchParams?: { cta?: string | string[] };
}) {
  const headingTitle = resolveKontaktHeadingTitle(searchParams, KONTAKT_HOME_TITLE_FALLBACK);

  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 pt-16 md:px-6 md:pt-24">
        <SectionHeading
          eyebrow="Kontakt"
          title={headingTitle}
          description="Opišite svoj objekt i način korištenja. Predlažemo smislen video nadzor i monitoring — bez nepotrebne opreme. Odgovaramo unutar 24 sata."
        />
      </section>

      <AnimatedSection className="mx-auto w-full max-w-4xl px-4 pb-20 md:px-6">
        <div className={cn(MARKETING_SURFACE, "mb-8 p-5 text-sm text-slate-600 md:p-8")}>
          <p className={SECTION_EYEBROW_CLASS}>Kontakt</p>
          <p className="mt-4 min-w-0 break-words">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-black underline-offset-2 visited:text-black hover:text-black hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <ul className="mt-3 space-y-1.5">
            {CONTACT_PHONE_NUMBERS.map(({ href, label, contact }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-medium text-black underline-offset-2 visited:text-black hover:text-black hover:underline"
                >
                  {label}
                  <span className="font-normal text-black"> — {contact}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-slate-600">Split, Hrvatska</p>
        </div>
        <ContactForm />
      </AnimatedSection>
    </SiteShell>
  );
}
