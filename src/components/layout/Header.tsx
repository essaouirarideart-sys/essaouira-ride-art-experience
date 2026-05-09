"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";
import { localizedPath } from "@/lib/paths";
import { cn } from "@/lib/utils";

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname() ?? "";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links: Array<{ key: string; href: string; label: string }> = [
    { key: "activities", href: localizedPath(locale, "activities"), label: dict.nav.activities },
    { key: "prices", href: localizedPath(locale, "prices"), label: dict.nav.prices },
    { key: "gallery", href: localizedPath(locale, "gallery"), label: dict.nav.gallery },
    { key: "about", href: localizedPath(locale, "about"), label: dict.nav.about },
    { key: "blog", href: localizedPath(locale, "blog"), label: dict.nav.blog },
    { key: "contact", href: localizedPath(locale, "contact"), label: dict.nav.contact },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/80 bg-bg-primary/85 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
          <Link href={localizedPath(locale)} className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80">
            <Image
              src="/logo.svg"
              alt="Essaouira Ride & Art Experience"
              width={48}
              height={48}
              className="h-14 w-14"
              priority
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {links.map((l) => {
                const active =
                  pathname === l.href ||
                  (l.key !== "home" && pathname.startsWith(l.href + "/"));
                return (
                  <li key={l.key}>
                    <Link
                      href={l.href}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                        active
                          ? "text-gold"
                          : "text-ink/80 hover:text-gold"
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher locale={locale} />
            <Link
              href={localizedPath(locale, "booking")}
              className="hidden rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold uppercase tracking-widest2 text-bg-primary transition-transform duration-300 hover:-translate-y-[1px] hover:shadow-gold sm:inline-flex"
            >
              {dict.nav.book}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink transition-colors duration-300 hover:border-gold hover:text-gold lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-border bg-bg-primary/97 backdrop-blur-md sm:top-20 lg:hidden"
          >
            <nav aria-label="Mobile navigation" className="container-page py-4">
              <ul className="flex flex-col divide-y divide-border">
                {links.map((l) => (
                  <li key={l.key}>
                    <Link
                      href={l.href}
                      className="block py-3.5 font-display text-xl text-ink hover:text-gold"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Link
                    href={localizedPath(locale, "booking")}
                    className="flex w-full items-center justify-center rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest2 text-bg-primary"
                  >
                    {dict.nav.book}
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
