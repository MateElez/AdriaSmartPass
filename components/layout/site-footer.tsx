import Link from "next/link";
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
            className="text-sm text-slate-400 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="font-heading text-lg font-semibold text-white">Adria Security Systems</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">{FOOTER_TAGLINE}</p>
          </div>
          <div className="md:justify-self-end md:text-right">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Kontakt</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400 md:items-end">
              <p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              {CONTACT_PHONE_NUMBERS.map(({ href, label, contact }) => (
                <p key={href}>
                  <a
                    href={href}
                    className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {label}
                    <span className="text-slate-500"> — {contact}</span>
                  </a>
                </p>
              ))}
              <p>Split, Hrvatska</p>
            </div>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800/80 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Adria Security Systems
          </p>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <Link
              href="/privatnost"
              className="transition hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Privatnost
            </Link>
            <span className="text-slate-600" aria-hidden>
              ·
            </span>
            <Link
              href="/uvjeti-koristenja"
              className="transition hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Uvjeti korištenja
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
