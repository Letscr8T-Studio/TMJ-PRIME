import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import type { ContactFormValues } from "@/lib/validation/contact";

interface SmtpConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  to: string;
  from: string;
}

function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.ZOHO_SMTP_HOST;
  const port = process.env.ZOHO_SMTP_PORT;
  const user = process.env.ZOHO_SMTP_USER;
  const password = process.env.ZOHO_SMTP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!host || !port || !user || !password || !to || !from) return null;

  return { host, port: Number(port), user, password, to, from };
}

let transporter: Transporter | null = null;

function getTransporter(config: SmtpConfig): Transporter {
  transporter ??= nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: true, // 465 = implicit TLS
    auth: { user: config.user, pass: config.password },
  });
  return transporter;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildText(data: ContactFormValues): string {
  return [
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Sector: ${data.sector}`,
    `Enquiry type: ${data.enquiryType}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

function buildHtml(data: ContactFormValues): string {
  const row = (label: string, value: string) =>
    `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`;

  return [
    row("Name", data.name),
    row("Company", data.company),
    row("Email", data.email),
    row("Phone", data.phone || "—"),
    row("Sector", data.sector),
    row("Enquiry type", data.enquiryType),
    "<p><strong>Message:</strong></p>",
    `<p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`,
  ].join("\n");
}

export async function sendEnquiry(data: ContactFormValues): Promise<{ ok: boolean }> {
  const config = getSmtpConfig();

  if (!config) {
    console.info("[email] SMTP not configured, logging enquiry", {
      name: data.name,
      company: data.company,
      email: data.email,
      sector: data.sector,
      enquiryType: data.enquiryType,
    });
    return { ok: true };
  }

  try {
    await getTransporter(config).sendMail({
      from: `"TMJprime Website" <${config.from}>`,
      to: config.to,
      replyTo: data.email,
      subject: `New enquiry: ${data.enquiryType} — ${data.company} (${data.name})`,
      text: buildText(data),
      html: buildHtml(data),
    });
    return { ok: true };
  } catch (error) {
    console.error("[email] Failed to send enquiry email:", error instanceof Error ? error.message : error);
    throw error;
  }
}
