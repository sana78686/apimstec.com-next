/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/role-has-required-aria-props -- footer lang menu mirrors apimstec-react */
'use client'

import { useState, useRef, useEffect } from 'react'
import { supportedLangs, langOptions } from '@/i18n/translations'
import { SUPPORT_EMAIL, resolveContactAddress, resolveContactPhones, telHrefFromDisplay } from '@/config/site'
import { ucWords } from '@/utils/ucWords'
import type { CmsNavTreeNode } from '@/components/site/cmsNavTypes'
import './Footer.css'

const LOGO_WHITE = '/logos/apims-logo.webp'
const LOGO_FALLBACK = '/logos/apimstec.png'

const FOOTER_FACEBOOK_URL = 'https://www.facebook.com/ApimsTec/'
const FOOTER_LINKEDIN_URL = 'https://www.linkedin.com/company/apims-tec/?originalSubdomain=pk'
const FOOTER_WHATSAPP_URL = 'https://wa.me/923012775034'

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
  const displayFooterAddress = resolveContactAddress(c.contact_address)
  const footerPhones = resolveContactPhones(c.contact_phone)

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
                <a href="/services">{t('nav.platform')}</a>
                <a href="/marketplace">{t('nav.marketplace')}</a>
                <a href="/hosting">{t('nav.hosting')}</a>
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
              <h3 className="footer-group-title">{t('footerSectionHosting')}</h3>
              <nav className="footer-stack-nav" aria-label={t('footerSectionHosting')}>
                <a href="/hosting">{t('nav.hosting')}</a>
                <a href="/hosting/wordpress-hosting">WordPress hosting</a>
                <a href="/hosting/web-hosting">Web hosting</a>
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
              <p className="footer-contact-line">
                <span className="footer-contact-kicker">{t('contact.address')}: </span>
                {displayFooterAddress}
              </p>
              {footerPhones.map((phoneDisplay) => {
                const tel = telHrefFromDisplay(phoneDisplay)
                return (
                  <p key={phoneDisplay} className="footer-contact-line">
                    <span className="footer-contact-kicker">{t('contact.phone')}: </span>
                    {tel ? (
                      <a href={tel} className="footer-contact-link">
                        {phoneDisplay}
                      </a>
                    ) : (
                      phoneDisplay
                    )}
                  </p>
                )
              })}
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
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <span className="footer-social-icon">𝕏</span>
                </a> */}
                <a href={FOOTER_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <span className="footer-social-icon">in</span>
                </a>
                <a href={FOOTER_FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span className="footer-social-icon">f</span>
                </a>
                <a href={FOOTER_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg
                    className="footer-social-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                  </svg>
                </a>
                {/* <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <span className="footer-social-icon">▶</span>
                </a> */}
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
