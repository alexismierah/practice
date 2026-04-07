import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Field validations with specific errors
    if (!name?.trim()) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      )
    }

    if (!email?.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!message?.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
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

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Timestamp for email
    const submittedAt = new Date().toLocaleString('en-PH', {
      timeZone: 'Asia/Manila',
      dateStyle: 'long',
      timeStyle: 'short',
    })

    // HTML email body
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
        <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; padding:24px; border:1px solid #e5e7eb;">
          <h2 style="margin-bottom:16px; color:#111827;">New Quote Request</h2>

          <div style="margin-bottom:16px;">
            <p style="margin:0; font-size:14px; color:#6b7280;">Full Name</p>
            <p style="margin:4px 0 0; font-size:16px; font-weight:600;">${name}</p>
          </div>

          <div style="margin-bottom:16px;">
            <p style="margin:0; font-size:14px; color:#6b7280;">Email</p>
            <p style="margin:4px 0 0; font-size:16px;">
              <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">${email}</a>
            </p>
          </div>

          <div style="margin-bottom:16px;">
            <p style="margin:0; font-size:14px; color:#6b7280;">Contact Number</p>
            <p style="margin:4px 0 0; font-size:16px;">${phone || 'Not provided'}</p>
          </div>

          <div style="margin-bottom:20px;">
            <p style="margin:0; font-size:14px; color:#6b7280;">Message</p>
            <p style="margin:6px 0 0; font-size:15px; line-height:1.6; white-space:pre-wrap;">${message}</p>
          </div>

          <hr style="border:none; border-top:1px solid #e5e7eb; margin:20px 0;" />
          <p style="font-size:12px; color:#9ca3af;">Submitted on ${submittedAt} (PHT)</p>
        </div>
      </div>
    `

    // Email options
    const mailOptions = {
      from: `"Unifix ICT Solutions" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // send to yourself
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: htmlBody,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

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