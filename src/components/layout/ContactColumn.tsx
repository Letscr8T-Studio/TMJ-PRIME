import type { ContactInfo } from "@/types";

interface ContactColumnProps {
  contact: ContactInfo;
}

const ICON_PATHS = {
  mail: "M3 5h18v14H3V5Z M3 6l9 6 9-6",
  phone:
    "M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.6-.35 9.7 9.7 0 0 0 3 .5 1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5A17.5 17.5 0 0 1 2.5 4 1.5 1.5 0 0 1 4 2.5h2.2a1.5 1.5 0 0 1 1.5 1.5 9.7 9.7 0 0 0 .5 3 1.5 1.5 0 0 1-.35 1.6L6.6 10.8Z",
  pin: "M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3 3",
} as const;

function ContactIcon({ name }: { name: keyof typeof ICON_PATHS }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 shrink-0 text-brand-400"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}

function telHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

const linkClasses =
  "rounded-sm transition-colors hover:text-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

export function ContactColumn({ contact }: ContactColumnProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-white">
        Contact
      </h2>
      <ul className="mt-4 space-y-3 text-sm text-white/70">
        <li className="flex items-center gap-2">
          <ContactIcon name="mail" />
          <a href={`mailto:${contact.email}`} className={linkClasses}>
            {contact.email}
          </a>
        </li>
        {contact.phones.map((phone) => (
          <li key={phone} className="flex items-center gap-2">
            <ContactIcon name="phone" />
            <a href={telHref(phone)} className={linkClasses}>
              {phone}
            </a>
          </li>
        ))}
        {contact.address ? (
          <li className="flex items-center gap-2">
            <ContactIcon name="pin" />
            <span>{contact.address}</span>
          </li>
        ) : null}
        {contact.hours ? (
          <li className="flex items-center gap-2">
            <ContactIcon name="clock" />
            <span>{contact.hours}</span>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
