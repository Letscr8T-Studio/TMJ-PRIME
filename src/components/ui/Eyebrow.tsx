import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
  variant?: "default" | "invert";
}

export function Eyebrow({
  children,
  className,
  onDark = false,
  variant = "default",
}: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variant === "invert" ? "bg-ink text-brand-400" : "bg-brand-500 text-ink",
        onDark && "ring-offset-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
