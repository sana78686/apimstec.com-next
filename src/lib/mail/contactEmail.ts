import nodemailer from 'nodemailer'

export type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
  accepts_terms: boolean
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendContactNotification(payload: ContactPayload): Promise<void> {
  const host = process.env.SMTP_HOST?.trim()
  const port = Number.parseInt(String(process.env.SMTP_PORT || '465'), 10)
  const user = process.env.SMTP_USER?.trim()
  const pass = process.env.SMTP_PASS ?? ''
  const to = (process.env.CONTACT_MAIL_TO || 'info@apimstec.com').trim()
  const from = (process.env.CONTACT_MAIL_FROM || 'no-reply@apimstec.com').trim()

  if (!host || !user || !pass) {
    throw new Error('SMTP is not configured (SMTP_HOST, SMTP_USER, SMTP_PASS)')
  }

  const secureEnv = process.env.SMTP_SECURE
  const secure = secureEnv === 'true' || (secureEnv !== 'false' && port === 465)

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    ...(process.env.SMTP_TLS_REJECT_UNAUTHORIZED === 'false'
      ? { tls: { rejectUnauthorized: false as const } }
      : {}),
  })

  const { name, email, subject, message } = payload
  const text = [`New message from ${name} <${email}>`, `Subject: ${subject}`, '', message].join('\n')

  const html = `
    <p><strong>From:</strong> ${escapeHtml(name)} &lt;<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>&gt;</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <hr />
    <pre style="white-space:pre-wrap;font-family:system-ui,sans-serif;font-size:14px;line-height:1.5">${escapeHtml(message)}</pre>
  `.trim()

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject: `[Apimstec contact] ${subject}`,
    text,
    html,
  })
}
