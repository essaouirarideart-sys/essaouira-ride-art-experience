import type { Metadata } from "next";
import { site } from "@/data/site";
import { locales, type Locale, type SegmentKey } from "@/i18n/config";
import { localizedPath } from "./paths";

interface BuildMetadataOptions {
  locale: Locale;
  segment?: SegmentKey;
  slug?: string;
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
}

/**
 * Build SEO metadata with hreflang alternates and canonical URL.
 * Used by every page to ensure consistent SEO signals.
 */
export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const { locale, segment, slug, title, description, image, keywords, type } =
    opts;

  const path = localizedPath(locale, segment, slug);
  const canonical = `${site.url}${path}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${site.url}${localizedPath(l, segment, slug)}`;
  }
  languages["x-default"] = `${site.url}${localizedPath("fr", segment, slug)}`;

  const ogImage = image ?? `${site.url}${site.defaultOgImage}`;

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
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: type ?? "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

/**
 * JSON-LD: Organization / LocalBusiness for the brand.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    image: `${site.url}${site.defaultOgImage}`,
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.street,
      addressLocality: site.contact.address.city,
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.contact.address.lat,
      longitude: site.contact.address.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2500",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [site.social.instagram.url, site.social.facebook.url],
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: opts.name,
    description: opts.description,
    image: opts.image,
    url: `${site.url}${localizedPath(opts.locale, "activities", opts.slug)}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.address.city,
      addressCountry: "MA",
    },
    offers: {
      "@type": "Offer",
      price: opts.priceFrom,
      priceCurrency: opts.currency,
      availability: "https://schema.org/InStock",
    },
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
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    datePublished: opts.publishedAt,
    author: { "@type": "Organization", name: opts.author },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.svg` },
    },
    mainEntityOfPage: opts.url,
  };
}
