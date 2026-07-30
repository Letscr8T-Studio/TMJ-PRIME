import "server-only";
import type { ContactFormValues } from "@/lib/validation/contact";
import { siteConfig } from "@/config/site";

export async function sendEnquiry(data: ContactFormValues): Promise<{ ok: boolean }> {
  const recipient = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;

  if (!process.env.RESEND_API_KEY) {
    console.info("[contact] New enquiry (no email provider configured, logging only):", {
      to: recipient,
      name: data.name,
      company: data.company,
      email: data.email,
      sector: data.sector,
      enquiryType: data.enquiryType,
      message: data.message.slice(0, 200),
    });
    return { ok: true };
  }

  // RESEND_API_KEY is set, but the wiring below is commented out by default.
  console.warn(
    "[contact] RESEND_API_KEY is set but Resend delivery isn't wired up — uncomment the block in src/lib/email.ts."
  );
  return { ok: true };

  // To enable real delivery:
  //   1. npm i resend
  //   2. set RESEND_API_KEY and CONTACT_FROM_EMAIL (a verified sender/domain) in .env
  //   3. uncomment:
  //   const { Resend } = await import('resend');
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   const { error } = await resend.emails.send({
  //     from: process.env.CONTACT_FROM_EMAIL!, to: recipient,
  //     replyTo: data.email, subject: `New enquiry: ${data.enquiryType} — ${data.company}`,
  //     text: <plain-text body built from data> });
  //   if (error) throw error; return { ok: true };
}
