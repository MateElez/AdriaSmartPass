/**
 * Tekstovi na gumbima koji vode na #kontakt — isti indeks kao ?cta= u URL-u.
 */
export const KONTAKT_CTA_LABELS = [
  "Zatražite security konzultacije",
  "Pošaljite specifikaciju — pripremit ćemo tehnički prijedlog",
  "Dogovorite procjenu lokacije za video nadzor",
  "Zatražite security konzultacije",
  "Pošaljite specifikaciju — pripremit ćemo tehnički prijedlog"
] as const;

/** Naslov sekcije Kontakt kada nema valjanog ?cta= (početna). */
export const KONTAKT_HOME_TITLE_FALLBACK = "Zatražite security konzultacije";

function firstQueryValue(v: string | string[] | undefined): string | undefined {
  if (v === undefined) return undefined;
  return Array.isArray(v) ? v[0] : v;
}

/** Naslov iz query parametra cta (0 … br. CTA-1), inače fallback. */
export function resolveKontaktHeadingTitle(
  searchParams: { cta?: string | string[] } | undefined,
  fallbackTitle: string
): string {
  const raw = firstQueryValue(searchParams?.cta);
  if (raw === undefined || raw === "") return fallbackTitle;
  const n = Number.parseInt(raw, 10);
  if (!Number.isInteger(n) || n < 0 || n >= KONTAKT_CTA_LABELS.length) return fallbackTitle;
  return KONTAKT_CTA_LABELS[n];
}

/** Poveznica na kontakt blok na početnoj: /?cta=indeks#kontakt */
export function homeKontaktHref(ctaIndex: number): string {
  const i = ((ctaIndex % KONTAKT_CTA_LABELS.length) + KONTAKT_CTA_LABELS.length) % KONTAKT_CTA_LABELS.length;
  return `/?cta=${i}#kontakt`;
}
