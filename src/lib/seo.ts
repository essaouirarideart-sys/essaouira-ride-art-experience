import type { Metadata } from "next";
import { site, absoluteUrl } from "@/data/site";
import { type Locale, type SegmentKey } from "@/i18n/config";
import { localizedPath, hreflangLanguages } from "./paths";

interface BuildMetadataOptions {
  locale: Locale;
  segment?: SegmentKey;
  /** Current locale slug (detail pages). Prefer `slugByLocale` for correct hreflang. */
  slug?: string;
  /** Per-locale slugs for activities & blog — fixes cross-language alternates. */
  slugByLocale?: Partial<Record<Locale, string>>;
  title: Metadata["title"];
  description: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
  /** Article Open Graph (blog posts). */
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
  };
  /** Override robots (e.g. 404). */
  robots?: Metadata["robots"];
}

function resolveOgImage(image?: string): string {
  if (!image) return absoluteUrl(site.defaultOgImage);
  return image.startsWith("http") ? image : absoluteUrl(image);
}

function resolveTitleString(title: Metadata["title"]): string {
  if (typeof title === "string") return title;
  if (title && typeof title === "object") {
    if ("absolute" in title && title.absolute) return title.absolute;
    if ("default" in title && title.default) return title.default;
  }
  return site.name;
}

/**
 * Build SEO metadata with hreflang alternates and canonical URL.
 */
export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const {
    locale,
    segment,
    slug,
    slugByLocale,
    title,
    description,
    image,
    keywords,
    type,
    article,
    robots: robotsOverride,
  } = opts;

  const effectiveSlugByLocale =
    slugByLocale ??
    (slug ? ({ [locale]: slug } as Partial<Record<Locale, string>>) : undefined);

  const path = localizedPath(
    locale,
    segment,
    effectiveSlugByLocale?.[locale] ?? slug
  );
  const canonical = absoluteUrl(path);
  const languages = hreflangLanguages(segment, effectiveSlugByLocale);
  const ogImage = resolveOgImage(image);
  const titleString = resolveTitleString(title);
  const ogImageEntry = {
    url: ogImage,
    width: 1200,
    height: 630,
    alt: site.name,
    type: "image/jpeg" as const,
  };

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    metadataBase: new URL(site.url),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: titleString,
      description,
      url: canonical,
      siteName: site.name,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_FR"],
      type: type ?? "website",
      images: [ogImageEntry],
      ...(type === "article" && article
        ? {
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime ?? article.publishedTime,
            authors: article.authors,
            section: article.section,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: titleString,
      description,
      images: [ogImage],
    },
    robots:
      robotsOverride ??
      ({
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      } as const),
    category: "travel",
  };
}

/** @graph: LocalBusiness + WebSite for sitewide JSON-LD */
export function siteJsonLdGraph() {
  const organization = organizationJsonLd();
  const website = websiteJsonLd();
  return {
    "@context": "https://schema.org",
    "@graph": [organization, website],
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description:
      "Premium outdoor activities in Essaouira, Morocco — horse riding, quad biking, camel rides and art experiences on the Atlantic coast.",
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: ["fr-FR", "en-US"],
  };
}

/**
 * LocalBusiness — matches on-page trust signals (rating, reviews).
 */
export function organizationJsonLd() {
  return {
    "@type": ["LocalBusiness", "TouristInformationCenter"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    image: absoluteUrl(site.defaultOgImage),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(site.logo),
      width: 1200,
      height: 630,
    },
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: "€€",
    currenciesAccepted: "EUR, MAD",
    paymentAccepted: "Cash, Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.street,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.region,
      postalCode: site.contact.address.postalCode,
      addressCountry: site.contact.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.contact.address.lat,
      longitude: site.contact.address.lng,
    },
    areaServed: [
      { "@type": "City", name: "Essaouira" },
      { "@type": "Place", name: "Diabat" },
      { "@type": "Country", name: "Morocco" },
    ],
    openingHoursSpecification: site.openingHoursSpecification,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2500",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [site.social.instagram.url, site.social.facebook.url],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phone,
      contactType: "customer service",
      availableLanguage: ["French", "English", "Arabic"],
      areaServed: "MA",
    },
  };
}

export function activityJsonLd(opts: {
  locale: Locale;
  name: string;
  description: string;
  image: string;
  slug: string;
  priceFrom: number;
  currency: string;
  duration?: string;
}) {
  const pageUrl = absoluteUrl(
    localizedPath(opts.locale, "activities", opts.slug)
  );
  return {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "Service"],
    "@id": `${pageUrl}#activity`,
    name: opts.name,
    description: opts.description,
    image: {
      "@type": "ImageObject",
      url: opts.image,
      contentUrl: opts.image,
    },
    url: pageUrl,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: {
      "@type": "City",
      name: "Essaouira",
    },
    touristType: ["Adventure", "Family", "Couples"],
    offers: {
      "@type": "Offer",
      price: opts.priceFrom,
      priceCurrency: opts.currency,
      availability: "https://schema.org/InStock",
      url: pageUrl,
      validFrom: new Date().toISOString().split("T")[0],
    },
    ...(opts.duration ? { duration: opts.duration } : {}),
  };
}

export function premiumPackagesJsonLd(opts: {
  activityName: string;
  pageUrl: string;
  packages: Array<{ name: string; priceEur: number }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${opts.activityName} — Premium packages`,
    numberOfItems: opts.packages.length,
    itemListElement: opts.packages.map((pkg, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        name: pkg.name,
        price: pkg.priceEur,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: opts.pageUrl,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  image: string;
  url: string;
  publishedAt: string;
  modifiedAt?: string;
  author: string;
  readingMinutes?: number;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    image: {
      "@type": "ImageObject",
      url: opts.image,
    },
    datePublished: opts.publishedAt,
    dateModified: opts.modifiedAt ?? opts.publishedAt,
    author: { "@type": "Organization", name: opts.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(site.logo),
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    url: opts.url,
    keywords: opts.keywords?.join(", "),
    ...(opts.readingMinutes
      ? { timeRequired: `PT${opts.readingMinutes}M` }
      : {}),
  };
}

/** ItemList of activities for the activities index page. */
export function activitiesListJsonLd(
  locale: Locale,
  items: Array<{ name: string; slug: string; image: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name:
      locale === "fr"
        ? "Activités à Essaouira"
        : "Things to do in Essaouira",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "TouristAttraction",
        name: item.name,
        url: absoluteUrl(localizedPath(locale, "activities", item.slug)),
        image: item.image,
      },
    })),
  };
}
