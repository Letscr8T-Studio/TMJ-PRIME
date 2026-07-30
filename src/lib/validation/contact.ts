import { z } from "zod";
import { contactForm } from "@/config/data/contact";

function trimmedString(min: number, max: number) {
  return z
    .string()
    .trim()
    .min(min, `Please enter at least ${min} characters.`)
    .max(max, `Please keep this under ${max} characters.`);
}

export const contactSchema = z.object({
  name: trimmedString(2, 100),
  company: trimmedString(2, 120),
  email: z.email("Please enter a valid email address.").trim().max(200),
  phone: z
    .union([z.literal(""), z.string().trim().max(40, "Please keep this under 40 characters.")])
    .optional(),
  sector: z.string().refine((value) => contactForm.sectorOptions.includes(value), {
    message: "Please choose your sector.",
  }),
  enquiryType: z.string().refine((value) => contactForm.enquiryOptions.includes(value), {
    message: "Please choose what we can help with.",
  }),
  message: trimmedString(10, 2000),
  consent: z.literal(true, { error: "Please confirm you're happy for us to contact you." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

type ParseResult =
  | { success: true; data: ContactFormValues }
  | { success: false; fieldErrors: Record<string, string> };

export function parseContactForm(formData: FormData): ParseResult {
  const raw = {
    name: String(formData.get("name") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    sector: String(formData.get("sector") ?? "").trim(),
    enquiryType: String(formData.get("enquiryType") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    consent: formData.get("consent") === "on",
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { success: false, fieldErrors };
  }

  return { success: true, data: result.data };
}
