import type { Agency } from "@/types";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FooterColumn } from "./FooterColumn";
import { ContactColumn } from "./ContactColumn";

const creditLinkClasses =
  "rounded-sm text-white/80 transition-colors hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

function AgencyCredit({ agency }: { agency: Agency }) {
  return (
    <p>
      Website by{" "}
      <a href={agency.url} target="_blank" rel="noopener noreferrer" className={creditLinkClasses}>
        {agency.name}
      </a>
    </p>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const { business, contact, nav, sectors, accreditations, agency } = siteConfig;
  const registration = [
    business.companyNumber && `Company No. ${business.companyNumber}`,
    business.vatNumber && `VAT ${business.vatNumber}`,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <footer className="bg-ink text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              {business.shortDescription}
            </p>
            {accreditations.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {accreditations.map((label) => (
                  <li
                    key={label}
                    className="rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-ink"
                  >
                    {label}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <FooterColumn heading="Company" links={nav} />
          <FooterColumn
            heading="Sectors"
            links={sectors.map((sector) => ({
              label: sector.title,
              href: `/#${sector.id}`,
            }))}
          />
          <ContactColumn contact={contact} />
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <p>
              © {year} {business.name}. {business.slogan}.
            </p>
            {registration ? <p>{registration}</p> : <AgencyCredit agency={agency} />}
          </div>
          {registration ? (
            <div className="mt-4 text-center">
              <AgencyCredit agency={agency} />
            </div>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
