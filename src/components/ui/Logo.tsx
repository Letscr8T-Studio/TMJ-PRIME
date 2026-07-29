import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  onDark?: boolean;
}

/* PLACEHOLDER wordmark — replace with client SVG logo */
export function Logo({ onDark = false }: LogoProps) {
  return (
    <a
      href="#hero"
      aria-label={siteConfig.business.name}
      className={cn(
        "inline-flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2",
        onDark ? "focus-visible:ring-offset-ink" : "focus-visible:ring-offset-white"
      )}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-sm font-extrabold text-ink">
        TMJ
      </span>
      <span className={cn("text-lg font-semibold", onDark ? "text-white" : "text-ink")}>
        prime
      </span>
    </a>
  );
}
