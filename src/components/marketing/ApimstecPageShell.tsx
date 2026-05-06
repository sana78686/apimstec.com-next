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
  /**
   * `stacked-prose` — generous vertical rhythm + readable measure for long-form blocks (heading + paragraph stacks).
   */
  bodyVariant?: 'default' | 'stacked-prose'
}

/**
 * Breadcrumbs in SiteLayout; hero matches home corporate band (radials + grid) with per-page tint.
 */
export default function ApimstecPageShell({
  page,
  children,
  contactHref = '/contact',
  contactLabel = 'Contact us',
  bodyVariant = 'default',
}: Props) {
  const tint = page.heroTint as ApimstecSiteHeroTint
  const bodyClass =
    bodyVariant === 'stacked-prose'
      ? 'apimstec-page-body apimstec-page-body--stacked-prose'
      : 'apimstec-page-body'

  return (
    <article className="apimstec-page">
      <ApimstecSiteHero
        tint={tint}
        kicker={page.kicker}
        title={page.title}
        subtitle={page.subtitle}
        titleId="apimstec-hero-title"
      />
      <div className={bodyClass}>
        {page.sections.map((s, i) => (
          <section
            key={i}
            className={
              bodyVariant === 'stacked-prose'
                ? 'apimstec-page-section apimstec-page-section--stacked-prose'
                : 'apimstec-page-section'
            }
          >
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </div>
      {children ? <div className="apimstec-page-append">{children}</div> : null}
      <div
        className={
          bodyVariant === 'stacked-prose'
            ? 'apimstec-page-cta apimstec-page-cta--stacked-prose'
            : 'apimstec-page-cta'
        }
      >
        <Link href={contactHref}>{contactLabel} →</Link>
      </div>
    </article>
  )
}
