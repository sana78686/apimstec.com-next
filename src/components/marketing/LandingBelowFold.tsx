'use client'

import Link from 'next/link'
import type { Dispatch, SetStateAction } from 'react'
import { absolutizeCmsHtml } from '@/utils/cmsAssetUrl'
import { isInternalAppHref, parseHomeCardBody, splitFaqQuestion } from '@/utils/landingContentParse'
import type { CorporateHomeCard } from '@/lib/corporateHomeServerData'

type TFn = (key: string, params?: Record<string, string | number>) => string

export type HomeLandingCard = CorporateHomeCard & {
  id?: string | number
  title?: string
  description?: string
  icon?: string
}

type FaqItem = { q: string; a: string }

const CARD_ICON_EMOJI: Record<string, string> = {
  lightning: '⚡',
  quality: '🎚️',
  lock: '🔒',
  star: '✨',
  document: '📄',
  shield: '🛡️',
  heart: '❤️',
  cloud: '☁️',
  download: '⬇️',
  upload: '⬆️',
  check: '✅',
  image: '🖼️',
  'file-plus': '📎',
  layers: '📑',
  sparkle: '✨',
  zap: '⚡',
  settings: '⚙️',
  globe: '🌐',
  mobile: '📱',
  clock: '⏱️',
}

type Props = {
  t: TFn
  homeContent?: string
  faqItems: FaqItem[]
  faqOpenIndex: number | null
  setFaqOpenIndex: Dispatch<SetStateAction<number | null>>
  cards?: HomeLandingCard[]
  showHowSection?: boolean
  cardsTitle?: string
  variant?: 'default' | 'corporate'
}

/**
 * Below-the-fold landing content (home rich text, FAQ, feature cards) — apimstec-react parity.
 */
