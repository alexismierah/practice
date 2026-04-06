import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation function
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9+\-\s()]+$/
  return phoneRegex.test(phone) || phone === ""
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'All required fields must be filled: name, email, and message' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate phone format (if provided)
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
                <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td>
                    <div style="font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#3a89dd;margin-bottom:8px;">
                        New Enquiry
                    </div>
                    <div style="font-family:Georgia,serif;font-size:26px;font-weight:400;color:#ffffff;line-height:1.2;letter-spacing:-0.02em;">
                        Quote Request Received
                    </div>
                    </td>
                </tr>
                </table>
            </td>
            </tr>

          <!-- Divider accent -->
          <tr>
            <td style="background:#3a89dd;height:3px;"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px;">

              <p style="margin:0 0 24px;font-size:15px;color:#4a5568;line-height:1.7;font-weight:300;">
                A new quote request has been submitted through your website contact form. Details are below.
              </p>

              <!-- Info cards -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">

                <!-- Name -->
                <tr>
                  <td style="padding-bottom:12px;">
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="background:#f8fafc;border:1px solid rgba(13,17,23,0.08);border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:16px 20px;border-left:3px solid #3a89dd;">
                          <div style="font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#718096;margin-bottom:4px;">Full Name</div>
                          <div style="font-size:16px;font-weight:500;color:#0d1117;">${name}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding-bottom:12px;">
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="background:#f8fafc;border:1px solid rgba(13,17,23,0.08);border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:16px 20px;border-left:3px solid #3a89dd;">
                          <div style="font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#718096;margin-bottom:4px;">Email Address</div>
                          <div style="font-size:16px;font-weight:500;color:#0d1117;">
                            <a href="mailto:${email}" style="color:#3a89dd;text-decoration:none;">${email}</a>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="padding-bottom:12px;">
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="background:#f8fafc;border:1px solid rgba(13,17,23,0.08);border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:16px 20px;border-left:3px solid #3a89dd;">
                          <div style="font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#718096;margin-bottom:4px;">Contact Number</div>
                          <div style="font-size:16px;font-weight:500;color:#0d1117;">${phone || 'Not provided'}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0"
                      style="background:#f8fafc;border:1px solid rgba(13,17,23,0.08);border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:16px 20px;border-left:3px solid #3a89dd;">
                          <div style="font-size:10px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#718096;margin-bottom:8px;">Message</div>
                          <div style="font-size:15px;font-weight:300;color:#2d3748;line-height:1.75;white-space:pre-wrap;">${message}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${email}?subject=Re: Your Quote Request"
                      style="display:inline-block;background:#3a89dd;color:#ffffff;padding:13px 28px;border-radius:9px;
                             font-size:14px;font-weight:500;text-decoration:none;letter-spacing:0.03em;">
                      Reply to ${name} 
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8fafc;border:1px solid rgba(13,17,23,0.06);border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-size:12px;color:#a0aec0;line-height:1.6;">
                      Submitted on <strong style="color:#718096;">${submittedAt}</strong> (PHT)<br/>
                      This email was sent automatically from your website contact form.
                    </div>
                  </td>
                  <td align="right">
                    <div style="font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#cbd5e0;">
                      Tech Company
                    </div>
                  </td>
                </tr>
              </table>
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