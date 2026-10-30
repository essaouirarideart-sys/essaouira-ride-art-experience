"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { locales, type Locale } from "@/i18n/config";
import {
  buildAlternatePath,
  type LocaleSlugPair,
} from "@/lib/localePaths";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  activitySlugs,
  blogSlugs,
}: {
  locale: Locale;
  activitySlugs: LocaleSlugPair[];
  blogSlugs: LocaleSlugPair[];
}) {
  const pathname = usePathname() ?? `/${locale}`;
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-bg-card/60 p-0.5">
      <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-ink-muted" />
      {locales.map((l) => {
        const href = buildAlternatePath(pathname, l, activitySlugs, blogSlugs);
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
