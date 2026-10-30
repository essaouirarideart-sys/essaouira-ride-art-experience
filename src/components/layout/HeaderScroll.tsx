"use client";

import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function HeaderScroll({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const apply = () => {
      ticking = false;
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/80 bg-bg-primary/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      {children}
    </header>
  );
}
