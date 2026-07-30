import type {
  NavLink,
  Sector,
  ProductCategory,
  ValueProp,
  HeroContent,
  ResellerContent,
  CopyConfig,
} from "./content";
import type { ContactFormConfig } from "./forms";

export interface SeoConfig {
  url: string;
  locale: string;
  ogImageAlt: string;
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
  contactForm: ContactFormConfig;
  seo: SeoConfig;
}
