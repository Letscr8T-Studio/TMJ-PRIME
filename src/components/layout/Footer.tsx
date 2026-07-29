import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FooterColumn } from "./FooterColumn";
import { ContactColumn } from "./ContactColumn";

export function Footer() {
  const year = new Date().getFullYear();
  const { business, contact, nav, sectors, accreditations } = siteConfig;
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
              href: `#${sector.id}`,
            }))}
          />
          <ContactColumn contact={contact} />
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:justify-between">
          <p>
            © {year} {business.name}. {business.slogan}.
          </p>
          {registration ? <p>{registration}</p> : null}
        </div>
      </Container>
    </footer>
  );
}
