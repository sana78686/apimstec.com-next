'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslation } from '@/i18n/useTranslation'
import { usePathLang } from '@/hooks/usePathLang'
import type { CorporateHomeCard, CorporateHomeFaqItem } from '@/lib/corporateHomeServerData'
import LandingBelowFold from '@/components/marketing/LandingBelowFold'
import '@/styles/HomePage.css'
import '@/styles/CorporateHomePage.css'

type Props = {
  initialCmsHtml?: string
  initialLandingFaq?: CorporateHomeFaqItem[]
  initialLandingCards?: CorporateHomeCard[]
  initialCardsTitle?: string
}

/**
 * Corporate landing — apimstec-react parity.
 * CMS copy is server-fetched in `page.tsx` and passed in for View Source; FAQ uses local state for expand/collapse only.
 */
export default function ApimstecHomeClient({
  initialCmsHtml = '',
  initialLandingFaq = [],
  initialLandingCards = [],
  initialCardsTitle = '',
}: Props) {
  const lang = usePathLang()
  const t = useTranslation(lang)
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  const faqItems =
    initialLandingFaq.length > 0
      ? initialLandingFaq
          .map((item) => ({
            q: item.question ?? item.q ?? '',
            a: item.answer ?? item.a ?? '',
          }))
          .filter((x) => x.q || x.a)
      : []

  const base = ''

  const features = [
    {
      to: `${base}/services`,
      title: t('corporate.feature1Title'),
      body: t('corporate.feature1Body'),
    },
    {
      to: `${base}/hosting`,
      title: t('corporate.feature2Title'),
      body: t('corporate.feature2Body'),
    },
    {
      to: `${base}/solutions`,
      title: t('corporate.feature3Title'),
      body: t('corporate.feature3Body'),
    },
  ]

  return (
    <div className="corporate-home">
      <section className="corporate-home-hero" aria-labelledby="corporate-home-heading">
        <div className="corporate-home-hero-bg" aria-hidden="true" />
        <div className="corporate-home-hero-content">
          <p className="corporate-home-eyebrow">{t('corporate.homeEyebrow')}</p>
          <h1 id="corporate-home-heading" className="corporate-home-title">
            {t('corporate.homeHeroTitle')}
          </h1>
          <p className="corporate-home-subtitle">{t('corporate.homeHeroSubtitle')}</p>
          <div className="corporate-home-cta-row">
            <Link href={`${base}/contact`} className="corporate-home-btn corporate-home-btn--primary">
              {t('corporate.ctaContact')}
            </Link>
            <Link href={`${base}/services`} className="corporate-home-btn corporate-home-btn--ghost">
              {t('corporate.ctaPlatform')}
            </Link>
          </div>
        </div>
      </section>

      <section className="corporate-home-features" aria-labelledby="corporate-features-heading">
        <div className="corporate-home-features-inner">
          <h2 id="corporate-features-heading" className="corporate-home-features-title">
            {t('corporate.featuresHeading')}
          </h2>
          <ul className="corporate-home-feature-grid">
            {features.map((f) => (
              <li key={f.to}>
                <Link href={f.to} className="corporate-home-feature-card">
                  <span className="corporate-home-feature-card-title">{f.title}</span>
                  <span className="corporate-home-feature-card-body">{f.body}</span>
                  <span className="corporate-home-feature-card-cta">{t('corporate.featureCta')}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="corporate-home-cms-stack">
        <LandingBelowFold
          t={t}
          homeContent={initialCmsHtml}
          faqItems={faqItems}
          faqOpenIndex={faqOpenIndex}
          setFaqOpenIndex={setFaqOpenIndex}
          cards={initialLandingCards}
          showHowSection={false}
          cardsTitle={initialCardsTitle}
          variant="corporate"
        />
      </div>
    </div>
  )
}
