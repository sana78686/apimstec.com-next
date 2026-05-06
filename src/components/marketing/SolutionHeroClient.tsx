'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/i18n/useTranslation'
import { usePathLang } from '@/hooks/usePathLang'
import { buildCompressPdfBreadcrumbItems } from '@/utils/breadcrumbTrail'
import ApimstecSiteHero from '@/components/marketing/ApimstecSiteHero'
import type { ApimstecSiteHeroTint } from '@/components/marketing/ApimstecSiteHero'

type Props = {
  tint: ApimstecSiteHeroTint
  title: string
  subtitle?: string
  /** Canonical path for crumb builder fallback, e.g. `/solutions/app-development` */
  crumbPath: string
}

/**
 * Solutions hero: full-width band, title + subtitle, breadcrumbs below subtitle (no kicker).
 */
export default function SolutionHeroClient({ tint, title, subtitle, crumbPath }: Props) {
  const lang = usePathLang()
  const pathname = usePathname()
  const pathForCrumbs =
    pathname && pathname !== '/' && pathname.includes('/solutions/') ? pathname : crumbPath
  const t = useTranslation(lang)
  const items = useMemo(() => buildCompressPdfBreadcrumbItems(pathForCrumbs, t), [pathForCrumbs, t])

  const trailing =
    items && items.length > 0 ? (
      <nav className="apimstec-site-hero-breadcrumb apimstec-site-hero-breadcrumb--below" aria-label="Breadcrumb">
        <ol className="apimstec-site-hero-breadcrumb-list">
          {items.map((crumb, i) => {
            const last = i === items.length - 1
            return (
              <li key={`${crumb.label}-${i}-${crumb.to || ''}`} className="apimstec-site-hero-breadcrumb-item">
                {last || !crumb.to ? (
                  <span className="apimstec-site-hero-breadcrumb-current" aria-current={last ? 'page' : undefined}>
                    {crumb.label}
                  </span>
                ) : (
                  <Link className="apimstec-site-hero-breadcrumb-link" href={crumb.to}>
                    {crumb.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    ) : null

  return (
    <ApimstecSiteHero
      tint={tint}
      title={title}
      subtitle={subtitle}
      titleId="apimstec-hero-title"
      viewportBleed
      trailing={trailing}
    />
  )
}
