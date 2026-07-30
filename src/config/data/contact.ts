import type { ContactFormConfig } from "@/types";
import { sectors } from "./sectors";

export const contactForm: ContactFormConfig = {
  fields: {
    name: { label: "Your name", placeholder: "Your name" },
    company: { label: "Company / organisation", placeholder: "Company / organisation" },
    email: { label: "Work email", placeholder: "Work email" },
    phone: { label: "Phone (optional)", placeholder: "Phone (optional)" },
    sector: { label: "Your sector", placeholder: "Your sector" },
    enquiryType: { label: "What can we help with?", placeholder: "What can we help with?" },
    message: { label: "What do you need?", placeholder: "What do you need?" },
  },
  sectorOptions: [...sectors.map((sector) => sector.title), "Other"],
  enquiryOptions: [
    "Open a trade account",
    "Request a quote",
    "Reseller enquiry",
    "General enquiry",
  ],
  requiredNote: "Fields marked * are required.",
  consentLabel: "I agree to TMJprime contacting me about my enquiry.",
  consentNote:
    "We'll only use your details to respond. A full privacy policy will be linked here.",
  submitLabel: "Send enquiry",
  submitPendingLabel: "Sending…",
  successTitle: "Thanks — your enquiry's on its way.",
  successBody:
    "We've received your details and will reply by email, usually within one working day. Prefer to talk now? Call us on the number opposite.",
  errorMessage:
    "Something went wrong sending your enquiry. Please try again, or email us directly using the address opposite.",
  sendAnotherLabel: "Send another enquiry",
};
