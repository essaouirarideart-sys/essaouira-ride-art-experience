"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { Locale } from "@/i18n/config";

const WhatsAppChatWidget = dynamic(
  () =>
    import("@/components/ui/WhatsAppChatWidget").then((m) => ({
      default: m.WhatsAppChatWidget,
    })),
  { ssr: false, loading: () => null }
);

const ScrollToTop = dynamic(
  () =>
    import("@/components/ui/ScrollToTop").then((m) => ({
      default: m.ScrollToTop,
    })),
  { ssr: false, loading: () => null }
);

export function DeferredChromeWidgets({ locale }: { locale: Locale }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof win.requestIdleCallback === "function") {
      const id = win.requestIdleCallback(() => setReady(true), { timeout: 1800 });
      return () => win.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(() => setReady(true), 1);
    return () => window.clearTimeout(id);
  }, []);

  if (!ready) return null;

  return (
    <>
      <WhatsAppChatWidget locale={locale} />
      <ScrollToTop locale={locale} />
    </>
  );
}
