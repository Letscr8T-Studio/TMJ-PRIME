import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}

export function Eyebrow({ children, className, onDark = false }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink",
        onDark && "ring-offset-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
