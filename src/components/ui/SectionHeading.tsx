import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  id?: string;
  onDark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
  id,
  onDark = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn(isCenter && "text-center")}>
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink",
            isCenter && "mx-auto"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <Heading
        id={id}
        className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl",
          eyebrow && "mt-4",
          onDark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </Heading>
      {intro ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base md:text-lg",
            onDark ? "text-white/80" : "text-muted",
            isCenter && "mx-auto"
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
