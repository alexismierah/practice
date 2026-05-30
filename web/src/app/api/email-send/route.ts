import { NextRequest, NextResponse } from 'next/server'
import {
  createMailTransporter,
  getAuthorizedFromEmail,
  getFromAddress,
} from '@/lib/mail'
import { buildQuoteRequestEmail } from '@/lib/quote-request-email'

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9+\-\s()]+$/
  return phoneRegex.test(phone) || phone === ''
}

export async function POST(request: NextRequest) {
  try {
    const transporter = createMailTransporter()
    if (!transporter) {
      return NextResponse.json(
        { error: 'Missing SMTP_USER or SMTP_PASS configuration' },
        { status: 500 }
      )
    }

    const from = getFromAddress()
    if (!from) {
      return NextResponse.json(
        { error: 'Missing FROM_EMAIL or SMTP_USER configuration' },
        { status: 500 }
      )
    }

    const { name, email, phone, message } = await request.json()

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL
    if (!toEmail) {
      return NextResponse.json(
        { error: 'Missing CONTACT_TO_EMAIL configuration' },
        { status: 500 }
      )
    }

    const submittedAt = new Date().toLocaleString('en-PH', {
      timeZone: 'Asia/Manila',
      dateStyle: 'long',
      timeStyle: 'short',
    })

    const { html, text, subject } = buildQuoteRequestEmail({
      name,
      email,
      phone,
      message,
      submittedAt,
    })

    const visitorLabel = (name || email || 'Website visitor').toString().trim()
    const fromEmail = getAuthorizedFromEmail()!

    await transporter.sendMail({
      from,
      to: toEmail,
      envelope: {
        from: fromEmail,
        to: toEmail,
      },
      replyTo: email ? `"${visitorLabel}" <${email}>` : undefined,
      subject,
      html,
      text,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('EMAIL ERROR:', error)
    const message =
      error instanceof Error ? error.message : 'Failed to send email'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
