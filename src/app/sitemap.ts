import type { MetadataRoute } from "next";
import { site, absoluteUrl } from "@/data/site";
import { locales, type Locale, type SegmentKey } from "@/i18n/config";
import { localizedPath, hreflangLanguages } from "@/lib/paths";
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

function sitemapAlternates(
  segment?: SegmentKey,
  slugByLocale?: Partial<Record<Locale, string>>
) {
  const langs = hreflangLanguages(segment, slugByLocale);
  return { languages: langs };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: absoluteUrl(localizedPath(locale)),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: sitemapAlternates(),
      images: [absoluteUrl(site.defaultOgImage)],
    });
  }

  for (const seg of STATIC_SEGMENTS) {
    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(localizedPath(locale, seg)),
        lastModified: now,
        changeFrequency: seg === "blog" ? "weekly" : "monthly",
        priority: seg === "activities" ? 0.9 : seg === "booking" ? 0.85 : 0.7,
        alternates: sitemapAlternates(seg),
      });
    }
  }

  for (const activity of activities) {
    const slugByLocale = activity.slug;
    const galleryImages = activity.gallery
      .slice(0, 6)
      .map((g) => g.src)
      .filter(Boolean);

    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(
          localizedPath(locale, "activities", slugByLocale[locale])
        ),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.95,
        alternates: sitemapAlternates("activities", slugByLocale),
        images: [activity.heroImage, ...galleryImages],
      });
    }
  }

  for (const post of blogPosts) {
    const slugByLocale = post.slug;
    const modified = new Date(post.publishedAt);

    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(localizedPath(locale, "blog", slugByLocale[locale])),
        lastModified: modified,
        changeFrequency: "monthly",
        priority: post.featured ? 0.75 : 0.6,
        alternates: sitemapAlternates("blog", slugByLocale),
        images: [post.cover],
      });
    }
  }

  return entries;
}
