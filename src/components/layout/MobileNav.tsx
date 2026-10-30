"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import type { HeaderNavLink } from "./headerNav";

const MobileNavPanel = dynamic(
  () =>
    import("./MobileNavPanel").then((m) => ({ default: m.MobileNavPanel })),
  { ssr: false }
);

export function MobileNav({
  links,
  bookHref,
  bookLabel,
}: {
  links: HeaderNavLink[];
  bookHref: string;
  bookLabel: string;
}) {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink transition-colors duration-300 hover:border-gold hover:text-gold lg:hidden"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>
      {open && (
        <MobileNavPanel
          links={links}
          bookHref={bookHref}
          bookLabel={bookLabel}
        />
      )}
    </>
  );
}
