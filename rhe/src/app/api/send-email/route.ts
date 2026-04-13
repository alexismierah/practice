import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

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

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `Website contact${data.name ? `: ${data.name}` : ""}`,
    text: [
      `Name: ${data.name ?? "—"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone ?? "—"}`,
      "",
      data.message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
