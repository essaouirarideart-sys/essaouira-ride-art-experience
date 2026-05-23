"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Share2 } from "lucide-react";
import type { Locale } from "@/i18n/config";

interface Props {
  url: string;
  title: string;
  locale: Locale;
}

export function BlogShareBar({ url, title, locale }: Props) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        /* fall through */
      }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const label = locale === "fr" ? "Partager" : "Share";
  const copiedLabel = locale === "fr" ? "Copié !" : "Copied!";

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex"
          aria-label={label}
        >
          <button
            type="button"
            onClick={share}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-bg-primary/80 text-gold shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold hover:shadow-gold"
            title={copied ? copiedLabel : label}
          >
            {copied ? (
              <Link2 className="h-4 w-4" />
            ) : (
              <Share2 className="h-4 w-4" />
            )}
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
