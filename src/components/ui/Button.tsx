import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

interface AsLink extends BaseProps {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
  disabled?: never;
}

interface AsButton extends BaseProps {
  href?: never;
  external?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

type ButtonProps = AsLink | AsButton;

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide rounded-full transition-all duration-300 ease-out will-change-transform select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-gold text-bg-primary hover:shadow-gold hover:-translate-y-[1px] active:translate-y-0",
  secondary:
    "bg-transparent text-ink border border-border hover:border-gold hover:text-gold",
  ghost:
    "bg-transparent text-ink/80 hover:text-gold",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe5b] hover:-translate-y-[1px]",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-4 py-2",
  md: "text-sm px-6 py-3",
  lg: "text-sm px-8 py-4 sm:text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    icon,
    iconPosition = "right",
    fullWidth,
  } = props;

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={cn(classes, props.disabled && "opacity-50 cursor-not-allowed")}
    >
      {content}
    </button>
  );
}
