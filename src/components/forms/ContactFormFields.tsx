import { Field } from "./Field";
import { siteConfig } from "@/config/site";
import type { ContactFormState } from "@/types";

interface ContactFormFieldsProps {
  state: ContactFormState;
}

export function ContactFormFields({ state }: ContactFormFieldsProps) {
  const { fields, sectorOptions, enquiryOptions } = siteConfig.contactForm;

  return (
    <>
      <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <Field
          id="contact-name"
          name="name"
          label={fields.name.label}
          placeholder={fields.name.placeholder}
          required
          defaultValue={state.values?.name}
          error={state.errors?.name}
        />
        <Field
          id="contact-company"
          name="company"
          label={fields.company.label}
          placeholder={fields.company.placeholder}
          required
          defaultValue={state.values?.company}
          error={state.errors?.company}
        />
      </div>

      <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <Field
          id="contact-email"
          name="email"
          type="email"
          label={fields.email.label}
          placeholder={fields.email.placeholder}
          required
          defaultValue={state.values?.email}
          error={state.errors?.email}
        />
        <Field
          id="contact-phone"
          name="phone"
          type="tel"
          label={fields.phone.label}
          placeholder={fields.phone.placeholder}
          defaultValue={state.values?.phone}
          error={state.errors?.phone}
        />
      </div>

      <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <Field
          id="contact-sector"
          name="sector"
          type="select"
          label={fields.sector.label}
          placeholder={fields.sector.placeholder}
          options={sectorOptions}
          required
          defaultValue={state.values?.sector}
          error={state.errors?.sector}
        />
        <Field
          id="contact-enquiryType"
          name="enquiryType"
          type="select"
          label={fields.enquiryType.label}
          placeholder={fields.enquiryType.placeholder}
          options={enquiryOptions}
          required
          defaultValue={state.values?.enquiryType}
          error={state.errors?.enquiryType}
        />
      </div>

      <Field
        id="contact-message"
        name="message"
        type="textarea"
        rows={5}
        label={fields.message.label}
        placeholder={fields.message.placeholder}
        required
        defaultValue={state.values?.message}
        error={state.errors?.message}
      />
    </>
  );
}
