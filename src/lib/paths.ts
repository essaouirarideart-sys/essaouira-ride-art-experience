import { segments, locales, type Locale, type SegmentKey } from "@/i18n/config";
import { absoluteUrl } from "@/data/site";

/**
 * Public-facing localized URL builder.
 * e.g. localizedPath('fr', 'activities') => '/fr/activites'
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

export function alternatePath(
  targetLocale: Locale,
  segment?: SegmentKey,
  slug?: string
): string {
  return localizedPath(targetLocale, segment, slug);
}

/**
 * hreflang alternate URLs — use per-locale slugs for activities/blog.
 */
export function hreflangLanguages(
  segment?: SegmentKey,
  slugByLocale?: Partial<Record<Locale, string>>
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    const slug = slugByLocale?.[l];
    languages[l] = absoluteUrl(localizedPath(l, segment, slug));
  }
  languages["x-default"] = absoluteUrl(
    localizedPath("fr", segment, slugByLocale?.fr)
  );
  return languages;
}

export function frSegmentToKey(segment: string): SegmentKey | null {
  const entries = Object.entries(segments) as [
    SegmentKey,
    { fr: string; en: string },
  ][];
  for (const [key, val] of entries) {
    if (val.fr === segment) return key;
  }
  return null;
}
