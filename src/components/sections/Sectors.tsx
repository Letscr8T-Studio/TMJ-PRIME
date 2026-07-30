import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectorCard } from "./SectorCard";
import { siteConfig } from "@/config/site";

export function Sectors() {
  const { sectors, copy } = siteConfig;

  return (
    <Section id="sectors" variant="muted" aria-labelledby="sectors-heading">
      <SectionHeading
        as="h2"
        id="sectors-heading"
        align="center"
        eyebrow={copy.sectors.eyebrow}
        title={copy.sectors.title}
        intro={copy.sectors.intro}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sectors.map((sector) => (
          <SectorCard key={sector.id} sector={sector} />
        ))}
      </div>
    </Section>
  );
}
