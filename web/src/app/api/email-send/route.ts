import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone format (optional field)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9+\-\s()]+$/
  return phoneRegex.test(phone) || phone === ""
}

function getDomain(email: string): string {
  const atIndex = email.lastIndexOf("@")
  return atIndex === -1 ? "" : email.slice(atIndex + 1).toLowerCase()
}

export async function POST(request: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      return NextResponse.json(
        { error: 'Missing RESEND_API_KEY configuration' },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)
    const { name, email, phone, message } = await request.json()

    // Optional: only validate email format if email is provided
    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Optional: only validate phone format if phone is provided
    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    const submittedAt = new Date().toLocaleString('en-PH', {
      timeZone: 'Asia/Manila',
      dateStyle: 'long',
      timeStyle: 'short',
    })

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; padding:24px; border:1px solid #e5e7eb;">
          <h2 style="margin-bottom:16px; color:#111827;">New Quote Request</h2>

          <div style="margin-bottom:16px;">
            <p style="margin:0; font-size:14px; color:#6b7280;">Full Name</p>
            <p style="margin:4px 0 0; font-size:16px; font-weight:600;">${name || 'Not provided'}</p>
          </div>

          <div style="margin-bottom:16px;">
            <p style="margin:0; font-size:14px; color:#6b7280;">Email</p>
            <p style="margin:4px 0 0; font-size:16px;">
              ${email ? `<a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">${email}</a>` : 'Not provided'}
            </p>
          </div>

          <div style="margin-bottom:16px;">
            <p style="margin:0; font-size:14px; color:#6b7280;">Contact Number</p>
            <p style="margin:4px 0 0; font-size:16px;">${phone || 'Not provided'}</p>
          </div>

          <div style="margin-bottom:20px;">
            <p style="margin:0; font-size:14px; color:#6b7280;">Message</p>
            <p style="margin:6px 0 0; font-size:15px; line-height:1.6; white-space:pre-wrap;">${message || 'Not provided'}</p>
          </div>

          <hr style="border:none; border-top:1px solid #e5e7eb; margin:20px 0;" />
          <p style="font-size:12px; color:#9ca3af;">Submitted on ${submittedAt} (PHT)</p>
        </div>
      </div>
    `

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL
    const configuredFromEmail =
      process.env.RESEND_FROM_EMAIL ||
      process.env.FROM_EMAIL ||
      'onboarding@resend.dev'
    const restrictedDomains = new Set([
      'gmail.com',
      'yahoo.com',
      'hotmail.com',
      'outlook.com',
      'icloud.com',
    ])
    const fromEmail = restrictedDomains.has(getDomain(configuredFromEmail))
      ? 'onboarding@resend.dev'
      : configuredFromEmail

    if (!toEmail) {
      return NextResponse.json(
        { error: 'Missing CONTACT_TO_EMAIL configuration' },
        { status: 500 }
      )
    }

    const senderDisplayName = (name || email || 'Website Inquiry').toString().trim()

    const { error } = await resend.emails.send({
      from: `${senderDisplayName}<${fromEmail}>`,
      to: toEmail,
      replyTo: email || undefined,
      subject: `New Quote Request`,
      html: htmlBody,
    })

    if (error) {
      console.error('RESEND ERROR:', error)
      return NextResponse.json(
        { error: error.message || 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('EMAIL ERROR:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}