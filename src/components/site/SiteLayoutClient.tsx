/* eslint-disable @next/next/no-html-link-for-pages -- internal nav matches apimstec-react (<a href>) */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/i18n/useTranslation'
import { defaultLang, supportedLangs, langOptions } from '@/i18n/translations'
import { getPages, getContactSettings } from '@/lib/cms-client'
import { ucWords } from '@/utils/ucWords'
import { getCorporateSection } from '@/config/corporateMenuContent'
import MobileNav from '@/components/site/MobileNav'
import Breadcrumbs from '@/components/site/Breadcrumbs'
import type { CmsNavPage, CmsNavTreeNode } from '@/components/site/cmsNavTypes'
import Footer from '@/components/site/Footer'
import CorporateMegaMenu from '@/components/site/CorporateMegaMenu'
import '@/styles/HomePage.css'
import '@/styles/CorporateMegaMenu.css'

function pathMatchesSection(pathname: string, sectionKey: string) {
  const data = getCorporateSection(defaultLang, sectionKey)
  if (!data?.basePath) return false
  const p = `/${data.basePath}`
  return pathname === p || pathname.startsWith(`${p}/`)
}

type Props = {
  children: React.ReactNode
}

export default function SiteLayoutClient({ children }: Props) {
  const lang = defaultLang
  const showLangSwitcher = supportedLangs.length > 1
  const pathname = usePathname() || '/'
  const t = useTranslation(lang)
  const [cmsPages, setCmsPages] = useState<CmsNavPage[]>([])
  const [contactSnapshot, setContactSnapshot] = useState<Record<string, unknown> | null>(null)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [corporateMegaKey, setCorporateMegaKey] = useState<string | null>(null)
  const [cmsDropdownOpenId, setCmsDropdownOpenId] = useState<number | null>(null)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const langDropdownRef = useRef<HTMLDivElement>(null)
  const cmsDropdownRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  const headerPages = cmsPages.filter(
    (p) => !p.placement || p.placement === 'header' || p.placement === 'both',
  )
  const footerPages = cmsPages.filter(
    (p) => !p.placement || p.placement === 'footer' || p.placement === 'both',
  )

  const headerNavTree = useMemo((): CmsNavTreeNode[] => {
    const roots = headerPages
      .filter((p) => !p.parent_id)
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
    return roots.map((root) => ({
      ...root,
      children: headerPages
        .filter((p) => p.parent_id === root.id)
        .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)),
    }))
  }, [headerPages])

  const footerNavTree = useMemo((): CmsNavTreeNode[] => {
    const roots = footerPages
      .filter((p) => !p.parent_id)
      .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
    return roots.map((root) => ({
      ...root,
      children: footerPages
        .filter((p) => p.parent_id === root.id)
        .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0)),
    }))
  }, [footerPages])

  useEffect(() => {
    if (typeof document !== 'undefined' && lang) {
      document.documentElement.lang = lang
    }
  }, [lang])

  useEffect(() => {
    if (!lang) return undefined
    let cancelled = false
    getPages(lang)
      .then((res: { pages?: CmsNavPage[] }) => {
        if (!cancelled) setCmsPages(res.pages || [])
      })
      .catch(() => {
        if (!cancelled) setCmsPages([])
      })
    return () => {
      cancelled = true
    }
  }, [lang])

  useEffect(() => {
    if (!lang) return undefined
    let cancelled = false
    getContactSettings(lang)
      .then((data) => {
        if (!cancelled) setContactSnapshot(data && typeof data === 'object' ? (data as Record<string, unknown>) : {})
      })
      .catch(() => {
        if (!cancelled) setContactSnapshot({})
      })
    return () => {
      cancelled = true
    }
  }, [lang])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false)
      }
      if (cmsDropdownRef.current && !cmsDropdownRef.current.contains(e.target as Node)) {
        setCmsDropdownOpenId(null)
      }
      if (corporateMegaKey && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setCorporateMegaKey(null)
      }
    }
    if (langDropdownOpen || corporateMegaKey != null || cmsDropdownOpenId != null) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [langDropdownOpen, corporateMegaKey, cmsDropdownOpenId])

  useEffect(() => {
    setCorporateMegaKey(null)
    setCmsDropdownOpenId(null)
    setMobileNavOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!corporateMegaKey) return undefined
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setCorporateMegaKey(null)
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [corporateMegaKey])

  function openMega(key: string) {
    setCorporateMegaKey((k) => (k === key ? null : key))
    setCmsDropdownOpenId(null)
  }

  function openCmsDropdown(id: number) {
    setCmsDropdownOpenId((x) => (x === id ? null : id))
    setCorporateMegaKey(null)
  }

  return (
    <div className="home-page home-page--corporate">
      <header className="header header--corporate" ref={headerRef}>
        <div className="header-inner">
          <a href="/" className="logo logo--apimstec" aria-label={t('nav.home')}>
            <img
              className="logo-img"
              src="/logos/apimstec.png"
              alt=""
              width={180}
              height={54}
              decoding="async"
            />
          </a>
          <nav className="nav nav--corporate" aria-label="Main navigation">
            <div className="nav-mega-item-wrap">
              <button
                type="button"
                className={`nav-corporate-trigger ${corporateMegaKey === 'platform' ? 'nav-corporate-trigger--open' : ''} ${pathMatchesSection(pathname, 'platform') ? 'nav-corporate-trigger--section' : ''}`}
                aria-expanded={corporateMegaKey === 'platform'}
                aria-haspopup="true"
                onClick={() => openMega('platform')}
              >
                {t('nav.platform')}
                <span className="nav-corporate-chevron" aria-hidden>
                  {corporateMegaKey === 'platform' ? '▲' : '▼'}
                </span>
              </button>
            </div>
            <a
              href="/marketplace"
              className={`nav-corporate-link ${pathMatchesSection(pathname, 'marketplace') ? 'nav-corporate-link--active' : ''}`}
            >
              {t('nav.marketplace')}
            </a>
            <div className="nav-mega-item-wrap">
              <button
                type="button"
                className={`nav-corporate-trigger ${corporateMegaKey === 'consultancy' ? 'nav-corporate-trigger--open' : ''} ${pathMatchesSection(pathname, 'consultancy') ? 'nav-corporate-trigger--section' : ''}`}
                aria-expanded={corporateMegaKey === 'consultancy'}
                aria-haspopup="true"
                onClick={() => openMega('consultancy')}
              >
                {t('nav.consultancy')}
                <span className="nav-corporate-chevron" aria-hidden>
                  {corporateMegaKey === 'consultancy' ? '▲' : '▼'}
                </span>
              </button>
            </div>
            <div className="nav-mega-item-wrap">
              <button
                type="button"
                className={`nav-corporate-trigger ${corporateMegaKey === 'solutions' ? 'nav-corporate-trigger--open' : ''} ${pathMatchesSection(pathname, 'solutions') ? 'nav-corporate-trigger--section' : ''}`}
                aria-expanded={corporateMegaKey === 'solutions'}
                aria-haspopup="true"
                onClick={() => openMega('solutions')}
              >
                {t('nav.solutions')}
                <span className="nav-corporate-chevron" aria-hidden>
                  {corporateMegaKey === 'solutions' ? '▲' : '▼'}
                </span>
              </button>
            </div>
            <a
              href="/insights"
              className={`nav-corporate-link ${pathMatchesSection(pathname, 'insights') ? 'nav-corporate-link--active' : ''}`}
            >
              {t('nav.insights')}
            </a>
            <div className="nav-mega-item-wrap">
              <button
                type="button"
                className={`nav-corporate-trigger ${corporateMegaKey === 'about' ? 'nav-corporate-trigger--open' : ''} ${pathMatchesSection(pathname, 'about') ? 'nav-corporate-trigger--section' : ''}`}
                aria-expanded={corporateMegaKey === 'about'}
                aria-haspopup="true"
                onClick={() => openMega('about')}
              >
                {t('nav.aboutUs')}
                <span className="nav-corporate-chevron" aria-hidden>
                  {corporateMegaKey === 'about' ? '▲' : '▼'}
                </span>
              </button>
            </div>
            <a
              href="/contact"
              className={`nav-corporate-link ${pathname === '/contact' ? 'nav-corporate-link--active' : ''}`}
            >
              {t('nav.contactUs')}
            </a>
            <a
              href="/blog"
              className={`nav-corporate-link ${pathname.startsWith('/blog') ? 'nav-corporate-link--active' : ''}`}
            >
              {ucWords(t('footerBlog'))}
            </a>
            <div className="nav-cms-wrap" ref={cmsDropdownRef}>
              {headerNavTree.map((node) =>
                node.children.length > 0 ? (
                  <div key={node.id} className="nav-cms-dropdown-wrap">
                    <button
                      type="button"
                      className={`nav-link nav-cms-trigger ${cmsDropdownOpenId === node.id ? 'nav-cms-trigger--open' : ''}`}
                      onClick={() => openCmsDropdown(node.id)}
                      aria-expanded={cmsDropdownOpenId === node.id}
                      aria-haspopup="true"
                    >
                      {ucWords(node.title)}
                      <span className="nav-cms-chevron" aria-hidden>
                        {cmsDropdownOpenId === node.id ? '▲' : '▼'}
                      </span>
                    </button>
                    {cmsDropdownOpenId === node.id && (
                      <ul className="nav-cms-dropdown" role="menu">
                        <li role="none">
                          <a
                            href={`/page/${node.slug}`}
                            role="menuitem"
                            onClick={() => setCmsDropdownOpenId(null)}
                          >
                            {ucWords(node.title)}
                          </a>
                        </li>
                        {node.children.map((child) => (
                          <li key={child.id} role="none">
                            <a
                              href={`/page/${child.slug}`}
                              role="menuitem"
                              onClick={() => setCmsDropdownOpenId(null)}
                            >
                              {ucWords(child.title)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a key={node.id} href={`/page/${node.slug}`}>
                    {ucWords(node.title)}
                  </a>
                ),
              )}
            </div>
          </nav>
          <div className="header-actions header-actions--corporate">
            {showLangSwitcher ? (
              <div className="lang-dropdown" ref={langDropdownRef}>
                <button
                  type="button"
                  className="lang-dropdown-trigger lang-dropdown-trigger--corporate"
                  onClick={() => setLangDropdownOpen((open) => !open)}
                  aria-expanded={langDropdownOpen}
                  aria-haspopup="listbox"
                  aria-label="Select language"
                >
                  <span className="lang-dropdown-flag">{langOptions[lang as keyof typeof langOptions]?.flag ?? '🌐'}</span>
                  <span className="lang-dropdown-label">
                    {langOptions[lang as keyof typeof langOptions]?.label ?? (lang && lang.toUpperCase())}
                  </span>
                  <span className="lang-dropdown-chevron" aria-hidden>
                    ▼
                  </span>
                </button>
                {langDropdownOpen && (
                  <ul className="lang-dropdown-menu" role="listbox">
                    {supportedLangs.map((l) => (
                      <li key={l} role="option" aria-selected={lang === l}>
                        <span className={`lang-dropdown-item ${lang === l ? 'lang-dropdown-item--active' : ''}`}>
                          <span className="lang-dropdown-item-flag">
                            {langOptions[l as keyof typeof langOptions]?.flag ?? '🌐'}
                          </span>
                          <span className="lang-dropdown-item-label">
                            {langOptions[l as keyof typeof langOptions]?.label ?? l.toUpperCase()}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
            <button
              type="button"
              className="header-burger"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav-dialog"
              aria-label={t('corporate.openMenu')}
              onClick={() => {
                setCorporateMegaKey(null)
                setCmsDropdownOpenId(null)
                setLangDropdownOpen(false)
                setMobileNavOpen((o) => !o)
              }}
            >
              <span className="header-burger-lines" aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
        <MobileNav
          open={mobileNavOpen}
          onClose={() => setMobileNavOpen(false)}
          lang={lang}
          t={t}
          headerNavTree={headerNavTree}
        />
        {corporateMegaKey && (
          <div className="mega-menu-row mega-menu-row--corporate">
            <div className="mega-menu-row-inner">
              <CorporateMegaMenu
                menuKey={corporateMegaKey}
                lang={lang}
                onClose={() => setCorporateMegaKey(null)}
              />
            </div>
          </div>
        )}
      </header>
      {corporateMegaKey && (
        <button
          type="button"
          className="corporate-mega-backdrop"
          aria-label={t('corporate.closeMenu')}
          onClick={() => setCorporateMegaKey(null)}
        />
      )}

      <main id="main-content" className="main cms-main" tabIndex={-1}>
        <Breadcrumbs />
        {children}
      </main>

      <Footer lang={lang} t={t} footerNavTree={footerNavTree} contact={contactSnapshot} />
    </div>
  )
}
