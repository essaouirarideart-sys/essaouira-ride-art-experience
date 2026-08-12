import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

/**
 * Visual breadcrumbs — matches existing eyebrow / gold accent language.
 * Pair with breadcrumbJsonLd for structured data.
 */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (items.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-[11px] uppercase tracking-widest2 text-ink-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight
                  className="h-3 w-3 shrink-0 text-ink-dim"
                  aria-hidden
                />
              )}
              {isLast || !item.href ? (
                <span
                  className={isLast ? "text-gold" : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors duration-300 hover:text-gold"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
