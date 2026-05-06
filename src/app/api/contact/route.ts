import { NextResponse } from 'next/server'
import { sendContactNotification } from '@/lib/mail/contactEmail'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const o = body as Record<string, unknown>
  const accepts_terms = o.accepts_terms === true

  if (!accepts_terms) {
    return NextResponse.json({ error: 'You must accept the terms and privacy policy' }, { status: 400 })
  }

  const nameStr = typeof o.name === 'string' ? o.name.trim() : ''
  const emailStr = typeof o.email === 'string' ? o.email.trim() : ''
  const subjectStr = typeof o.subject === 'string' ? o.subject.trim() : ''
  const messageStr = typeof o.message === 'string' ? o.message.trim() : ''

  if (!nameStr || nameStr.length > 200) {
    return NextResponse.json({ error: 'Please enter your name' }, { status: 400 })
  }
  if (!emailStr || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr) || emailStr.length > 254) {
    return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 })
  }
  if (!subjectStr || subjectStr.length > 300) {
    return NextResponse.json({ error: 'Please choose a subject' }, { status: 400 })
  }
  if (!messageStr || messageStr.length > 20000) {
    return NextResponse.json({ error: 'Please enter a message' }, { status: 400 })
  }

  try {
    await sendContactNotification({
      name: nameStr,
      email: emailStr,
      subject: subjectStr,
      message: messageStr,
      accepts_terms: true,
    })
  } catch (err) {
    console.error('[api/contact]', err)
    const dev = process.env.NODE_ENV === 'development'
    const msg = err instanceof Error ? err.message : 'Send failed'
    return NextResponse.json(
      { error: dev ? msg : 'Could not send your message. Please try again later.' },
      { status: 503 },
    )
  }

  return NextResponse.json({ ok: true })
}
