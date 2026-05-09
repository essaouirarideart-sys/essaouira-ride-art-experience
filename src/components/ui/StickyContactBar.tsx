"use client";

import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { buildWhatsAppUrl, telLink } from "@/lib/whatsapp";
import { localizedPath } from "@/lib/paths";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/fr";

export function StickyContactBar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const wa = buildWhatsAppUrl({ locale });
  const booking = localizedPath(locale, "booking");

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg-elevated/95 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href={telLink()}
          aria-label={dict.cta.callNow}
          className="flex items-center justify-center gap-2 py-3 text-xs font-medium text-ink"
        >
          <Phone className="h-4 w-4 text-gold" strokeWidth={2} />
          {dict.cta.callNow}
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={dict.cta.whatsapp}
          className="flex items-center justify-center gap-2 py-3 text-xs font-medium text-[#25D366]"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={2} />
          WhatsApp
        </a>
        <Link
          href={booking}
          className="flex items-center justify-center gap-2 bg-gradient-gold py-3 text-xs font-semibold text-bg-primary"
        >
          <CalendarCheck className="h-4 w-4" strokeWidth={2} />
          {dict.cta.bookNow}
        </Link>
      </div>
    </div>
  );
}
