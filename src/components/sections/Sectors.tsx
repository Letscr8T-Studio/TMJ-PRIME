import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

const enquireLinkClasses =
  "mt-4 inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-ink transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2";

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
          <Card key={sector.id} as="article" interactive>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-ink">
              <Icon name={sector.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">{sector.title}</h3>
            <p className="mt-2 text-sm text-muted">{sector.blurb}</p>
            {sector.href ? (
              <a href={sector.href} className={enquireLinkClasses}>
                Enquire <span aria-hidden="true">→</span>
              </a>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
