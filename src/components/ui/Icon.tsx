import { iconMap, type IconName } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) return null;

  return (
    <LucideIcon aria-hidden="true" focusable={false} className={cn("h-5 w-5", className)} />
  );
}
