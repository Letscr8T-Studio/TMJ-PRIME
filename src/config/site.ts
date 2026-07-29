import type { SiteConfig } from "@/types";

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
  accreditations: [],
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Sectors", href: "#sectors" },
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#why-us" },
    { label: "Reseller", href: "#reseller" },
    { label: "Contact", href: "#contact" },
  ],
  sectors: [
    {
      id: "care-homes",
      title: "Care Homes",
      blurb:
        "Dependable hygiene essentials that keep residents comfortable and facilities running to standard.",
      icon: "heart-handshake",
      href: "#contact",
    },
    {
      id: "hotels",
      title: "Hotels",
      blurb:
        "Guest toiletries and housekeeping supplies that reflect the standard your guests expect.",
      icon: "bed",
      href: "#contact",
    },
    {
      id: "commercial",
      title: "Commercial",
      blurb:
        "Bulk hygiene and washroom supplies for offices, facilities, and trade clients.",
      icon: "building",
      href: "#contact",
    },
  ],
  products: [
    {
      id: "toiletries",
      title: "Toiletries & Personal Care",
      blurb: "Soap, shampoo, and personal care essentials for guests and residents.",
    },
    {
      id: "paper-tissue",
      title: "Paper & Tissue Products",
      blurb: "Toilet rolls, hand towels, and tissues for washrooms and back-of-house.",
    },
    {
      id: "cleaning-chemicals",
      title: "Cleaning & Washroom Chemicals",
      blurb: "Everyday cleaning, disinfecting, and washroom chemical supplies.",
    },
    {
      id: "hand-hygiene",
      title: "Hand Hygiene & Sanitisation",
      blurb: "Hand soap, sanitiser, and hygiene stations for high-traffic areas.",
    },
    {
      id: "ppe-disposables",
      title: "PPE & Disposables",
      blurb: "Gloves, aprons, and disposable essentials for staff and housekeeping.",
    },
    {
      id: "dispensers-equipment",
      title: "Dispensers & Equipment",
      blurb: "Dispensers and washroom equipment to keep facilities running smoothly.",
    },
  ],
  valueProps: [
    {
      title: "Quality you can trust",
      blurb:
        "Products that meet the standards your business and the people you serve rely on.",
    },
    {
      title: "Reliable supply",
      blurb: "Consistent stock and dependable delivery, so you never run short.",
    },
    {
      title: "Competitive trade pricing",
      blurb:
        "Volume-friendly pricing built for resellers and businesses buying at scale.",
    },
    {
      title: "UK-based support",
      blurb: "A responsive team that understands your sector.",
    },
  ],
  hero: {
    eyebrow: "UK-based hygiene & toiletry supplier",
    headline: "Hygiene and toiletry supplies your business can count on",
    headlineHighlight: "count on",
    subheadline:
      "TMJprime supplies care homes, hotels, and commercial clients across the UK with quality hygiene and toiletry products — dependable stock, competitive trade pricing, and reliable delivery.",
    primaryCta: { label: "Open a trade account", href: "#contact" },
    secondaryCta: { label: "Request a quote", href: "#contact" },
    highlights: [
      "UK-based supplier",
      "Care homes · Hotels · Commercial",
      "Trade & reseller accounts",
      "Reliable UK delivery",
    ],
  },
  reseller: {
    headline: "Become a TMJprime reseller",
    body: "Partner with us and access our full range of hygiene and toiletry products at trade prices, backed by reliable UK supply.",
    cta: { label: "Set up a reseller account", href: "#contact" },
  },
  copy: {
    sectors: {
      eyebrow: "Who we supply",
      title: "Hygiene supplies built around your sector",
      intro:
        "Care homes, hotels, and commercial facilities each have different priorities. We stock the right range for all three — and understand what each one demands.",
    },
  },
};
