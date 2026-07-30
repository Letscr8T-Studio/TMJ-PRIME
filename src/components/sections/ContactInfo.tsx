import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

function telHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

const linkClasses =
  "rounded-sm transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";

export function ContactInfo() {
  const { contact, copy } = siteConfig;

  return (
    <div>
      <h3 className="text-lg font-semibold text-ink">{copy.contact.infoHeading}</h3>
      <p className="mt-2 text-sm text-muted">
        {contact.ceo.name}, {contact.ceo.role}
      </p>

      <ul className="mt-6 space-y-4 text-sm text-ink">
        <li className="flex items-center gap-3">
          <Icon name="mail" className="h-5 w-5 text-brand-600" />
          <a href={`mailto:${contact.email}`} className={linkClasses}>
            {contact.email}
          </a>
        </li>
        {contact.phones.map((phone) => (
          <li key={phone} className="flex items-center gap-3">
            <Icon name="phone" className="h-5 w-5 text-brand-600" />
            <a href={telHref(phone)} className={linkClasses}>
              {phone}
            </a>
          </li>
        ))}
        {contact.address ? (
          <li className="flex items-center gap-3">
            <Icon name="pin" className="h-5 w-5 text-brand-600" />
            <span>{contact.address}</span>
          </li>
        ) : null}
        {contact.hours ? (
          <li className="flex items-center gap-3">
            <Icon name="clock" className="h-5 w-5 text-brand-600" />
            <span>{contact.hours}</span>
          </li>
        ) : null}
      </ul>

      {copy.contact.image ? (
        <div className="relative mt-8 aspect-4/3 w-full overflow-hidden rounded-xl bg-brand-100">
          <Image
            src={copy.contact.image}
            alt={copy.contact.imageAlt ?? ""}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </div>
      ) : null}
    </div>
  );
}
