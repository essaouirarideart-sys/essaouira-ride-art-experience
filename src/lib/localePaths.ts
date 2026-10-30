import { locales, segments, type Locale } from "@/i18n/config";

export type LocaleSlugPair = { fr: string; en: string };

/**
 * Builds the equivalent path in the target locale using only segment
 * maps and compact slug pairs — never the full activity/blog datasets.
 */
export function buildAlternatePath(
  pathname: string,
  target: Locale,
  activitySlugs: LocaleSlugPair[],
  blogSlugs: LocaleSlugPair[]
): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}`;
  if (!locales.includes(parts[0] as Locale)) {
    parts.unshift(target);
  } else {
    parts[0] = target;
  }

  if (parts.length >= 2) {
    const currentSeg = parts[1];
    const match = Object.entries(segments).find(
      ([, v]) => v.fr === currentSeg || v.en === currentSeg
    );
    if (match) {
      parts[1] = match[1][target];
      if (parts.length >= 3 && match[0] === "activities") {
        const activity = activitySlugs.find(
          (a) => a.fr === parts[2] || a.en === parts[2]
        );
        if (activity) parts[2] = activity[target];
      }
      if (parts.length >= 3 && match[0] === "blog") {
        const post = blogSlugs.find(
          (p) => p.fr === parts[2] || p.en === parts[2]
        );
        if (post) parts[2] = post[target];
      }
    }
  }
  return "/" + parts.join("/");
}