export default function LandingBelowFold({
  t,
  homeContent = '',
  faqItems,
  faqOpenIndex,
  setFaqOpenIndex,
  cards = [],
  showHowSection = true,
  cardsTitle,
  variant = 'default',
}: Props) {
  const cardEmoji = (iconKey: string | undefined) => CARD_ICON_EMOJI[iconKey ?? ''] ?? '✨'
  const hasHomeContent = typeof homeContent === 'string' && homeContent.trim().length > 0
  const isCorporate = variant === 'corporate'

  const homeBlock = hasHomeContent ? (
    <section className="landing-section landing-home-content" aria-label="Home page content">
      <div className="landing-home-content-body" dangerouslySetInnerHTML={{ __html: homeContent }} />
    </section>
  ) : null

  const cardsHeading = cardsTitle?.trim()
    ? cardsTitle.trim()
    : (isCorporate ? t('corporate.homeCardsTitle') : t('landing.featuresTitle'))

  const cardsBlock = cards.length > 0 ? (
    <section
      className={isCorporate ? 'landing-section landing-features landing-features--corporate-cards' : 'landing-section landing-features'}
      aria-labelledby="landing-features-heading"
    >
      <h2
        id="landing-features-heading"
        className={isCorporate ? 'landing-section-title landing-section-title--corporate-cards landing-section-title--corporate-serif' : 'landing-section-title'}
      >
        {cardsHeading}
      </h2>
      <div className={isCorporate ? 'landing-cards landing-cards--corporate landing-cards--corporate-etsy' : 'landing-cards'}>
        {cards.map((card, cardIndex) => {
          const parsed = parseHomeCardBody(String(card.description ?? ''))
          const hasLinks = parsed.links.length > 0
          const bodyText = hasLinks ? parsed.intro : parsed.intro || String(card.description || '').trim()

          return (
            <div
              key={String(card.id ?? `card-${cardIndex}`)}
              className={['landing-card', isCorporate ? 'landing-card--corporate-shell landing-card--corporate-etsy' : ''].filter(Boolean).join(' ')}
            >
              <span
                className={isCorporate ? 'landing-card-icon landing-card-icon--corporate' : 'landing-card-icon'}
                aria-hidden="true"
              >
                {cardEmoji(card.icon)}
              </span>
              {isCorporate ? (
                <div className="landing-card-etsy-main">
                  <h3 className="landing-card-title">{card.title}</h3>
                  {bodyText ? <p className="landing-card-desc landing-card-desc--etsy">{bodyText}</p> : null}
                  {hasLinks ? (
                    <ul className="landing-card-etsy-links">
                      {parsed.links.map((link: { label: string; href: string }, li: number) => (
                        <li key={`${String(card.id)}-${li}`}>
                          {isInternalAppHref(link.href) ? (
                            <Link href={link.href}>{link.label}</Link>
                          ) : (
                            <a
                              href={link.href}
                              target={link.href.startsWith('http') ? '_blank' : undefined}
                              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {link.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <>
                  <h3 className="landing-card-title">{card.title}</h3>
                  <p className="landing-card-desc">{card.description || ''}</p>
                </>
              )}
            </div>
          )
        })}
      </div>
    </section>
  ) : null

  const faqBlock = faqItems.length > 0 ? (
    <section
      className={isCorporate ? 'landing-section landing-faq landing-faq--corporate' : 'landing-section landing-faq'}
      aria-labelledby="landing-faq-heading"
      id={isCorporate ? 'landing-faq' : undefined}
    >
      <h2
        id="landing-faq-heading"
        className={isCorporate ? 'landing-section-title landing-section-title--corporate-faq landing-section-title--corporate-serif' : 'landing-section-title'}
      >
        {isCorporate ? t('corporate.faqSectionTitle') : t('landing.faqTitle')}
      </h2>
      {isCorporate ? (
        <div className="landing-faq-etsy-grid" role="list">
          {faqItems.map((item, i) => {
            const open = faqOpenIndex === i
            const { category, title } = splitFaqQuestion(item.q)
            return (
              <div
                key={i}
                className={`landing-faq-etsy-item ${open ? 'landing-faq-etsy-item--open' : ''}`}
                role="listitem"
              >
                {category ? <span className="landing-faq-etsy-cat">{category}</span> : null}
                <button
                  type="button"
                  className="landing-faq-etsy-trigger"
                  onClick={() => setFaqOpenIndex((prev) => (prev === i ? null : i))}
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="landing-faq-etsy-title">{title}</span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="landing-faq-etsy-panel"
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  hidden={!open}
                >
                  <div
                    className="landing-faq-etsy-panel-inner landing-faq-answer-html"
                    dangerouslySetInnerHTML={{ __html: absolutizeCmsHtml(String(item.a || '')) }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="landing-faq-grid" role="list">
          {faqItems.map((item, i) => (
            <div key={i} className={`landing-faq-card ${faqOpenIndex === i ? 'landing-faq-card--open' : ''}`} role="listitem">
              <button
                type="button"
                className="landing-faq-card-head"
                onClick={() => setFaqOpenIndex((prev) => (prev === i ? null : i))}
                aria-expanded={faqOpenIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span className="landing-faq-card-q">{item.q}</span>
                <span className="landing-faq-chevron" aria-hidden="true">{faqOpenIndex === i ? '−' : '+'}</span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className="landing-faq-card-body"
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={faqOpenIndex !== i}
              >
                <div
                  className="landing-faq-answer-html"
                  dangerouslySetInnerHTML={{ __html: absolutizeCmsHtml(String(item.a || '')) }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  ) : null

  const howBlock = showHowSection ? (
    <section className="landing-section landing-how" aria-labelledby="landing-how-heading">
      <h2 id="landing-how-heading" className="landing-section-title">{t('landing.howTitle')}</h2>
      <div className="landing-steps">
        <div className="landing-step">
          <span className="landing-step-num" aria-hidden="true">1</span>
          <h3 className="landing-step-title">{t('landing.howStep1')}</h3>
          <p className="landing-step-desc">{t('landing.howStep1Desc')}</p>
        </div>
        <div className="landing-step">
          <span className="landing-step-num" aria-hidden="true">2</span>
          <h3 className="landing-step-title">{t('landing.howStep2')}</h3>
          <p className="landing-step-desc">{t('landing.howStep2Desc')}</p>
        </div>
        <div className="landing-step">
          <span className="landing-step-num" aria-hidden="true">3</span>
          <h3 className="landing-step-title">{t('landing.howStep3')}</h3>
          <p className="landing-step-desc">{t('landing.howStep3Desc')}</p>
        </div>
      </div>
    </section>
  ) : null

  if (isCorporate) {
    return (
      <div className="landing-below-fold landing-below-fold--corporate">
        {homeBlock}
        {cardsBlock}
        {faqBlock}
        {howBlock}
      </div>
    )
  }

  return (
    <>
      {homeBlock}
      {faqBlock}
      {cardsBlock}
      {howBlock}
    </>
  )
}
