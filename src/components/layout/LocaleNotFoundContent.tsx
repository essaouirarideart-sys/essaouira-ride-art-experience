"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export function LocaleNotFoundContent() {
  const pathname = usePathname();
  const maybeLocale = pathname.split("/").filter(Boolean)[0];
  const locale = isLocale(maybeLocale) ? maybeLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="heading-display mt-6 text-balance">
        {dict.common.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-md text-ink-muted">{dict.common.notFoundText}</p>
      <Link
        href={`/${locale}`}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-xs font-semibold uppercase tracking-widest2 text-bg-primary"
      >
        {dict.common.backToHome}
      </Link>
    </div>
  );
}
