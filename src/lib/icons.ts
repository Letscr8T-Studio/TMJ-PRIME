import { HeartHandshake, BedDouble, Building2, Check, type LucideIcon } from "lucide-react";

export const iconMap = {
  "heart-handshake": HeartHandshake,
  bed: BedDouble,
  building: Building2,
  check: Check,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;
