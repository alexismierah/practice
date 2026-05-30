export type QuoteRequestPayload = {
  name?: string
  email?: string
  phone?: string
  message?: string
  submittedAt: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function display(value: string | undefined, fallback = 'Not provided'): string {
  const trimmed = value?.trim()
  return escapeHtml(trimmed || fallback)
}

function row(label: string, valueHtml: string): string {
  return `
    <tr>
      <td style="padding:12px 16px; font-size:11px; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; color:#6b7280; background:#f9fafb; border-bottom:1px solid #e5e7eb; width:34%; vertical-align:top;">
        ${label}
      </td>
      <td style="padding:12px 16px; font-size:14px; color:#111827; border-bottom:1px solid #e5e7eb; vertical-align:top; line-height:1.5;">
        ${valueHtml}
      </td>
    </tr>
  `
}

export function buildQuoteRequestEmail(payload: QuoteRequestPayload) {
  const { name, email, phone, message, submittedAt } = payload
  const clientName = display(name, 'Not provided')
  const clientEmail = email?.trim()
  const clientPhone = display(phone, 'Not provided')
  const inquiry = display(message, 'Not provided')
  const referenceId = `QR-${Date.now().toString(36).toUpperCase()}`

  const emailCell = clientEmail
    ? `<a href="mailto:${escapeHtml(clientEmail)}" style="color:#2a78cc; text-decoration:none;">${escapeHtml(clientEmail)}</a>`
    : 'Not provided'

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Quote Request — Unifix ICT Solutions</title>
</head>
<body style="margin:0; padding:0; background-color:#eef1f5; font-family:Georgia, 'Times New Roman', Times, serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef1f5; padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff; border:1px solid #d1d5db; border-radius:4px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background-color:#111827; padding:28px 32px; border-bottom:4px solid #3a89dd;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <p style="margin:0 0 4px; font-family:Arial, Helvetica, sans-serif; font-size:20px; font-weight:700; color:#ffffff; letter-spacing:-0.02em;">
                      Unifix ICT Solutions
                    </p>
                    <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:11px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:#7a92ad;">
                      Website Quote Request Notification
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 32px 24px; font-family:Arial, Helvetica, sans-serif;">
              <p style="margin:0 0 8px; font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:#3a89dd;">
                Reference: ${referenceId}
              </p>
              <p style="margin:0 0 20px; font-size:15px; line-height:1.7; color:#374151;">
                Dear Team,
              </p>
              <p style="margin:0 0 24px; font-size:15px; line-height:1.7; color:#374151;">
                A prospective client has submitted a quote request through the company website.
                Please review the inquiry details below and follow up at your earliest convenience.
              </p>

              <p style="margin:0 0 10px; font-family:Arial, Helvetica, sans-serif; font-size:12px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; color:#111827;">
                Client Information
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb; border-radius:4px; overflow:hidden; margin-bottom:24px;">
                ${row('Full Name', `<strong style="font-weight:600;">${clientName}</strong>`)}
                ${row('Email Address', emailCell)}
                ${row('Contact Number', clientPhone)}
                ${row('Inquiry', `<span style="white-space:pre-wrap;">${inquiry}</span>`)}
              </table>

              <p style="margin:0; font-size:13px; line-height:1.6; color:#6b7280;">
                <strong style="color:#374151;">Date &amp; time received:</strong> ${escapeHtml(submittedAt)} (Philippine Standard Time)
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px 28px; background-color:#f9fafb; border-top:1px solid #e5e7eb; font-family:Arial, Helvetica, sans-serif;">
              <p style="margin:0; font-size:11px; line-height:1.5; color:#9ca3af;">
                Unifix ICT Solutions by Rich Haven Enterprises (RHE) · Est. 2014<br />
                Email: hello@unifixictsolutions.com · Tel: (02) 8294 0531 · Mobile: +63 936 496 8421
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()

  const text = `
UNIFIX ICT SOLUTIONS
Website Quote Request Notification
Reference: ${referenceId}

Dear Team,

A prospective client has submitted a quote request through the company website.
Please review the inquiry details below and follow up at your earliest convenience.

CLIENT INFORMATION
------------------
Full Name:        ${name?.trim() || 'Not provided'}
Email Address:    ${clientEmail || 'Not provided'}
Contact Number:   ${phone?.trim() || 'Not provided'}
Inquiry:          ${message?.trim() || 'Not provided'}

Date & time received: ${submittedAt} (Philippine Standard Time)

---
Unifix ICT Solutions by Rich Haven Enterprises (RHE) · Est. 2014
hello@unifixictsolutions.com · (02) 8294 0531 · +63 936 496 8421
  `.trim()

  const subjectName = name?.trim() || 'Website Inquiry'
  const subject = `Quote Request — ${subjectName} | Unifix ICT Solutions`

  return { html, text, subject, referenceId }
}
