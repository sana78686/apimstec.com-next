'use client'

import Link from 'next/link'
import { useTranslation } from '@/i18n/useTranslation'
import { usePathLang } from '@/hooks/usePathLang'
import '@/components/compress/HomePage.css'

/** Marketing home (replace with full corporate sections from apimstec-react when ready). */
export default function ApimstecHomeClient() {
  const lang = usePathLang()
  const t = useTranslation(lang)

  return (
    <div className="home-page">
      <main
        id="main-content-inner"
        className="main main--landing"
        style={{ padding: '2rem clamp(1rem, 4vw, 2rem)', maxWidth: 1200, margin: '0 auto' }}
      >
        <h1 className="landing-upload-h1">{t('seoHeroH1')}</h1>
        <p style={{ color: 'var(--text-secondary, #555)', marginBottom: '2rem', lineHeight: 1.5 }}>
          {t('subtitle')}
        </p>
        <nav className="header-primary-links" aria-label="Site">
          <Link href="/blog">{t('footerBlog')}</Link>
          <Link href="/contact">{t('footerContact')}</Link>
        </nav>
      </main>
    </div>
  )
}
