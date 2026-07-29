import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

export function Reseller() {
  const { reseller } = siteConfig;

  return (
    <Section id="reseller" variant="brand" aria-labelledby="reseller-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow variant="invert">{reseller.eyebrow}</Eyebrow>
          <h2
            id="reseller-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            {reseller.headline}
          </h2>
          <p className="mt-4 max-w-xl text-ink/80">{reseller.body}</p>

          <div className="mt-8">
            <Button href={reseller.cta.href} variant="secondary" size="lg">
              {reseller.cta.label}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ul className="space-y-4 rounded-2xl border border-ink/15 bg-brand-400/40 p-6 md:p-8">
          {reseller.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <Icon name="handshake" className="mt-0.5 h-5 w-5 shrink-0 text-ink" />
              <span className="font-medium text-ink">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
