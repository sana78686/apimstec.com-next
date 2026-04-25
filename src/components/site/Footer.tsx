/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/role-has-required-aria-props -- footer lang menu mirrors apimstec-react */
'use client'

import { useState, useRef, useEffect } from 'react'
import { supportedLangs, langOptions } from '@/i18n/translations'
import { SUPPORT_EMAIL } from '@/config/site'
import { ucWords } from '@/utils/ucWords'
import type { CmsNavTreeNode } from '@/components/site/cmsNavTypes'
import './Footer.css'

const LOGO_WHITE = '/logos/apims-logo.webp'
const LOGO_FALLBACK = '/logos/apimstec.png'

function emailsDiffer(a: string | undefined, b: string | undefined) {
  const x = String(a || '')
    .trim()
    .toLowerCase()
  const y = String(b || '')
    .trim()
    .toLowerCase()
  return x !== '' && y !== '' && x !== y
}

type TFn = (key: string, params?: Record<string, string | number>) => string

type FooterProps = {
  lang: string
  t: TFn
  footerNavTree?: CmsNavTreeNode[]
  contact?: Record<string, unknown> | null
}

/** NETSOL-style multi-column footer — apimstec-react parity. */
export default function Footer({ lang, t, footerNavTree = [], contact = null }: FooterProps) {
  const [langOpen, setLangOpen] = useState(false)
  const [logoOk, setLogoOk] = useState(true)
  const langRef = useRef<HTMLDivElement | null>(null)
  const showLangSwitcher = supportedLangs.length > 1

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    if (langOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [langOpen])

  const langPrefix = supportedLangs.includes(lang) ? lang : 'en'
  const hasCmsColumns = Array.isArray(footerNavTree) && footerNavTree.length > 0

  const c = contact ?? {}
  const cmsEmailRaw = typeof c.contact_email === 'string' ? c.contact_email.trim() : ''
  const showOfficeEmail = emailsDiffer(cmsEmailRaw, SUPPORT_EMAIL)
  const addrRaw = typeof c.contact_address === 'string' ? c.contact_address.trim() : ''
  const displayFooterAddress = addrRaw || t('footerAddressPlaceholder')
  const phoneRaw = typeof c.contact_phone === 'string' ? c.contact_phone.trim() : ''
  const telHref = phoneRaw.replace(/[^\d+]/g, '') ? `tel:${phoneRaw.replace(/[^\d+]/g, '')}` : ''

  return (
    <footer className="footer footer--dark">
      <div className="footer-inner">
        <div className="footer-grid-netsol">
          <div className="footer-col footer-col--brand">
            <a href="/" className="footer-logo-link" aria-label={t('nav.home')}>
              <img
                className="footer-logo-white"
                src={logoOk ? LOGO_WHITE : LOGO_FALLBACK}
                alt=""
                width={180}
                height={56}
                decoding="async"
                onError={() => setLogoOk(false)}
              />
            </a>
            <nav className="footer-stack-nav" aria-label={t('footerCompany')}>
              <a href="/about">{t('footerWhyApimsTec')}</a>
              <a href="/about/careers">{t('corporate.footerCareers')}</a>
              <a href="/contact">{t('footerContact')}</a>
            </nav>
            <div className="footer-group">
              <h3 className="footer-group-title">{t('footerInvestors')}</h3>
              <nav className="footer-stack-nav" aria-label={t('footerInvestors')}>
                <a href="/about/news">{t('corporate.footerNews')}</a>
                <a href="/page/investors">{t('footerCompanyInfo')}</a>
              </nav>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-group">
              <h3 className="footer-group-title">{t('footerSectionProducts')}</h3>
              <nav className="footer-stack-nav" aria-label={t('footerSectionProducts')}>
                <a href="/platform">{t('nav.platform')}</a>
                <a href="/marketplace">{t('nav.marketplace')}</a>
                <a href="/consultancy">{t('nav.consultancy')}</a>
                <a href="/solutions">{t('nav.solutions')}</a>
                <a href="/insights">{t('nav.insights')}</a>
              </nav>
            </div>
            <div className="footer-group">
              <h3 className="footer-group-title">{t('footerSectionMarketplace')}</h3>
              <nav className="footer-stack-nav" aria-label={t('footerSectionMarketplace')}>
                <a href="/blog">{t('footerBlog')}</a>
                <a href="/insights">{t('nav.insights')}</a>
                <a href="/contact">{t('footerContact')}</a>
              </nav>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-group">
              <h3 className="footer-group-title">{t('footerSectionConsultancy')}</h3>
              <nav className="footer-stack-nav" aria-label={t('footerSectionConsultancy')}>
                <a href="/consultancy">{t('nav.consultancy')}</a>
                <a href="/solutions">{t('nav.solutions')}</a>
                <a href="/platform">{t('nav.platform')}</a>
              </nav>
            </div>
            <div className="footer-group">
              <h3 className="footer-group-title">{t('footerSectionInsights')}</h3>
              <nav className="footer-stack-nav" aria-label={t('footerSectionInsights')}>
                <a href="/insights">{t('footerCaseStudies')}</a>
                <a href="/blog">{t('footerGuides')}</a>
                <a href="/blog">{t('footerBlog')}</a>
                <a href="/insights">{t('footerEvents')}</a>
              </nav>
            </div>
          </div>

          <div className="footer-col footer-col--contact">
            <div className="footer-group">
              <h3 className="footer-group-title">{t('footerSectionSolutions')}</h3>
              <nav className="footer-stack-nav" aria-label={t('footerSectionSolutions')}>
                <a href="/solutions">{t('footerSolutionAuto')}</a>
                <a href="/solutions">{t('footerSolutionEquipment')}</a>
                <a href="/solutions">{t('footerSolutionBanking')}</a>
              </nav>
            </div>
            <div className="footer-group footer-group--contact-block">
              <h3 className="footer-group-title">{t('footerContact')}</h3>
              <p className="footer-contact-label">{t('footerHeadquarters')}</p>
              <p className="footer-contact-line">
                <span className="footer-contact-kicker">{t('contact.address')}: </span>
                {displayFooterAddress}
              </p>
              {phoneRaw ? (
                <p className="footer-contact-line">
                  <span className="footer-contact-kicker">{t('contact.phone')}: </span>
                  {telHref ? (
                    <a href={telHref} className="footer-contact-link">
                      {phoneRaw}
                    </a>
                  ) : (
                    phoneRaw
                  )}
                </p>
              ) : null}
              <p className="footer-contact-line">
                <span className="footer-contact-kicker">{t('contact.email')}: </span>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="footer-contact-link">
                  {SUPPORT_EMAIL}
                </a>
              </p>
              {showOfficeEmail ? (
                <p className="footer-contact-line">
                  <span className="footer-contact-kicker">{t('contact.officeEmail')}: </span>
                  <a href={`mailto:${cmsEmailRaw}`} className="footer-contact-link">
                    {cmsEmailRaw}
                  </a>
                </p>
              ) : null}
              <p className="footer-connect-label">{t('footerConnect')}</p>
              <nav className="footer-social" aria-label="Social links">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <span className="footer-social-icon">𝕏</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <span className="footer-social-icon">in</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span className="footer-social-icon">f</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <span className="footer-social-icon">▶</span>
                </a>
              </nav>
            </div>
          </div>
        </div>

        {hasCmsColumns ? (
          <div className="footer-cms-row" aria-label="Additional links">
            <div className="footer-cms-grid">
              {footerNavTree.map((root) => (
                <div key={root.id} className="footer-col footer-col--cms">
                  <h3 className="footer-group-title">{ucWords(root.title)}</h3>
                  {root.children && root.children.length > 0
                    ? root.children.map((c) => (
                        <a key={c.id} href={`/page/${c.slug}`}>
                          {ucWords(c.title)}
                        </a>
                      ))
                    : (
                        <a href={`/page/${root.slug}`}>{ucWords(root.title)}</a>
                      )}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="footer-divider" />

        <div className="footer-bottom-netsol">
          <div className="footer-bottom-left">
            {showLangSwitcher ? (
              <div className="footer-lang-wrap" ref={langRef}>
                <button
                  type="button"
                  className="footer-lang-btn"
                  onClick={() => setLangOpen((o) => !o)}
                  aria-expanded={langOpen}
                  aria-haspopup="listbox"
                  aria-label="Select language"
                >
                  <span className="footer-lang-icon" aria-hidden>
                    🌐
                  </span>
                  <span>{langOptions[langPrefix as keyof typeof langOptions]?.label || t('footerLanguage')}</span>
                  <span className="footer-lang-chevron" aria-hidden>
                    ▼
                  </span>
                </button>
                {langOpen && (
                  <ul className="footer-lang-menu" role="listbox">
                    {supportedLangs.map((l) => (
                      <li key={l} role="option">
                        <span className="footer-lang-item">
                          {langOptions[l as keyof typeof langOptions]?.label || l.toUpperCase()}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
            <p className="footer-copy-netsol">{t('footerCopyright')}</p>
          </div>
          <nav className="footer-legal-netsol" aria-label="Legal">
            <a href="/page/terms">{t('footerTerms')}</a>
            <span className="footer-legal-sep" aria-hidden>
              |
            </span>
            <a href="/page/privacy">{t('footerPrivacy')}</a>
            <span className="footer-legal-sep" aria-hidden>
              |
            </span>
            <a href="/page/human-rights">{t('footerHumanRights')}</a>
            <span className="footer-legal-sep" aria-hidden>
              |
            </span>
            <a href="/page/modern-slavery">{t('footerModernSlavery')}</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
