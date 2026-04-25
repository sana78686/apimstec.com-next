import type { ReactNode } from 'react'
import Link from 'next/link'
import type { ApimstecStaticPage } from '@/lib/apimstecStaticPages'
import ApimstecSiteHero from '@/components/marketing/ApimstecSiteHero'
import type { ApimstecSiteHeroTint } from '@/components/marketing/ApimstecSiteHero'
import '@/styles/apimstec-page-shell.css'

type Props = {
  page: ApimstecStaticPage
  /** e.g. "/contact" */
  contactHref?: string
  contactLabel?: string
  children?: ReactNode
}

/**
 * Breadcrumbs in SiteLayout; hero matches home corporate band (radials + grid) with per-page tint.
 */
export default function ApimstecPageShell({
  page,
  children,
  contactHref = '/contact',
  contactLabel = 'Contact us',
}: Props) {
  const tint = page.heroTint as ApimstecSiteHeroTint

  return (
    <article className="apimstec-page">
      <ApimstecSiteHero
        tint={tint}
        kicker={page.kicker}
        title={page.title}
        subtitle={page.subtitle}
        titleId="apimstec-hero-title"
      />
      <div className="apimstec-page-body">
        {page.sections.map((s, i) => (
          <section key={i} className="apimstec-page-section">
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </div>
      {children ? <div className="apimstec-page-append">{children}</div> : null}
      <div className="apimstec-page-cta">
        <Link href={contactHref}>{contactLabel} →</Link>
      </div>
    </article>
  )
}
