import type { ReactNode } from 'react'
import '@/styles/apimstec-hero.css'

export type ApimstecSiteHeroTint = 'navy' | 'blue' | 'teal' | 'slate' | 'violet' | 'indigo'

type Props = {
  tint: ApimstecSiteHeroTint
  kicker?: string
  title: string
  subtitle?: string
  titleId?: string
  /** Pull hero to main edges (contact / blog full-width) */
  bleed?: boolean
  /** Full viewport-width background band; text stays in centered column via inner wrapper */
  viewportBleed?: boolean
  /** Above title block (rare; constrained column) */
  leading?: ReactNode
  /** Below subtitle inside title column — e.g. breadcrumbs */
  trailing?: ReactNode
}

/**
 * Same visual language as the home `corporate-home-hero` (radials + grid), with shade variants.
 */
export default function ApimstecSiteHero({
  tint,
  kicker,
  title,
  subtitle,
  titleId = 'apimstec-site-hero-title',
  bleed = false,
  viewportBleed = false,
  leading = null,
  trailing = null,
}: Props) {
  const rootClass = [
    'apimstec-site-hero',
    `apimstec-site-hero--${tint}`,
    bleed ? 'apimstec-site-hero--bleed' : '',
    viewportBleed ? 'apimstec-site-hero--viewport-bleed' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      {kicker ? <p className="apimstec-site-hero-eyebrow">{kicker}</p> : null}
      <h1 id={titleId} className="apimstec-site-hero-title">
        {title}
      </h1>
      {subtitle ? <p className="apimstec-site-hero-subtitle">{subtitle}</p> : null}
      {trailing}
    </>
  )

  return (
    <section className={rootClass} aria-labelledby={titleId}>
      <div className="apimstec-site-hero-bg" aria-hidden="true" />
      {viewportBleed ? (
        <div className="apimstec-site-hero-inner-constrain">
          {leading}
          <div className="apimstec-site-hero-content">{inner}</div>
        </div>
      ) : (
        <div className="apimstec-site-hero-content">
          {leading}
          {inner}
        </div>
      )}
    </section>
  )
}
