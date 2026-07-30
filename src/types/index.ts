import type { IconName } from "@/lib/icons";
import type { ContactFormValues } from "@/lib/validation/contact";

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

export interface ContactFormFieldCopy {
  label: string;
  placeholder: string;
}

export interface ContactFormConfig {
  fields: {
    name: ContactFormFieldCopy;
    company: ContactFormFieldCopy;
    email: ContactFormFieldCopy;
    phone: ContactFormFieldCopy;
    sector: ContactFormFieldCopy;
    enquiryType: ContactFormFieldCopy;
    message: ContactFormFieldCopy;
  };
  sectorOptions: string[];
  enquiryOptions: string[];
  requiredNote: string;
  consentLabel: string;
  consentNote: string;
  submitLabel: string;
  submitPendingLabel: string;
  successTitle: string;
  successBody: string;
  errorMessage: string;
  sendAnotherLabel: string;
}

export interface ContactFormState {
  status: "idle" | "success" | "error";
  errors?: Record<string, string>;
  values?: Partial<ContactFormValues>;
  formError?: string;
}

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
