import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/data/site";
import { locales, type Locale, type SegmentKey } from "@/i18n/config";
import { localizedPath } from "@/lib/paths";
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

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Home — /fr, /en
  for (const locale of locales) {
    entries.push({
      url: `${baseUrl}${localizedPath(locale)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    });
  }

  // Static sections — activités, tarifs, galerie, etc.
  for (const segment of STATIC_SEGMENTS) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}${localizedPath(locale, segment)}`,
        lastModified: now,
        changeFrequency:
          segment === "activities" || segment === "blog" ? "weekly" : "monthly",
        priority:
          segment === "activities"
            ? 0.9
            : segment === "booking"
              ? 0.85
              : 0.7,
      });
    }
  }

  // Activity detail pages
  for (const activity of activities) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}${localizedPath(
          locale,
          "activities",
          activity.slug[locale]
        )}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.95,
      });
    }
  }

  // Blog posts
  for (const post of blogPosts) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}${localizedPath(locale, "blog", post.slug[locale])}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
