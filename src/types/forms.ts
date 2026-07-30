import type { ContactFormValues } from "@/lib/validation/contact";

export interface ContactFormFieldCopy {
  label: string;
  placeholder: string;
}

export interface ContactFormConfig {
  fields: {
    name: ContactFormFieldCopy;
    company: ContactFormFieldCopy;
    email: ContactFormFieldCopy;
    phone: ContactFormFieldCopy;
    sector: ContactFormFieldCopy;
    enquiryType: ContactFormFieldCopy;
    message: ContactFormFieldCopy;
  };
  sectorOptions: string[];
  enquiryOptions: string[];
  requiredNote: string;
  consentLabel: string;
  consentNote: string;
  submitLabel: string;
  submitPendingLabel: string;
  successTitle: string;
  successBody: string;
  errorMessage: string;
  sendAnotherLabel: string;
}

export interface ContactFormState {
  status: "idle" | "success" | "error";
  errors?: Record<string, string>;
  values?: Partial<ContactFormValues>;
  formError?: string;
}
