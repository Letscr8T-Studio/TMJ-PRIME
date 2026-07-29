import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
  interactive?: boolean;
}

export function Card({ children, className, as = "div", interactive = false }: CardProps) {
  const Tag: ElementType = as;

  return (
    <Tag
      className={cn(
        "rounded-xl border border-black/10 bg-surface p-6",
        interactive && "transition-colors hover:border-brand-400 hover:shadow-sm",
        className
      )}
    >
      {children}
    </Tag>
  );
}
