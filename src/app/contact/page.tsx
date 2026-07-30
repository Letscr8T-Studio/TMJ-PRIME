import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.copy.contactPage.metaTitle,
  description: siteConfig.copy.contactPage.metaDescription,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact />;
}
