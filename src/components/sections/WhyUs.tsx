import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

export function WhyUs() {
  const { valueProps, copy } = siteConfig;

  return (
    <Section id="why-us" variant="dark" aria-labelledby="why-us-heading">
      <SectionHeading
        as="h2"
        id="why-us-heading"
        align="center"
        onDark
        eyebrow={copy.whyUs.eyebrow}
        title={copy.whyUs.title}
        intro={copy.whyUs.intro}
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((valueProp) => (
          <article key={valueProp.title}>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Icon name={valueProp.icon} className="h-6 w-6 text-brand-400" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-white">{valueProp.title}</h3>
            <p className="mt-2 text-sm text-white/70">{valueProp.blurb}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
