/**
 * Tekstovi za naslove vezane uz kontakt (?cta= indeks).
 */
export const KONTAKT_CTA_LABELS = [
  "Sigurnosni pregled vašeg objekta",
  "Sigurnosni pregled vašeg objekta",
  "Sigurnosni pregled vašeg objekta",
  "Sigurnosni pregled vašeg objekta",
  "Sigurnosni pregled vašeg objekta"
] as const;

/** Naslov sekcije na /contact kada nema valjanog ?cta=. */
export const KONTAKT_HOME_TITLE_FALLBACK = "Sigurnosni pregled vašeg objekta";

/** Primarni gumb (hero, header, forma). */
export const KONTAKT_PRIMARY_BUTTON_LABEL = "Zatražite konzultacije";

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

