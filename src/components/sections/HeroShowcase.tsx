import { siteConfig } from "@/config/site";

export function HeroShowcase() {
  const { products } = siteConfig;

  return (
    <div aria-hidden="true" className="relative">
      <div className="absolute -top-8 -right-8 -z-10 h-40 w-40 rounded-full bg-brand-400/40 blur-3xl" />

      {/* Decorative showcase — can be replaced with a real product/brand photo later (public/images/hero.*) */}
      <div className="rounded-2xl border border-black/10 bg-brand-50 p-6 md:p-8">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/70">
            Our range
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg border border-black/10 bg-surface px-4 py-3 text-sm font-semibold text-ink"
            >
              {product.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
