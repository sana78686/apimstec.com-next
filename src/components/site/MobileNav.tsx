/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import { supportedLangs, langOptions } from '@/i18n/translations'
import { getCorporateSection, CORPORATE_MEGA_SECTION_KEYS } from '@/config/corporateMenuContent'
import { ucWords } from '@/utils/ucWords'
import type { CmsNavTreeNode } from '@/components/site/cmsNavTypes'
import '@/styles/MobileNav.css'

type TFn = (key: string, params?: Record<string, string | number>) => string

function megaSectionLabel(key: string, t: TFn) {
  const keys: Record<string, string> = {
    platform: 'nav.platform',
    consultancy: 'nav.consultancy',
    solutions: 'nav.solutions',
    about: 'nav.aboutUs',
  }
  return t(keys[key] || 'nav.home')
}

type Props = {
  open: boolean
  onClose: () => void
  lang: string
  t: TFn
  headerNavTree?: CmsNavTreeNode[]
}

/**
 * Full-screen mobile drawer (NETSOL-style): logo row + lang + close, accordions for mega sections.
 */
export default function MobileNav({ open, onClose, lang, t, headerNavTree = [] }: Props) {
  const [accordion, setAccordion] = useState<string | null>(null)
  const showLangSwitcher = supportedLangs.length > 1

  useEffect(() => {
    if (!open) setAccordion(null)
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  function toggleAccordion(key: string) {
    setAccordion((a) => (a === key ? null : key))
  }

  if (!open) return null

  return (
    <div
      id="mobile-nav-dialog"
      className="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label={t('corporate.openMenu')}
    >
      <div className="mobile-nav-panel">
        <div className="mobile-nav-top">
          <a href="/" className="mobile-nav-logo logo logo--apimstec" onClick={onClose} aria-label={t('nav.home')}>
            <img
              className="logo-img"
              src="/logos/apimstec.png"
              alt=""
              width={180}
              height={54}
              decoding="async"
            />
          </a>
          <div className="mobile-nav-top-actions">
            {showLangSwitcher ? (
              <div className="mobile-nav-langs" role="group" aria-label="Language">
                {supportedLangs.map((l) => (
                  <span
                    key={l}
                    className={`mobile-nav-lang-link ${lang === l ? 'mobile-nav-lang-link--active' : ''}`}
                    lang={l}
                  >
                    {langOptions[l as keyof typeof langOptions]?.label ?? l.toUpperCase()}
                  </span>
                ))}
              </div>
            ) : null}
            <button type="button" className="mobile-nav-close" onClick={onClose} aria-label={t('corporate.closeMenu')}>
              <span className="mobile-nav-close-icon" aria-hidden>
                ×
              </span>
            </button>
          </div>
        </div>

        <nav className="mobile-nav-body" aria-label="Main navigation">
          {CORPORATE_MEGA_SECTION_KEYS.map((sectionKey) => {
            const data = getCorporateSection(lang, sectionKey)
            if (!data) return null
            const expanded = accordion === sectionKey
            const label = megaSectionLabel(sectionKey, t)
            return (
              <div key={sectionKey} className="mobile-nav-block">
                <button
                  type="button"
                  className={`mobile-nav-accordion ${expanded ? 'mobile-nav-accordion--open' : ''}`}
                  aria-expanded={expanded}
                  onClick={() => toggleAccordion(sectionKey)}
                >
                  <span>{label}</span>
                  <span className="mobile-nav-accordion-chevron" aria-hidden>
                    {expanded ? '▲' : '▼'}
                  </span>
                </button>
                {expanded ? (
                  <ul className="mobile-nav-sub">
                    <li>
                      <a href={`/${data.basePath}`} className="mobile-nav-sub-link" onClick={onClose}>
                        {data.overviewLabel}
                      </a>
                    </li>
                    {(data.items || []).map((item: { slug: string; title: string }) => (
                      <li key={item.slug}>
                        <a
                          href={`/${data.basePath}/${item.slug}`}
                          className="mobile-nav-sub-link"
                          onClick={onClose}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )
          })}

          <a href="/marketplace" className="mobile-nav-row-link" onClick={onClose}>
            {t('nav.marketplace')}
          </a>
          <a href="/insights" className="mobile-nav-row-link" onClick={onClose}>
            {t('nav.insights')}
          </a>
          <a href="/contact" className="mobile-nav-row-link" onClick={onClose}>
            {t('nav.contactUs')}
          </a>
          <a href="/blog" className="mobile-nav-row-link" onClick={onClose}>
            {ucWords(t('footerBlog'))}
          </a>

          {headerNavTree.map((node) =>
            node.children.length > 0 ? (
              <div key={node.id} className="mobile-nav-block">
                <button
                  type="button"
                  className={`mobile-nav-accordion ${accordion === `cms-${node.id}` ? 'mobile-nav-accordion--open' : ''}`}
                  aria-expanded={accordion === `cms-${node.id}`}
                  onClick={() => toggleAccordion(`cms-${node.id}`)}
                >
                  <span>{ucWords(node.title)}</span>
                  <span className="mobile-nav-accordion-chevron" aria-hidden>
                    {accordion === `cms-${node.id}` ? '▲' : '▼'}
                  </span>
                </button>
                {accordion === `cms-${node.id}` ? (
                  <ul className="mobile-nav-sub">
                    <li>
                      <a href={`/page/${node.slug}`} className="mobile-nav-sub-link" onClick={onClose}>
                        {ucWords(node.title)}
                      </a>
                    </li>
                    {node.children.map((child) => (
                      <li key={child.id}>
                        <a href={`/page/${child.slug}`} className="mobile-nav-sub-link" onClick={onClose}>
                          {ucWords(child.title)}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : (
              <a key={node.id} href={`/page/${node.slug}`} className="mobile-nav-row-link" onClick={onClose}>
                {ucWords(node.title)}
              </a>
            ),
          )}
        </nav>
      </div>
    </div>
  )
}
