import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { HeaderScroll } from "./HeaderScroll";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import type { LocaleSlugPair } from "@/lib/localePaths";
import type { HeaderNavLink } from "./headerNav";
import { localizedPath } from "@/lib/paths";

export function Header({
  locale,
  dict,
  activitySlugs,
  blogSlugs,
}: {
  locale: Locale;
  dict: Dictionary;
  activitySlugs: LocaleSlugPair[];
  blogSlugs: LocaleSlugPair[];
}) {
  const links: HeaderNavLink[] = [
    { key: "activities", href: localizedPath(locale, "activities"), label: dict.nav.activities },
    { key: "prices", href: localizedPath(locale, "prices"), label: dict.nav.prices },
    { key: "gallery", href: localizedPath(locale, "gallery"), label: dict.nav.gallery },
    { key: "about", href: localizedPath(locale, "about"), label: dict.nav.about },
    { key: "blog", href: localizedPath(locale, "blog"), label: dict.nav.blog },
    { key: "contact", href: localizedPath(locale, "contact"), label: dict.nav.contact },
  ];
  const bookHref = localizedPath(locale, "booking");
  const bookLabel = dict.nav.book;

  return (
    <HeaderScroll>
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link
          href={localizedPath(locale)}
          className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
        >
          <Image
            src="/logo.png"
            alt="Essaouira Ride & Art Experience"
            width={56}
            height={56}
            className="h-14 w-14 bg-transparent"
          />
        </Link>

        <DesktopNav links={links} />

        <div className="flex items-center gap-3">
          <LanguageSwitcher
            locale={locale}
            activitySlugs={activitySlugs}
            blogSlugs={blogSlugs}
          />
          <Link
            href={bookHref}
            className="hidden rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold uppercase tracking-widest2 text-bg-primary transition-transform duration-300 hover:-translate-y-[1px] hover:shadow-gold sm:inline-flex"
          >
            {bookLabel}
          </Link>
          <MobileNav
            links={links}
            bookHref={bookHref}
            bookLabel={bookLabel}
          />
        </div>
      </div>
    </HeaderScroll>
  );
}
