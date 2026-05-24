import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getSiteUrl } from "@/data/site";
import { defaultLocale, type Locale, type SegmentKey } from "@/i18n/config";
import { localizedPath, sitemapHreflangLanguages } from "@/lib/paths";
import { activities } from "@/data/activities";
import { blogPosts } from "@/data/blog";

/** Regenerate on each request so URLs always match the live host (fixes GSC domain mismatches). */
export const dynamic = "force-dynamic";

const STATIC_SEGMENTS: SegmentKey[] = [
  "activities",
  "prices",
  "gallery",
  "about",
  "contact",
  "booking",
  "blog",
];

async function resolveBaseUrl(): Promise<string> {
  try {
    const h = await headers();
    const host = (h.get("x-forwarded-host") ?? h.get("host") ?? "")
      .split(",")[0]
      .trim();
    const proto = h.get("x-forwarded-proto")?.split(",")[0]?.trim() ?? "https";

    if (host && !host.includes("localhost") && !host.includes("127.0.0.1")) {
      return `${proto}://${host}`;
    }
  } catch {
    // Static generation fallback
  }
  return getSiteUrl();
}

function pageUrl(baseUrl: string, segment?: SegmentKey, slug?: string): string {
  return `${baseUrl}${localizedPath(defaultLocale, segment, slug)}`;
}

function sitemapAlternates(
  baseUrl: string,
  segment?: SegmentKey,
  slugByLocale?: Partial<Record<Locale, string>>
) {
  return {
    languages: sitemapHreflangLanguages(baseUrl, segment, slugByLocale),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await resolveBaseUrl();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Homepage — one entry (FR canonical) with hreflang alternates
  entries.push({
    url: pageUrl(baseUrl),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: sitemapAlternates(baseUrl),
  });

  // Static sections — one entry each (FR path as loc)
  for (const seg of STATIC_SEGMENTS) {
    entries.push({
      url: pageUrl(baseUrl, seg),
      lastModified: now,
      changeFrequency: seg === "blog" ? "weekly" : "monthly",
      priority: seg === "activities" ? 0.9 : seg === "booking" ? 0.85 : 0.7,
      alternates: sitemapAlternates(baseUrl, seg),
    });
  }

  // Activity detail — one entry per activity (not per locale)
  for (const activity of activities) {
    entries.push({
      url: pageUrl(baseUrl, "activities", activity.slug.fr),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: sitemapAlternates(baseUrl, "activities", activity.slug),
    });
  }

  // Blog posts — one entry per post
  for (const post of blogPosts) {
    entries.push({
      url: pageUrl(baseUrl, "blog", post.slug.fr),
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: post.featured ? 0.75 : 0.6,
      alternates: sitemapAlternates(baseUrl, "blog", post.slug),
    });
  }

  return entries;
}
