import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/site";
import { locales, type Locale, type SegmentKey } from "@/i18n/config";
import { localizedPath, sitemapHreflangLanguages } from "@/lib/paths";
import { activities } from "@/data/activities";
import { blogPosts } from "@/data/blog";

const STATIC_SEGMENTS: SegmentKey[] = [
  "activities",
  "prices",
  "gallery",
  "about",
  "contact",
  "booking",
  "blog",
];

function pushLocalizedEntry(
  entries: MetadataRoute.Sitemap,
  baseUrl: string,
  opts: {
    segment?: SegmentKey;
    slugByLocale?: Partial<Record<Locale, string>>;
    lastModified: Date;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }
) {
  const { segment, slugByLocale, lastModified, changeFrequency, priority } =
    opts;
  const languages = sitemapHreflangLanguages(baseUrl, segment, slugByLocale);

  for (const locale of locales) {
    const slug = slugByLocale?.[locale];
    entries.push({
      url: `${baseUrl}${localizedPath(locale, segment, slug)}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    });
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Home — /fr, /en with hreflang
  pushLocalizedEntry(entries, baseUrl, {
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  });

  // Static sections
  for (const segment of STATIC_SEGMENTS) {
    pushLocalizedEntry(entries, baseUrl, {
      segment,
      lastModified: now,
      changeFrequency:
        segment === "activities" || segment === "blog" ? "weekly" : "monthly",
      priority:
        segment === "activities"
          ? 0.9
          : segment === "booking"
            ? 0.85
            : segment === "blog"
              ? 0.7
              : 0.7,
    });
  }

  // Activity detail pages
  for (const activity of activities) {
    pushLocalizedEntry(entries, baseUrl, {
      segment: "activities",
      slugByLocale: activity.slug,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    });
  }

  // Blog posts
  for (const post of blogPosts) {
    pushLocalizedEntry(entries, baseUrl, {
      segment: "blog",
      slugByLocale: post.slug,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  return entries;
}
