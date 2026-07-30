"use server";

import type { ContactFormState } from "@/types";
import type { ContactFormValues } from "@/lib/validation/contact";
import { parseContactForm } from "@/lib/validation/contact";
import { sendEnquiry } from "@/lib/email";
import { contactForm } from "@/config/data/contact";

export async function submitContact(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const honeypot = String(formData.get("company_url") ?? "").trim();
  if (honeypot) {
    return { status: "success" };
  }

  const parsed = parseContactForm(formData);

  if (!parsed.success) {
    const values: Partial<ContactFormValues> = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      sector: String(formData.get("sector") ?? ""),
      enquiryType: String(formData.get("enquiryType") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    return { status: "error", errors: parsed.fieldErrors, values };
  }

  try {
    const result = await sendEnquiry(parsed.data);
    if (!result.ok) throw new Error("sendEnquiry returned ok:false");
    return { status: "success" };
  } catch (error) {
    console.error("[contact] Failed to send enquiry:", error);
    return { status: "error", formError: contactForm.errorMessage, values: parsed.data };
  }
}
