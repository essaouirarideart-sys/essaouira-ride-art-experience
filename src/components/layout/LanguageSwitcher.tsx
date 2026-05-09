"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, segments, type Locale } from "@/i18n/config";
import { activities } from "@/data/activities";
import { blogPosts } from "@/data/blog";
import { cn } from "@/lib/utils";

/**
 * Builds the equivalent path in the target locale.
 * Translates segment names AND activity / blog slugs by looking up matched data entries.
 */
function buildAlternatePath(pathname: string, target: Locale): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}`;
  // [0] is current locale → replace
  parts[0] = target;
  // If we have a segment in [1], translate via segments map
  if (parts.length >= 2) {
    const currentSeg = parts[1];
    // Find by FR or EN value
    const match = Object.entries(segments).find(
      ([, v]) => v.fr === currentSeg || v.en === currentSeg
    );
    if (match) {
      parts[1] = match[1][target];
      // If [2] is an activity slug, translate it
      if (parts.length >= 3 && match[0] === "activities") {
        const activity = activities.find(
          (a) => a.slug.fr === parts[2] || a.slug.en === parts[2]
        );
        if (activity) parts[2] = activity.slug[target];
      }
      // If [2] is a blog slug, translate it
      if (parts.length >= 3 && match[0] === "blog") {
        const post = blogPosts.find(
          (p) => p.slug.fr === parts[2] || p.slug.en === parts[2]
        );
        if (post) parts[2] = post.slug[target];
      }
    }
  }
  return "/" + parts.join("/");
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? `/${locale}`;
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-bg-card/60 p-0.5">
      <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-ink-muted" />
      {locales.map((l) => {
        const href = buildAlternatePath(pathname, l);
        const active = l === locale;
        return (
          <Link
            key={l}
            href={href}
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest2 transition-colors duration-300",
              active
                ? "bg-gold text-bg-primary"
                : "text-ink-muted hover:text-ink"
            )}
            aria-current={active ? "true" : undefined}
            hrefLang={l}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}
