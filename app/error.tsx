"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Intentionally minimal; keep logs helpful in dev without leaking details in UI.
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center gap-4 px-4 py-16 md:px-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Došlo je do pogreške</p>
      <h1 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">Nešto je pošlo po zlu.</h1>
      <p className="max-w-xl text-sm text-slate-600 md:text-base">
        Pokušajte ponovno učitati stranicu. Ako se problem ponavlja, javite nam se i opišite što ste radili.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button onClick={reset}>Pokušaj ponovno</Button>
        <Link href="/" className="text-sm font-semibold text-slate-900 transition hover:underline">
          Povratak na početnu
        </Link>
      </div>
    </div>
  );
}

