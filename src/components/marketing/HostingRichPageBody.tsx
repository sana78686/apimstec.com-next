'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { HostingFaqItem, HostingHeroTone, HostingRichContent } from '@/lib/hostingRichPageContent'
import { SITE_OFFICE_HOURS_LINES } from '@/config/site'

export type HostingNavItem = { slug: string; title: string }

function faqAnswerLetter(answer: string): string {
  const m = /[a-zA-Z]/.exec(answer)
  return (m ? m[0] : 'A').toUpperCase()
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  )
}

const EMOJI: Record<HostingHeroTone, string> = {
  web: '🌐',
  cloud: '☁️',
  vps: '🖥️',
  wordpress: '⚙️',
}

function HostingHeroVisual({ tone }: { tone: HostingHeroTone }) {
  return (
    <div className={`solution-detail-hero-visual solution-detail-hero-visual--hosting-${tone}`} aria-hidden>
      <span className="solution-detail-hero-visual-emoji">{EMOJI[tone]}</span>
    </div>
  )
}

type Props = {
  content: HostingRichContent
  navItems: HostingNavItem[]
  relatedSectionTitle: string
  currentSlug: string
  pageTitle: string
}

export default function HostingRichPageBody({
  content,
  navItems,
  relatedSectionTitle,
  currentSlug,
  pageTitle,
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const safeSlug = currentSlug.replace(/[^a-z0-9-]/gi, '')
  const faqHeadingId = `hosting-rich-faq-${safeSlug}`
  const ctaHeadingId = `hosting-rich-cta-${safeSlug}`

  return (
    <div className="solution-detail-main-wrap">
      <div className="solution-detail-layout">
        <div className="solution-detail-primary">
          <HostingHeroVisual tone={content.heroTone} />

          <h2 className="solution-detail-body-title">{pageTitle}</h2>
          <p className="solution-detail-lead">{content.lead}</p>

          <ul className="solution-detail-features">
            {content.features.map((text) => (
              <li key={text}>
                <span className="solution-detail-check" aria-hidden>
                  ✓
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <div className="solution-detail-thumbs">
            <div className="solution-detail-thumb solution-detail-thumb--apps">
              <div className="solution-detail-thumb-inner" aria-hidden>
                {content.thumbLeft}
              </div>
            </div>
            <div className="solution-detail-thumb solution-detail-thumb--data">
              <div className="solution-detail-thumb-inner" aria-hidden>
                {content.thumbRight}
              </div>
            </div>
          </div>
        </div>

        <aside className="solution-detail-sidebar" aria-label="Hosting plans menu">
          <div className="solution-detail-sidebar-inner">
            <div className="solution-detail-card">
              <h3 className="solution-detail-card-title">{relatedSectionTitle}</h3>
              <ul className="solution-detail-nav-list">
                {navItems.map((item) => {
                  const active = item.slug === currentSlug
                  return (
                    <li key={item.slug} className="solution-detail-nav-item">
                      <Link
                        href={`/hosting/${item.slug}`}
                        className={`solution-detail-nav-link ${active ? 'solution-detail-nav-link--active' : ''}`}
                      >
                        <span>{item.title}</span>
                        <span className="solution-detail-nav-arrow" aria-hidden>
                          ↗
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="solution-detail-card">
              <h3 className="solution-detail-card-title">Working hours</h3>
              <div className="solution-detail-hours-rows">
                {SITE_OFFICE_HOURS_LINES.map((line) => (
                  <div key={line} className="solution-detail-hours-row">
                    <span className="solution-detail-hours-icon">
                      <ClockIcon />
                    </span>
                    <span className="solution-detail-hours-text">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <section className="solution-detail-faq" aria-labelledby={faqHeadingId}>
        <h2 id={faqHeadingId} className="solution-detail-faq-title">
          Frequently asked questions
        </h2>
        <div className="solution-detail-faq-list">
          {content.faq.map((item: HostingFaqItem, i: number) => {
            const open = openFaq === i
            return (
              <div
                key={item.q}
                className={`solution-detail-faq-item ${open ? 'solution-detail-faq-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="solution-detail-faq-trigger"
                  aria-expanded={open}
                  aria-controls={`hosting-faq-panel-${safeSlug}-${i}`}
                  id={`hosting-faq-q-${safeSlug}-${i}`}
                  onClick={() => setOpenFaq((prev) => (prev === i ? null : i))}
                >
                  <span>{item.q}</span>
                  <span className="solution-detail-faq-toggle" aria-hidden>
                    {open ? '−' : '+'}
                  </span>
                </button>
                {open ? (
                  <div
                    id={`hosting-faq-panel-${safeSlug}-${i}`}
                    role="region"
                    aria-labelledby={`hosting-faq-q-${safeSlug}-${i}`}
                    className="solution-detail-faq-panel"
                  >
                    <span className="solution-detail-faq-letter">{faqAnswerLetter(item.a)}.</span>
                    <p className="solution-detail-faq-answer">{item.a}</p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </section>

      <section className="solution-detail-cta" aria-labelledby={ctaHeadingId}>
        <h2 id={ctaHeadingId} className="solution-detail-cta-title">
          How can we help you?
        </h2>
        <p className="solution-detail-cta-sub">
          Tell Apimstec what you need on the contact page—traffic estimates, migrations, or SSL—and we reply with one clear next step.
        </p>
        <Link href="/contact" className="solution-detail-cta-btn">
          Contact us
        </Link>
      </section>
    </div>
  )
}
