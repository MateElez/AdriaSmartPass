import Link from "next/link";
import { SECTION_EYEBROW_CLASS } from "@/components/marketing/section-heading";
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBERS } from "@/lib/contact-info";
import { FOOTER_SOCIAL_LINKS, FOOTER_TAGLINE } from "@/lib/footer-content";

function SocialLinks() {
  const items: Array<{ href: string; label: string }> = [];
  if (FOOTER_SOCIAL_LINKS.instagram) {
    items.push({ href: FOOTER_SOCIAL_LINKS.instagram, label: "Instagram" });
  }
  if (FOOTER_SOCIAL_LINKS.linkedin) {
    items.push({ href: FOOTER_SOCIAL_LINKS.linkedin, label: "LinkedIn" });
  }

  if (items.length === 0) return null;

  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-end">
      <span className="text-xs font-medium uppercase tracking-wider text-slate-500">Pratite nas</span>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 md:justify-end">
        {items.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 underline-offset-4 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 focus-visible:ring-offset-2"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="font-heading text-lg font-semibold text-slate-950">Adria Security Systems</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">{FOOTER_TAGLINE}</p>
          </div>

          <div className="md:justify-self-end md:text-right">
            <p className={SECTION_EYEBROW_CLASS}>Kontakt</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600 md:items-end">
              <p className="min-w-0 break-words">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-black underline-offset-4 transition visited:text-black hover:text-black hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              {CONTACT_PHONE_NUMBERS.map(({ href, label, contact }) => (
                <p key={href}>
                  <a
                    href={href}
                    className="font-medium text-black underline-offset-4 transition visited:text-black hover:text-black hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-offset-2"
                  >
                    {label}
                    <span className="font-normal text-black"> — {contact}</span>
                  </a>
                </p>
              ))}
              <p>Split, Hrvatska</p>
            </div>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Adria Security Systems</p>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <Link
              href="/privatnost"
              className="transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 focus-visible:ring-offset-2"
            >
              Privatnost
            </Link>
            <span className="text-slate-300" aria-hidden>
              ·
            </span>
            <Link
              href="/uvjeti-koristenja"
              className="transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 focus-visible:ring-offset-2"
            >
              Uvjeti korištenja
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
