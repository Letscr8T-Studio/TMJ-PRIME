import type { NavLink } from "@/types";

interface FooterColumnProps {
  heading: string;
  links: NavLink[];
}

export function FooterColumn({ heading, links }: FooterColumnProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
        {heading}
      </h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="rounded-sm text-sm text-white/70 transition-colors hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
