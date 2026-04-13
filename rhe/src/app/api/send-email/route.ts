import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

/** Domains Resend will not accept as `from` without verification (use onboarding@resend.dev instead). */
const PUBLIC_INBOX_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "proton.me",
  "protonmail.com",
  "aol.com",
]);

function addressFromFromHeader(from: string): string {
  const angle = from.match(/<([^>]+)>/);
  return (angle ? angle[1] : from).trim().toLowerCase();
}

function isPublicInboxFrom(from: string): boolean {
  const domain = addressFromFromHeader(from).split("@")[1];
  if (!domain) return false;
  if (PUBLIC_INBOX_DOMAINS.has(domain)) return true;
  return domain === "yahoo.com" || domain.startsWith("yahoo.");
}

/**
 * Resend requires a verified domain for custom `from` addresses.
 * Until you add one, use their sandbox sender (see Resend Next.js docs).
 * Set RESEND_FROM when you have a verified domain (e.g. noreply@yourdomain.com).
 */
function resolveResendFrom(): string {
  const verified = process.env.RESEND_FROM?.trim();
  if (verified) return verified;

  const configured =
    process.env.CONTACT_FROM_EMAIL?.trim() ??
    process.env.FROM_EMAIL?.trim() ??
    "";

  if (configured && !isPublicInboxFrom(configured)) {
    return configured;
  }

  const fallback =
    process.env.RESEND_ONBOARDING_FROM?.trim() ||
    "Rich Haven <onboarding@resend.dev>";
  return fallback;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = resolveResendFrom();
  const to = process.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
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
  if (
    typeof data.email !== "string" ||
    typeof data.message !== "string" ||
    !data.email.trim() ||
    !data.message.trim()
  ) {
    return NextResponse.json(
      { error: "email and message are required." },
      { status: 400 }
    );
  }

  const subjectLine =
    typeof data.subject === "string" && data.subject.trim()
      ? `Website contact: ${data.subject.trim()}`
      : `Website contact${data.name?.trim() ? `: ${data.name.trim()}` : ""}`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: subjectLine,
    text: [
      `Name: ${data.name?.trim() || "—"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone?.trim() || "—"}`,
      `Subject: ${typeof data.subject === "string" && data.subject.trim() ? data.subject.trim() : "—"}`,
      "",
      data.message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
