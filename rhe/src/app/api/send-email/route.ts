import { NextResponse } from "next/server";
import {
  isEmailConfigured,
  sendContactEmail,
  type ContactPayload,
} from "@/lib/email";

export async function POST(request: Request) {
  if (!isEmailConfigured()) {
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

  try {
    await sendContactEmail(data);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to send email.";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
