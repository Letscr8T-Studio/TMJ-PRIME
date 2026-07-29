import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <Section id="hero" aria-labelledby="hero-heading">
      <SectionHeading
        as="h1"
        id="hero-heading"
        eyebrow={siteConfig.hero.eyebrow}
        title={siteConfig.hero.headline}
      />
    </Section>
  );
}
