import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { fr } from "@/i18n/dictionaries/fr";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="heading-display mt-6 text-balance">
        {fr.common.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-md text-ink-muted">{fr.common.notFoundText}</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest2 text-bg-primary"
      >
        {fr.common.backToHome}
      </Link>
    </main>
  );
}
