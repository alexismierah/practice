import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'

export function getSmtpConfig(): SMTPTransport.Options | null {
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!user || !pass) {
    return null
  }

  const host = process.env.SMTP_HOST || 'smtpout.secureserver.net'
  const port = Number(process.env.SMTP_PORT || '465')
  const secure =
    process.env.SMTP_SECURE === 'true'
      ? true
      : process.env.SMTP_SECURE === 'false'
        ? false
        : port === 465

  return {
    host,
    port,
    secure,
    auth: { user, pass },
  }
}

export function createMailTransporter() {
  const config = getSmtpConfig()
  if (!config) {
    return null
  }
  return nodemailer.createTransport(config)
}

function getEmailDomain(email: string): string {
  const at = email.lastIndexOf('@')
  return at === -1 ? '' : email.slice(at + 1).toLowerCase()
}

/** GoDaddy requires MAIL FROM to match the authenticated SMTP account domain. */
export function getAuthorizedFromEmail(): string | null {
  const authEmail = process.env.SMTP_USER?.trim()
  if (!authEmail) {
    return null
  }

  const configuredFrom = process.env.FROM_EMAIL?.trim()
  if (
    configuredFrom &&
    getEmailDomain(configuredFrom) === getEmailDomain(authEmail)
  ) {
    return configuredFrom
  }

  return authEmail
}

export function getFromAddress(): string | null {
  const email = getAuthorizedFromEmail()
  if (!email) {
    return null
  }
  const displayName =
    process.env.SMTP_FROM_NAME?.trim() || 'Unifix ICT Solutions'
  return `"${displayName}" <${email}>`
}
