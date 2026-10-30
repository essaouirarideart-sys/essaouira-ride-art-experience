"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { HeaderNavLink } from "./headerNav";

export function DesktopNav({ links }: { links: HeaderNavLink[] }) {
  const pathname = usePathname() ?? "";

  return (
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
                  active ? "text-gold" : "text-ink/80 hover:text-gold"
                )}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
