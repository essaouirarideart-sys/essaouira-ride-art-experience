"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HeaderNavLink } from "./headerNav";

export function MobileNavPanel({
  links,
  bookHref,
  bookLabel,
}: {
  links: HeaderNavLink[];
  bookHref: string;
  bookLabel: string;
}) {
  return (
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
              href={bookHref}
              className="flex w-full items-center justify-center rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-widest2 text-bg-primary"
            >
              {bookLabel}
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
