'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/i18n/useTranslation'
import { getContactSettings, submitContactForm } from '@/lib/cms-client'
import JsonLd from '@/components/JsonLd'
import ContactHeroClient from '@/components/marketing/ContactHeroClient'
import { getPreferredLang, supportedLangs, langPrefix } from '@/i18n/translations'
import { usePathLang } from '@/hooks/usePathLang'
import { SUPPORT_EMAIL, resolveContactAddress, resolveContactPhones, telHrefFromDisplay } from '@/config/site'
import '@/styles/ContactPage.css'

const CONTACT_SUBJECT_DEFAULT = 'Website contact form'

export default function ContactPageClient() {
  const lang = usePathLang()
  const t = useTranslation(lang)
  const localeForApi = supportedLangs.includes(lang) ? lang : getPreferredLang()
  const [settings, setSettings] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [sentSummary, setSentSummary] = useState(null)
  const [formError, setFormError] = useState('')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    accepts_terms: false,
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    setLoading(true)
    setError(null)
    getContactSettings(localeForApi)
      .then(setSettings)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [localeForApi])

  function contactDetailsVisible(s) {
    if (!s || typeof s !== 'object') return false
    const e = String(s.contact_email ?? '').trim() || SUPPORT_EMAIL
    const p = resolveContactPhones(s.contact_phone)
    const a = resolveContactAddress(s.contact_address)
    return Boolean(e || p.length || a)
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setFormError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.accepts_terms) {
      setFormError(t('contact.errorTerms'))
      return
    }
    const firstName = form.firstName.trim()
    const lastName = form.lastName.trim()
    if (!firstName || !lastName) {
      setFormError(t('contact.errorBothNames'))
      return
    }
    const fullName = `${firstName} ${lastName}`.trim()
    setFormError('')
    setSubmitting(true)
    try {
      const email = form.email.trim()
      const phone = form.phone.trim()
      const message = form.message.trim()
      const bodyParts = []
      if (phone) bodyParts.push(`Phone: ${phone}`)
      bodyParts.push(message)
      const composedMessage = bodyParts.join('\n\n')
      await submitContactForm(
        {
          name: fullName.slice(0, 200),
          email,
          subject: CONTACT_SUBJECT_DEFAULT,
          message: composedMessage,
          accepts_terms: true,
        },
        localeForApi,
      )
      setSentSummary({
        firstName,
        lastName,
        email,
        phone,
        message,
      })
      setSubmitSuccess(true)
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        accepts_terms: false,
      })
    } catch (err) {
      const msg = err.message || t('contact.errorSend')
      setFormError(msg)
    } finally {
      setSubmitting(false)
    }
  }

  const lp = langPrefix(lang)
  const emailDisplay = String(settings?.contact_email ?? '').trim() || SUPPORT_EMAIL
  const phones = settings ? resolveContactPhones(settings.contact_phone) : []
  const addressLine = settings ? resolveContactAddress(settings.contact_address) : ''

  if (loading) {
    return (
      <div className="contact-page">
        <p className="contact-page-loading wrap">Loading…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="contact-page">
        <p className="contact-page-error wrap">{error}</p>
        <Link href={`${lp}/`} className="contact-page-back wrap">
          ← {t('contact.backHome')}
        </Link>
      </div>
    )
  }

  return (
    <article className="contact-page contact-page--split">
      <JsonLd data={settings?.json_ld} />
      <div className="contact-page-shell contact-page-shell--hero-flush">
        <ContactHeroClient title={t('contact.title')} subtitle={t('contact.intro')} crumbPath="/contact" />
      </div>

      <div className="contact-page-board">
        <div className="contact-page-shell contact-page-shell--board">
          <div className="contact-page-grid contact-page-grid--split">
            <div className="contact-page-sidebar">
              <h2 className="contact-sidebar-heading">{t('contact.detailsHeading')}</h2>
              {contactDetailsVisible(settings) ? (
                <ul className="contact-info-rows">
                  {phones.length > 0
                    ? phones.map((phoneDisplay) => (
                        <li key={phoneDisplay} className="contact-info-row">
                          <span className="contact-info-icon contact-info-icon--phone" aria-hidden>
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                              />
                            </svg>
                          </span>
                          <div>
                            <span className="contact-info-label">{t('contact.phone')}</span>
                            <a className="contact-info-value" href={telHrefFromDisplay(phoneDisplay)}>
                              {phoneDisplay}
                            </a>
                          </div>
                        </li>
                      ))
                    : null}
                  <li className="contact-info-row">
                    <span className="contact-info-icon contact-info-icon--mail" aria-hidden>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z M4 8l8 5 8-5" />
                      </svg>
                    </span>
                    <div>
                      <span className="contact-info-label">{t('contact.email')}</span>
                      <a className="contact-info-value" href={`mailto:${emailDisplay}`}>
                        {emailDisplay}
                      </a>
                    </div>
                  </li>
                  {addressLine ? (
                    <li className="contact-info-row">
                      <span className="contact-info-icon contact-info-icon--pin" aria-hidden>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
                          <circle cx="12" cy="11" r="2.5" />
                        </svg>
                      </span>
                      <div>
                        <span className="contact-info-label">{t('contact.address')}</span>
                        <span className="contact-info-value contact-info-value--multiline">{addressLine}</span>
                      </div>
                    </li>
                  ) : null}
                </ul>
              ) : (
                <p className="contact-page-no-details">{t('contact.noDetails')}</p>
              )}

              <div className="contact-why-block">
                <h3 className="contact-why-heading">Why choose Apimstec</h3>
                <ul className="contact-why-list">
                  <li>Innovation-first engineering without buzzword fog</li>
                  <li>Security-aware workflows—from apps to hosting handoffs</li>
                  <li>Quality checkpoints before releases hit real users</li>
                  <li>Responsive support when production timelines tighten</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-card">
              {submitSuccess ? (
                <div className="contact-form-success" role="status">
                  <p className="contact-form-success-text">{t('contact.successMessage')}</p>
                  {sentSummary && (
                    <dl className="contact-form-sent-summary">
                      <div className="contact-form-sent-row">
                        <dt>Name</dt>
                        <dd>{[sentSummary.firstName, sentSummary.lastName].filter(Boolean).join(' ') || '—'}</dd>
                      </div>
                      <div className="contact-form-sent-row">
                        <dt>{t('contact.yourEmail')}</dt>
                        <dd>{sentSummary.email}</dd>
                      </div>
                      {sentSummary.phone ? (
                        <div className="contact-form-sent-row">
                          <dt>{t('contact.phone')}</dt>
                          <dd>{sentSummary.phone}</dd>
                        </div>
                      ) : null}
                      <div className="contact-form-sent-row">
                        <dt>{t('contact.message')}</dt>
                        <dd className="contact-form-sent-message">{sentSummary.message}</dd>
                      </div>
                    </dl>
                  )}
                  <button
                    type="button"
                    className="contact-form-success-again"
                    onClick={() => {
                      setSubmitSuccess(false)
                      setSentSummary(null)
                    }}
                  >
                    {t('contact.sendAnother')}
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="contact-form-card-title">Let&apos;s connect!</h2>
                  <p className="contact-form-card-sub">Do you have any questions? Feel free to contact us.</p>
                  <form className="contact-form contact-form--card" onSubmit={handleSubmit} noValidate>
                    <div className="contact-form-row contact-form-row--half">
                      <div className="contact-form-field">
                        <label className="contact-form-label" htmlFor="contact-first-name">
                          First name <span className="contact-form-required">*</span>
                        </label>
                        <input
                          id="contact-first-name"
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          className="contact-form-input"
                          placeholder="First name"
                          autoComplete="given-name"
                        />
                      </div>
                      <div className="contact-form-field">
                        <label className="contact-form-label" htmlFor="contact-last-name">
                          Last name <span className="contact-form-required">*</span>
                        </label>
                        <input
                          id="contact-last-name"
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          className="contact-form-input"
                          placeholder="Last name"
                          autoComplete="family-name"
                        />
                      </div>
                    </div>
                    <div className="contact-form-field">
                      <label className="contact-form-label" htmlFor="contact-email">
                        {t('contact.yourEmail')} <span className="contact-form-required">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="contact-form-input"
                        placeholder={t('contact.yourEmail')}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="contact-form-field">
                      <label className="contact-form-label" htmlFor="contact-phone">
                        Phone number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="contact-form-input"
                        placeholder="Phone number"
                        autoComplete="tel"
                      />
                    </div>
                    <div className="contact-form-field">
                      <label className="contact-form-label" htmlFor="contact-message">
                        {t('contact.message')} <span className="contact-form-required">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="contact-form-textarea"
                        placeholder={t('contact.writeMessage')}
                        required
                        rows={5}
                      />
                    </div>
                    <div className="contact-form-row contact-form-consent">
                      <label className="contact-form-checkbox-label">
                        <input
                          type="checkbox"
                          name="accepts_terms"
                          checked={form.accepts_terms}
                          onChange={handleChange}
                          className="contact-form-checkbox"
                        />
                        <span>
                          I agree to the{' '}
                          <Link href={`${lp}/legal/terms`} className="contact-form-legal-link">
                            {t('contact.termsAndConditions')}
                          </Link>{' '}
                          and{' '}
                          <Link href={`${lp}/legal/privacy-policy`} className="contact-form-legal-link">
                            {t('contact.legalPrivacy')}
                          </Link>
                          .
                        </span>
                      </label>
                    </div>
                    {formError ? (
                      <p className="contact-form-error" role="alert">
                        {formError}
                      </p>
                    ) : null}
                    <button type="submit" className="contact-form-submit" disabled={submitting}>
                      {submitting ? 'Sending…' : t('contact.sendMessage')}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="contact-page-shell">
        <footer className="contact-page-footer">
          <Link href={`${lp}/`} className="contact-page-back">
            ← {t('contact.backHome')}
          </Link>
        </footer>
      </div>
    </article>
  )
}
