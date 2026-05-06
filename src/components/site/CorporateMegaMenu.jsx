/* eslint-disable @next/next/no-html-link-for-pages */
'use client'

import { useEffect, useState } from 'react'
import { getCorporateSection } from '@/config/corporateMenuContent'
import '@/styles/CorporateMegaMenu.css'

/**
 * NETSOL-style mega menu: left rail + title, tagline, link grid.
 * Platform and Hosting use `categories` (left tabs → child link grid); Hosting adds Overview above tabs.
 */
export default function CorporateMegaMenu({ menuKey, lang, onClose }) {
  const data = getCorporateSection(lang, menuKey)
  if (!data) return null

  const overviewHref = `/${data.basePath}`
  const categories = Array.isArray(data.categories) ? data.categories : []
  const hasCategories = categories.length > 0
  const firstCategoryId = categories[0]?.id ?? ''

  const [activeCatId, setActiveCatId] = useState(firstCategoryId)

  useEffect(() => {
    setActiveCatId(firstCategoryId)
  }, [menuKey, lang, firstCategoryId])

  const activeCategory = hasCategories
    ? categories.find((c) => c.id === activeCatId) || categories[0]
    : null

  return (
    <div className="corporate-mega" role="navigation" aria-label={data.title}>
      <div className="corporate-mega-inner">
        <aside className="corporate-mega-sidebar">
          {hasCategories && data.overviewLabel ? (
            <a
              href={overviewHref}
              className="corporate-mega-overview corporate-mega-overview--with-categories"
              onClick={onClose}
            >
              <span>{data.overviewLabel}</span>
              <span className="corporate-mega-overview-chevron" aria-hidden>
                ›
              </span>
            </a>
          ) : null}
          {hasCategories ? (
            <div className="corporate-mega-sidebar-nav" role="tablist" aria-label={data.title}>
              {categories.map((cat) => {
                const selected = activeCatId === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={`corporate-mega-overview corporate-mega-sidebar-tab ${selected ? 'corporate-mega-overview--active' : ''}`}
                    onClick={() => setActiveCatId(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span className="corporate-mega-overview-chevron" aria-hidden>
                      ›
                    </span>
                  </button>
                )
              })}
            </div>
          ) : (
            <a href={overviewHref} className="corporate-mega-overview" onClick={onClose}>
              <span>{data.overviewLabel}</span>
              <span className="corporate-mega-overview-chevron" aria-hidden>
                ›
              </span>
            </a>
          )}
        </aside>
        <div className="corporate-mega-main">
          <header className="corporate-mega-header">
            <h2 className="corporate-mega-title">{data.title}</h2>
            <p className="corporate-mega-tagline">
              {hasCategories && activeCategory?.tagline ? activeCategory.tagline : data.tagline}
            </p>
          </header>
          <div className="corporate-mega-divider" />
          {(hasCategories ? activeCategory?.items || [] : data.items || []).length > 0 && (
            <ul className="corporate-mega-grid">
              {(hasCategories ? activeCategory?.items || [] : data.items || []).map((item) => (
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
