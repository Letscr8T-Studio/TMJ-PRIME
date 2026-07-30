import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionVariant = "light" | "muted" | "dark" | "brand";

const variantClasses: Record<SectionVariant, string> = {
  light: "bg-surface text-ink",
  muted: "bg-brand-50 text-ink",
  dark: "bg-ink text-white",
  brand: "bg-brand-500 text-ink",
};

interface SectionProps {
  id: string;
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  "aria-labelledby"?: string;
}

export function Section({
  id,
  children,
  variant = "light",
  className,
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("scroll-mt-20 py-16 md:py-24", variantClasses[variant], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
