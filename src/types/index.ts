export interface NavLink {
  label: string;
  href: string;
}

export interface Sector {
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
  subheadline: string;
  primaryCta: Cta;
  secondaryCta: Cta;
}

export interface ResellerContent {
  headline: string;
  body: string;
  cta: Cta;
}

export interface BusinessInfo {
  name: string;
  slogan: string;
  description: string;
}

export interface ContactInfo {
  ceo: {
    name: string;
    role: string;
  };
  email: string;
  phones: string[];
  country: string;
}

export interface SiteConfig {
  business: BusinessInfo;
  contact: ContactInfo;
  navLinks: NavLink[];
  sectors: Sector[];
  valueProps: ValueProp[];
  hero: HeroContent;
  reseller: ResellerContent;
}
