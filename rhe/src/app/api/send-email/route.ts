import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? process.env.FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL ?? process.env.CONTACT_EMAIL;

  if (!apiKey || !from || !to) {
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
