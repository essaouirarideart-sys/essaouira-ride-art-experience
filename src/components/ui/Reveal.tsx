import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "header" | "footer";
  amount?: number;
  y?: number;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const Component = Tag as ElementType;
  const style: CSSProperties | undefined =
    delay > 0 ? { animationDelay: `${delay}s` } : undefined;
  return (
    <Component className={cn("reveal-up", className)} style={style}>
      {children}
    </Component>
  );
}

export function RevealStagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  return <div className={cn("reveal-stagger", className)}>{children}</div>;
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return <div className={cn("reveal-up", className)}>{children}</div>;
}
