import type { SiteConfig } from "@/types";
import { nav } from "./data/nav";
import { sectors } from "./data/sectors";
import { products } from "./data/products";
import { valueProps } from "./data/valueProps";
import { copy } from "./data/copy";
import { contactForm } from "./data/contact";
import { seo } from "./data/seo";

export const siteConfig: SiteConfig = {
  business: {
    name: "TMJprime",
    slogan: "Quality You Can Trust",
    shortDescription:
      "UK-based supplier of hygiene and toiletry products for care homes, hotels, and commercial clients.",
  },
  contact: {
    ceo: {
      name: "Maryjane Obidimma",
      role: "CEO",
    },
    email: "sales@tmjprime.co.uk",
    phones: ["+44 7769 375625", "+44 7769 375623"],
    country: "United Kingdom",
  },
  agency: { name: "LetsCr8T", url: "https://letscr8t.vercel.app/" },
  accreditations: [],
  nav,
  sectors,
  products,
  valueProps,
  hero: {
    eyebrow: "UK-based hygiene & toiletry supplier",
    headline: "Hygiene and toiletry supplies your business can count on",
    headlineHighlight: "count on",
    subheadline:
      "TMJprime supplies care homes, hotels, and commercial clients across the UK with quality hygiene and toiletry products — dependable stock, competitive trade pricing, and reliable delivery.",
    primaryCta: { label: "Open a trade account", href: "/contact" },
    secondaryCta: { label: "Request a quote", href: "/contact" },
    highlights: [
      "UK-based supplier",
      "Care homes · Hotels · Commercial",
      "Trade & reseller accounts",
      "Reliable UK delivery",
    ],
  },
  reseller: {
    eyebrow: "Trade & reseller accounts",
    headline: "Become a TMJprime reseller",
    body: "Partner with us and access our full range of hygiene and toiletry products at trade prices, backed by reliable UK supply.",
    bullets: [
      "Trade pricing on our full product range",
      "Dedicated account support",
      "Flexible ordering with reliable UK delivery",
    ],
    cta: { label: "Set up a reseller account", href: "/contact" },
  },
  copy,
  contactForm,
  seo,
};
