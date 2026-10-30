import type { Metadata } from "next";
import { AppDocument } from "@/components/layout/AppDocument";
import { LocaleNotFoundContent } from "@/components/layout/LocaleNotFoundContent";
import { defaultLocale } from "@/i18n/config";
import { fontClassName } from "@/lib/fonts";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "404 — Page introuvable",
  description: "La page demandée n'existe pas. Retournez aux activités Essaouira.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${site.url}/${defaultLocale}`,
  },
};

/**
 * Document-level 404. Pass-through root layout has no `<html>`, so this file
 * must provide it. `notFound()` from locale pages cannot compose this tree
 * without hitting Next's `__next_error__` fallback; unknown slugs therefore
 * 404 at the routing layer (`dynamicParams = false`).
 */
export default function NotFound() {
  return (
    <AppDocument locale={defaultLocale} fontClassName={fontClassName}>
      <LocaleNotFoundContent />
    </AppDocument>
  );
}
