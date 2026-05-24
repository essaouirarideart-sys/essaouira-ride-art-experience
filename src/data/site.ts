/**
 * Site-wide config — canonical URL, contact, SEO assets.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://essaouirarideart.com).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (
    fromEnv &&
    !fromEnv.includes("localhost") &&
    !fromEnv.includes("127.0.0.1")
  ) {
    return fromEnv;
  }
  return "https://essaouirarideart.com";
}

export const site = {
  name: "Essaouira Ride & Art Experience",
  shortName: "Essaouira Ride & Art",
  url: getSiteUrl(),
  defaultOgImage: "/og-image.jpg",
  logo: "/og-image.jpg",
  contact: {
    phone: "+212768170147",
    phoneDisplay: "+212 768 170 147",
    whatsapp: "212768170147",
    email: "essaouira.ride.art@gmail.com",
    address: {
      street: "Diabat",
      city: "Essaouira",
      region: "Marrakech-Safi",
      postalCode: "44000",
      country: { fr: "Maroc", en: "Morocco" },
      countryCode: "MA",
      lat: 31.4745,
      lng: -9.7596,
    },
  },
  social: {
    instagram: {
      handle: "essaouira.ride.art",
      url: "https://instagram.com/essaouira.ride.art",
    },
    facebook: {
      handle: "Essaouira Ride & Art Experience",
      url: "https://facebook.com/essaouirarideart",
    },
  },
  hours: { fr: "7j/7 · 8h - 20h", en: "7 days/week · 8am - 8pm" },
  /** Schema.org OpeningHoursSpecification — daily 08:00–20:00 */
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
} as const;

export type SiteConfig = typeof site;

/** Absolute URL for public assets or external images. */
export function absoluteUrl(path: string, baseUrl: string = site.url): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
