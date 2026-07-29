import {
  HeartHandshake,
  BedDouble,
  Building2,
  Check,
  Droplets,
  Scroll,
  SprayCan,
  ShieldCheck,
  Brush,
  Shirt,
  BadgeCheck,
  Truck,
  Tag,
  Users,
  Handshake,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  "heart-handshake": HeartHandshake,
  bed: BedDouble,
  building: Building2,
  check: Check,
  droplets: Droplets,
  // lucide-react has no ToiletPaper export in this version; Scroll is the documented fallback.
  scroll: Scroll,
  spray: SprayCan,
  shield: ShieldCheck,
  brush: Brush,
  shirt: Shirt,
  "badge-check": BadgeCheck,
  truck: Truck,
  tag: Tag,
  users: Users,
  handshake: Handshake,
  "arrow-right": ArrowRight,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;
