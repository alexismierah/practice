import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

function getSmtpConfig() {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!user || !pass) return null;

  const host =
    process.env.SMTP_HOST?.trim() || "smtpout.secureserver.net";
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure =
    process.env.SMTP_SECURE === "true" ||
    (process.env.SMTP_SECURE !== "false" && port === 465);

  return { host, port, secure, auth: { user, pass } };
}

let transporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  const config = getSmtpConfig();
  if (!config) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport(config);
  }
  return transporter;
}

export function isEmailConfigured(): boolean {
  return getSmtpConfig() !== null;
}

export function getContactToAddress(): string {
  return (
    process.env.CONTACT_TO_EMAIL?.trim() ||
    process.env.CONTACT_EMAIL?.trim() ||
    process.env.SMTP_USER?.trim() ||
    ""
  );
}

export function getFromAddress(): string {
  const from =
    process.env.SMTP_FROM?.trim() || process.env.SMTP_USER?.trim();
  if (!from) return "";
  const name = process.env.SMTP_FROM_NAME?.trim();
  return name ? `${name} <${from}>` : from;
}

export function buildSubject(data: ContactPayload): string {
  if (data.subject?.trim()) {
    return `New inquiry — ${data.subject.trim()}`;
  }
  if (data.name?.trim()) {
    return `New inquiry from ${data.name.trim()}`;
  }
  return "New website inquiry";
}

const BRAND = {
  name: "Rich Haven Artificial Garden",
  site: "https://www.richhaven.net",
  forest: "#2d4a27",
  deep: "#1a2e16",
  sage: "#8fa882",
  cream: "#f7f7f5",
  paper: "#ffffff",
  text: "#1c1e19",
  muted: "#6b7060",
  faint: "#a8ad9e",
  border: "#e4e6df",
} as const;

const FONT =
  "'DM Sans', 'Segoe UI', Helvetica, Arial, sans-serif";
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function displayValue(value: string | undefined): string {
  const trimmed = value?.trim();
  return trimmed ? escapeHtml(trimmed) : "—";
}

function formatSentAt(): string {
  return new Intl.DateTimeFormat("en-PH", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Manila",
  }).format(new Date());
}

export function buildText(data: ContactPayload): string {
  const divider = "─".repeat(48);
  return [
    BRAND.name.toUpperCase(),
    "New inquiry from your website",
    divider,
    "",
    `Name     ${data.name?.trim() || "—"}`,
    `Email    ${data.email}`,
    `Phone    ${data.phone?.trim() || "—"}`,
    `Message  ${data.message}`,
    "",
    divider,
    `Received ${formatSentAt()}`,
    `Reply directly to this email to reach ${data.email}.`,
    BRAND.site,
  ].join("\n");
}

export function buildHtml(data: ContactPayload): string {
  const name = displayValue(data.name);
  const email = escapeHtml(data.email ?? "");
  const phone = displayValue(data.phone);
  const message = escapeHtml(data.message ?? "").replace(/\n/g, "<br />");
  const sentAt = escapeHtml(formatSentAt());

  const fieldRow = (label: string, valueHtml: string) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${BRAND.border};vertical-align:top;width:108px">
        <p style="margin:0;font-family:${FONT};font-size:11px;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.muted}">${label}</p>
      </td>
      <td style="padding:14px 0 14px 20px;border-bottom:1px solid ${BRAND.border};vertical-align:top">
        <p style="margin:0;font-family:${FONT};font-size:15px;line-height:1.5;color:${BRAND.text}">${valueHtml}</p>
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="${FONT_URL}" rel="stylesheet" />
  <title>New website inquiry</title>
</head>
<body style="margin:0;padding:0;font-family:${FONT};background-color:${BRAND.cream};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${BRAND.cream}">
    <tr>
      <td align="center" style="padding:40px 16px">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background-color:${BRAND.paper};border:1px solid ${BRAND.border};border-radius:2px;overflow:hidden">
          <!-- Header -->
          <tr>
            <td style="background-color:${BRAND.deep};padding:36px 40px 32px;text-align:center">
              <h1 style="margin:0;font-family:${FONT};font-size:26px;font-weight:500;line-height:1.25;color:#ffffff;letter-spacing:0.02em">${escapeHtml(BRAND.name)}</h1>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="48" align="center" style="margin:20px auto 0">
                <tr><td style="height:1px;background-color:${BRAND.sage};font-size:0;line-height:0">&nbsp;</td></tr>
              </table>
            </td>
          </tr>
          <!-- Intro -->
          <tr>
            <td style="padding:32px 40px 8px">
              <p style="margin:0;font-family:${FONT};font-size:15px;line-height:1.65;color:${BRAND.muted}">
                A visitor has submitted your contact form. Details are below—reply to this email to respond directly to the sender.
              </p>
            </td>
          </tr>
          <!-- Details -->
          <tr>
            <td style="padding:16px 40px 36px">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                ${fieldRow("Name", name)}
                ${fieldRow("Email", `<a href="mailto:${email}" style="color:${BRAND.forest};text-decoration:none;font-weight:500">${email}</a>`)}
                ${fieldRow("Phone", phone)}
                ${fieldRow("Message", message || "—")}
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:${BRAND.cream};border-top:1px solid ${BRAND.border};padding:24px 40px;text-align:center">
              <p style="margin:0 0 6px;font-family:${FONT};font-size:12px;line-height:1.5;color:${BRAND.faint}">Received ${sentAt}</p>
              <p style="margin:0;font-family:${FONT};font-size:13px;color:${BRAND.muted}">
                <a href="${BRAND.site}" style="color:${BRAND.forest};text-decoration:none;font-family:${FONT}">${BRAND.site.replace(/^https?:\/\//, "")}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
export async function sendContactEmail(data: ContactPayload): Promise<void> {
  const transport = getTransporter();
  const to = getContactToAddress();
  const from = getFromAddress();

  if (!transport || !to || !from) {
    throw new Error("Email is not configured on the server.");
  }

  await transport.sendMail({
    from,
    to,
    replyTo: data.email,
    subject: buildSubject(data),
    text: buildText(data),
    html: buildHtml(data),
  });
}
