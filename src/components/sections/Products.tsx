import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Products() {
  const { products, copy } = siteConfig;

  return (
    <Section id="products" variant="light" aria-labelledby="products-heading">
      <SectionHeading
        as="h2"
        id="products-heading"
        align="center"
        eyebrow={copy.products.eyebrow}
        title={copy.products.title}
        intro={copy.products.intro}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} as="article">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-100">
              <Icon name={product.icon} className="h-5 w-5 text-ink" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink">{product.title}</h3>
            <p className="mt-2 text-sm text-muted">{product.blurb}</p>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted">
        {copy.products.footnote}
        <Button variant="ghost" size="sm" href="/contact">
          Ask about a product
        </Button>
      </p>
    </Section>
  );
}
