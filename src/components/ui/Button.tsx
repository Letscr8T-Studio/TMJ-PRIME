import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  onDark?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
};

function variantClasses(variant: ButtonVariant, onDark: boolean): string {
  const ring = onDark ? "ring-brand-400 ring-offset-ink" : "ring-ink ring-offset-white";

  if (variant === "primary") {
    return cn("bg-brand-500 text-ink hover:bg-brand-600", ring);
  }
  if (variant === "secondary") {
    return cn(
      onDark
        ? "border border-white text-white hover:bg-white hover:text-ink"
        : "border border-ink text-ink hover:bg-ink hover:text-white",
      ring
    );
  }
  return cn(
    onDark ? "text-white hover:text-brand-400" : "text-ink hover:text-brand-700",
    ring
  );
}

export function Button({
  variant = "primary",
  size = "md",
  onDark = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    sizeClasses[size],
    variantClasses(variant, onDark),
    className
  );

  if (typeof rest.href === "string") {
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
