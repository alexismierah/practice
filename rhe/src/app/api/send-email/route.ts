import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const TO =
  process.env.CONTACT_TO_EMAIL ??
  process.env.CONTACT_EMAIL ??
  "richavenartificial2014@gmail.com";

const FROM_ADDRESS =
  process.env.RESEND_FROM?.trim() || "onboarding@resend.dev";

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
    `Subject: ${data.subject?.trim() || "—"}`,
    "",
    data.message,
  ].join("\n");
}

function buildHtml(data: ContactPayload): string {
  const row = (label: string, value: string) =>
    `<tr>
      <td style="padding:6px 16px 6px 0;color:#666;font-weight:600;white-space:nowrap;vertical-align:top">${label}</td>
      <td style="padding:6px 0">${value}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#222;background:#fff">
  <h2 style="margin:0 0 24px;font-size:20px;color:#111">New contact message</h2>
  <table style="border-collapse:collapse;margin-bottom:24px;width:100%">
    ${row("Name", data.name?.trim() || "—")}
    ${row("Email", `<a href="mailto:${data.email}" style="color:#2563eb">${data.email}</a>`)}
    ${row("Phone", data.phone?.trim() || "—")}
    ${row("Subject", data.subject?.trim() || "—")}
  </table>
  <div style="background:#f5f5f5;border-radius:8px;padding:20px;white-space:pre-wrap;line-height:1.6;font-size:15px">${data.message}</div>
</body>
</html>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
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

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: `Rich Haven <${FROM_ADDRESS}>`,
    to: [TO],
    replyTo: data.email,
    subject: buildSubject(data),
    text: buildText(data),
    html: buildHtml(data),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
