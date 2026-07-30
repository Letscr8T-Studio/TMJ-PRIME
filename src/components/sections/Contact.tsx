import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInfo } from "./ContactInfo";
import { siteConfig } from "@/config/site";

export function Contact() {
  const { copy } = siteConfig;

  return (
    <Section id="contact" variant="light" aria-labelledby="contact-heading">
      <SectionHeading
        as="h1"
        id="contact-heading"
        align="left"
        eyebrow={copy.contact.eyebrow}
        title={copy.contact.title}
        intro={copy.contact.intro}
      />

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Card className="p-6 md:p-8">
          <ContactForm />
        </Card>
        <ContactInfo />
      </div>
    </Section>
  );
}
