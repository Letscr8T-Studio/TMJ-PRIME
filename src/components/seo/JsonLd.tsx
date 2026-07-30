import { siteConfig } from "@/config/site";

export function JsonLd() {
  const { business, contact, seo } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: seo.url,
    slogan: business.slogan,
    description: business.shortDescription,
    email: contact.email,
    telephone: contact.phones,
    areaServed: { "@type": "Country", name: "United Kingdom" },
    knowsAbout: ["hygiene supplies", "toiletry supplies", "janitorial supplies"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: contact.email,
      telephone: contact.phones[0],
      areaServed: "GB",
      availableLanguage: "English",
    },
    logo: `${seo.url}/icon`,
    ...(contact.address
      ? { address: { "@type": "PostalAddress", streetAddress: contact.address } }
      : {}),
    ...(contact.hours ? { openingHours: contact.hours } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
