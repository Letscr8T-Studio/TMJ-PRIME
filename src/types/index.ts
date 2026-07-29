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
}

export interface ProductCategory {
  id: string;
  title: string;
  blurb: string;
}

export interface ValueProp {
  title: string;
  blurb: string;
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
  headline: string;
  body: string;
  cta: Cta;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  intro: string;
}

export interface CopyConfig {
  sectors: SectionCopy;
}

export interface BusinessInfo {
  name: string;
  slogan: string;
  shortDescription: string;
  metaTitle?: string;
  companyNumber?: string;
  vatNumber?: string;
}

export interface ContactInfo {
  ceo: {
    name: string;
    role: string;
  };
  email: string;
  phones: string[];
  country: string;
  address?: string;
  hours?: string;
}

export interface SiteConfig {
  business: BusinessInfo;
  contact: ContactInfo;
  nav: NavLink[];
  sectors: Sector[];
  products: ProductCategory[];
  valueProps: ValueProp[];
  hero: HeroContent;
  reseller: ResellerContent;
  accreditations: string[];
  copy: CopyConfig;
}
