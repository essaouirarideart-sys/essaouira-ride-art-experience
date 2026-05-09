import { segments, type Locale, type SegmentKey } from "@/i18n/config";

/**
 * Public-facing localized URL builder.
 * e.g. localizedPath('fr', 'activities') => '/fr/activites'
 *      localizedPath('en', 'activities') => '/en/activities'
 *      localizedPath('fr', 'activities', 'balade-a-cheval-essaouira')
 *        => '/fr/activites/balade-a-cheval-essaouira'
 */
export function localizedPath(
  locale: Locale,
  segment?: SegmentKey,
  slug?: string
): string {
  if (!segment) return `/${locale}`;
  const seg = segments[segment][locale];
  if (!slug) return `/${locale}/${seg}`;
  return `/${locale}/${seg}/${slug}`;
}

/**
 * Returns the alternate-locale URL for a given page path.
 * Used for hreflang and language switcher.
 */
export function alternatePath(
  targetLocale: Locale,
  segment?: SegmentKey,
  slug?: string
): string {
  return localizedPath(targetLocale, segment, slug);
}

/**
 * Map a public FR segment back to its canonical SegmentKey.
 * Used by middleware to rewrite localized FR URLs to internal EN folder names.
 */
export function frSegmentToKey(segment: string): SegmentKey | null {
  const entries = Object.entries(segments) as [
    SegmentKey,
    { fr: string; en: string }
  ][];
  for (const [key, val] of entries) {
    if (val.fr === segment) return key;
  }
  return null;
}
