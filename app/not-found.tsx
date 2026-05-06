import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center gap-4 px-4 py-16 md:px-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">404</p>
      <h1 className="font-heading text-3xl font-bold text-slate-900 md:text-4xl">Stranica nije pronađena.</h1>
      <p className="max-w-xl text-sm text-slate-600 md:text-base">
        Link koji ste otvorili ne postoji ili je premješten. Vratite se na početnu ili nas kontaktirajte.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link href="/" className="text-sm font-semibold text-slate-900 transition hover:underline">
          Povratak na početnu
        </Link>
        <a href="/#kontakt" className="text-sm font-semibold text-slate-900 transition hover:underline">
          Kontakt
        </a>
      </div>
    </div>
  );
}

