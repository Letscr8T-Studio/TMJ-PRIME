import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import type { Sector } from "@/types";

interface SectorCardProps {
  sector: Sector;
}

const enquireLinkClasses =
  "mt-4 inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-ink transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2";

function EnquireLink({ href }: { href?: string }) {
  if (!href) return null;

  return (
    <a href={href} className={enquireLinkClasses}>
      Enquire <span aria-hidden="true">→</span>
    </a>
  );
}

export function SectorCard({ sector }: SectorCardProps) {
  if (sector.image) {
    return (
      <Card as="article" interactive className="overflow-hidden p-0">
        <div className="relative aspect-3/2 w-full bg-brand-100">
          <Image
            src={sector.image}
            alt={sector.imageAlt ?? "image"}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div className="p-6 pt-0">
          <div className="relative z-10 -mt-12 flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-ink ring-4 ring-surface">
            <Icon name={sector.icon} className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-ink">
            {sector.title}
          </h3>
          <p className="mt-2 text-sm text-muted">{sector.blurb}</p>
          <EnquireLink href={sector.href} />
        </div>
      </Card>
    );
  }

  return (
    <Card as="article" interactive>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-ink">
        <Icon name={sector.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{sector.title}</h3>
      <p className="mt-2 text-sm text-muted">{sector.blurb}</p>
      <EnquireLink href={sector.href} />
    </Card>
  );
}
