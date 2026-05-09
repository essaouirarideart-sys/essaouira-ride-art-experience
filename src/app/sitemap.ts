import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { locales, type SegmentKey } from "@/i18n/config";
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
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Locale homepages
  for (const locale of locales) {
    entries.push({
      url: `${site.url}${localizedPath(locale)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${site.url}${localizedPath(l)}`])
        ),
      },
    });
  }

  // Static segments
  for (const seg of STATIC_SEGMENTS) {
    for (const locale of locales) {
      entries.push({
        url: `${site.url}${localizedPath(locale, seg)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: seg === "activities" ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${site.url}${localizedPath(l, seg)}`])
          ),
        },
      });
    }
  }

  // Activity detail pages
  for (const activity of activities) {
    for (const locale of locales) {
      entries.push({
        url: `${site.url}${localizedPath(
          locale,
          "activities",
          activity.slug[locale]
        )}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.95,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${site.url}${localizedPath(l, "activities", activity.slug[l])}`,
            ])
          ),
        },
      });
    }
  }

  // Blog posts
  for (const post of blogPosts) {
    for (const locale of locales) {
      entries.push({
        url: `${site.url}${localizedPath(locale, "blog", post.slug[locale])}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [
              l,
              `${site.url}${localizedPath(l, "blog", post.slug[l])}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
