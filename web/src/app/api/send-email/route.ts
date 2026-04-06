import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9+\-\s()]+$/
  return phoneRegex.test(phone) || phone === ""
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All required fields must be filled: name, email, and message' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const submittedAt = new Date().toLocaleString('en-PH', {
      timeZone: 'Asia/Manila',
      dateStyle: 'long',
      timeStyle: 'short',
    })

    const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Quote Request</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#0d1117;border-radius:16px 16px 0 0;padding:36px 40px 32px;">
              <div style="font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#3a89dd;margin-bottom:8px;">
                New Enquiry
              </div>
              <div style="font-family:Georgia,serif;font-size:26px;color:#ffffff;">
                Quote Request Received
              </div>
            </td>
          </tr>

          <!-- Accent -->
          <tr>
            <td style="background:#3a89dd;height:3px;"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">

              <p style="font-size:15px;color:#4a5568;line-height:1.7;margin-bottom:24px;">
                A new quote request has been submitted. Details are below:
              </p>

              <p style="margin:0 0 12px;">
                <strong>Name:</strong><br/>
                ${name}
              </p>

              <p style="margin:0 0 12px;">
                <strong>Email:</strong><br/>
                <a href="mailto:${email}" style="color:#3a89dd;text-decoration:none;">
                  ${email}
                </a>
              </p>

              <p style="margin:0 0 12px;">
                <strong>Contact:</strong><br/>
                ${phone || 'Not provided'}
              </p>

              <p style="margin:0 0 24px;">
                <strong>Message:</strong><br/>
                <span style="white-space:pre-wrap;">${message}</span>
              </p>

              <a href="mailto:${email}?subject=Re: Your Quote Request"
                style="display:inline-block;background:#3a89dd;color:#ffffff;padding:12px 24px;border-radius:8px;text-decoration:none;">
                Reply to ${name}
              </a>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;padding:24px 40px;border-radius:0 0 16px 16px;">
              <div style="font-size:12px;color:#718096;">
                Submitted on <strong>${submittedAt}</strong> (PHT)
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
    `.trim()

    const mailOptions = {
      from: `"Unifix ICT Solutions Website" <${process.env.FROM_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: htmlBody,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}