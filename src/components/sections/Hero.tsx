import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { HeroShowcase } from "./HeroShowcase";

const HIGHLIGHT_CLASSES =
  "relative isolate inline-block whitespace-nowrap text-ink after:absolute after:inset-x-0 after:bottom-[0.1em] after:-z-10 after:h-[0.4em] after:rounded after:bg-brand-400 after:content-['']";

function renderHeadline(headline: string, highlight: string): ReactNode {
  const index = headline.indexOf(highlight);
  if (index === -1) return headline;

  return (
    <>
      {headline.slice(0, index)}
      <span className={HIGHLIGHT_CLASSES}>{highlight}</span>
      {headline.slice(index + highlight.length)}
    </>
  );
}

export function Hero() {
  const { hero } = siteConfig;

  return (
    <Section
      id="hero"
      variant="light"
      aria-labelledby="hero-heading"
      className="pt-12 pb-16 md:pb-24 md:pt-20"
    >
      <div className="relative overflow-hidden">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1
              id="hero-heading"
              className="mt-4 text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              {renderHeadline(hero.headline, hero.headlineHighlight)}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{hero.subheadline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href} variant="primary" size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {hero.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="inline-flex items-center gap-2 text-sm text-muted"
                >
                  <Icon name="check" className="h-4 w-4 text-brand-600" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <HeroShowcase />
        </div>
      </div>
    </Section>
  );
}
