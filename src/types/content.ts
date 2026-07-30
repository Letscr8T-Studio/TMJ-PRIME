import type { IconName } from "@/lib/icons";

export interface NavLink {
  label: string;
  href: string;
}

export interface Sector {
  id: string;
  title: string;
  blurb: string;
  icon: IconName;
  href?: string;
  image?: string;
  imageAlt?: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  blurb: string;
  icon: IconName;
}

export interface ValueProp {
  title: string;
  blurb: string;
  icon: IconName;
}

export interface Cta {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  headlineHighlight: string;
  subheadline: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  highlights: string[];
}

export interface ResellerContent {
  eyebrow: string;
  headline: string;
  body: string;
  bullets: string[];
  cta: Cta;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  intro: string;
}

export interface ProductsCopy extends SectionCopy {
  footnote: string;
}

export interface ContactCopy extends SectionCopy {
  infoHeading: string;
  image?: string;
  imageAlt?: string;
}

export interface ContactPageCopy {
  metaTitle: string;
  metaDescription: string;
}

export interface CopyConfig {
  sectors: SectionCopy;
  products: ProductsCopy;
  whyUs: SectionCopy;
  contact: ContactCopy;
  contactPage: ContactPageCopy;
}
