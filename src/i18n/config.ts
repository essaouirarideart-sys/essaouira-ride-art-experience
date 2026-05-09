export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/**
 * Localized URL segments.
 * Public-facing FR segments use SEO-rich French slugs.
 * Internal Next.js folder names use the EN segment as the canonical key.
 */
export const segments = {
  activities: { fr: "activites", en: "activities" },
  prices: { fr: "tarifs", en: "prices" },
  gallery: { fr: "galerie", en: "gallery" },
  about: { fr: "a-propos", en: "about" },
  contact: { fr: "contact", en: "contact" },
  booking: { fr: "reservation", en: "booking" },
  blog: { fr: "blog", en: "blog" },
} as const;

export type SegmentKey = keyof typeof segments;
