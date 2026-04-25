/* eslint-disable @next/next/no-html-link-for-pages */
'use client'

import { getCorporateSection } from '@/config/corporateMenuContent'
import '@/styles/CorporateMegaMenu.css'

/**
 * NETSOL-style mega menu: left overview rail + title, tagline, 3-column link grid.
 */
export default function CorporateMegaMenu({ menuKey, lang, onClose }) {
  const data = getCorporateSection(lang, menuKey)
  if (!data) return null

  const overviewHref = `/${data.basePath}`

  return (
    <div className="corporate-mega" role="navigation" aria-label={data.title}>
      <div className="corporate-mega-inner">
        <aside className="corporate-mega-sidebar">
          <a href={overviewHref} className="corporate-mega-overview" onClick={onClose}>
            <span>{data.overviewLabel}</span>
            <span className="corporate-mega-overview-chevron" aria-hidden>
              ›
            </span>
          </a>
        </aside>
        <div className="corporate-mega-main">
          <header className="corporate-mega-header">
            <h2 className="corporate-mega-title">{data.title}</h2>
            <p className="corporate-mega-tagline">{data.tagline}</p>
          </header>
          <div className="corporate-mega-divider" />
          {data.items?.length > 0 && (
            <ul className="corporate-mega-grid">
              {data.items.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/${data.basePath}/${item.slug}`}
                    className="corporate-mega-card"
                    onClick={onClose}
                  >
                    <span className="corporate-mega-card-title">{item.title}</span>
                    <span className="corporate-mega-card-desc">{item.description}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
