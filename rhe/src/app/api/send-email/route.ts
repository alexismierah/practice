import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

function getContactToEmail(): string | undefined {
  return (
    process.env.CONTACT_TO_EMAIL?.trim() ||
    process.env.CONTACT_EMAIL?.trim() ||
    process.env.SMTP_FROM?.trim() ||
    process.env.SMTP_USER?.trim()
  );
}

function getFromAddress(): string {
  const address = process.env.SMTP_FROM?.trim() || process.env.SMTP_USER?.trim();
  if (!address) return "hello@richhaven.net";

  const name = process.env.SMTP_FROM_NAME?.trim();
  return name ? `${name} <${address}>` : address;
}

function buildSubject(data: ContactPayload): string {
  if (data.subject?.trim()) return `Website contact: ${data.subject.trim()}`;
  if (data.name?.trim()) return `Website contact: ${data.name.trim()}`;
  return "Website contact";
}

function buildText(data: ContactPayload): string {
  return [
    `Name:    ${data.name?.trim() || "—"}`,
    `Email:   ${data.email}`,
    `Phone:   ${data.phone?.trim() || "—"}`,
    `Message: ${data.message?.trim() || "—"}`,
    "",
    `Received: ${formatTimestamp()}`,
  ].join("\n");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatTimestamp(): string {
  return new Date().toLocaleString("en-PH", {
    timeZone: "Asia/Manila",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function buildHtml(data: ContactPayload): string {
  const name = escapeHtml(data.name?.trim() || "—");
  const email = escapeHtml(data.email?.trim() || "");
  const phone = escapeHtml(data.phone?.trim() || "—");
  const message = escapeHtml(data.message?.trim() || "—").replace(/\n/g, "<br>");
  const timestamp = escapeHtml(formatTimestamp());

  const field = (label: string, value: string) => `
    <tr>
      <td style="padding:0 0 14px;width:110px;font-size:11px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#8fa882;vertical-align:top;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">${label}</td>
      <td style="padding:0 0 14px;font-size:15px;line-height:1.5;color:#1c1e19;vertical-align:top;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:#efefef;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#efefef;padding:40px 16px">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e6de">
          <tr>
            <td style="background:#2d4a27;padding:28px 32px">
              <p style="margin:0 0 4px;font-size:11px;font-weight:500;letter-spacing:0.22em;text-transform:uppercase;color:#8fa882;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Rich Haven Artificial Garden</p>
              <h1 style="margin:0;font-size:22px;font-weight:500;color:#ffffff;letter-spacing:-0.01em;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">New contact inquiry</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px">
              <p style="margin:0 0 24px;font-size:14px;line-height:1.6;color:#6b7060;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">Someone submitted the contact form on your website.</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${field("Name", name)}
                ${field("Email", `<a href="mailto:${email}" style="color:#2d4a27;text-decoration:none;font-weight:500">${email}</a>`)}
                ${field("Phone", phone)}
                ${field("Message", message)}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;border-top:1px solid #e2e6de;background:#fafafa">
              <p style="margin:0 0 8px;font-size:12px;line-height:1.6;color:#a8ad9e;text-align:center;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
                Received ${timestamp}
              </p>
              <p style="margin:0;font-size:12px;line-height:1.6;color:#a8ad9e;text-align:center;font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
                Sent from the contact form at
                <a href="https://www.richhaven.net" style="color:#6b7060;text-decoration:none">richhaven.net</a>
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

export async function POST(request: Request) {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;

  const to = getContactToEmail();
  if (!host || !user || !pass || !to) {
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const data = body as ContactPayload;
  if (!data.email?.trim() || !data.message?.trim()) {
    return NextResponse.json(
      { error: "email and message are required." },
      { status: 400 }
    );
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const secure = process.env.SMTP_SECURE === "true";

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: getFromAddress(),
      to,
      replyTo: data.email.trim(),
      subject: buildSubject(data),
      text: buildText(data),
      html: buildHtml(data),
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send email.";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
