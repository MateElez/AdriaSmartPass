/** Kratki opis u podnožju */
export const FOOTER_TAGLINE =
  "Sustavi video nadzora za vlasnike nekretnina, vile, najam i hotele.";

/**
 * Ostavi prazno ili postavi u .env: NEXT_PUBLIC_FOOTER_INSTAGRAM_URL, NEXT_PUBLIC_FOOTER_LINKEDIN_URL
 * Prazno = ikona se ne prikazuje.
 */
export const FOOTER_SOCIAL_LINKS = {
  instagram: (process.env.NEXT_PUBLIC_FOOTER_INSTAGRAM_URL ?? "").trim(),
  linkedin: (process.env.NEXT_PUBLIC_FOOTER_LINKEDIN_URL ?? "").trim()
};
