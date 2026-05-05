"use client";

import "./globals.css";
import Link from "next/link";

/**
 * Zamjenjuje root layout kad padne kritična greška. Mora uključiti <html> i <body>
 * (za razliku od app/error.tsx). Bez ovoga dev poslužitelj ponekad javlja
 * „missing required error components”.
 */
export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="hr">
      <body className="antialiased">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-4 bg-slate-50 px-4 py-16 text-slate-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Greška</p>
          <h1 className="font-heading text-3xl font-bold md:text-4xl">Dogodila se kritična pogreška.</h1>
          <p className="max-w-xl text-sm text-slate-600">
            Pokušajte ponovno učitati. Ako se ponavlja, očistite keš (.next) i pokrenite dev ponovno.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Pokušaj ponovno
            </button>
            <Link href="/" className="text-sm font-semibold text-slate-900 hover:underline">
              Povratak na početnu
            </Link>
          </div>
          {process.env.NODE_ENV === "development" ? (
            <pre className="mt-6 max-h-40 overflow-auto rounded-lg bg-slate-100 p-3 text-xs text-slate-700">
              {error.message}
            </pre>
          ) : null}
        </div>
      </body>
    </html>
  );
}
