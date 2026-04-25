import '@/styles/apimstec-hero.css'

export type ApimstecSiteHeroTint = 'navy' | 'blue' | 'teal' | 'slate'

type Props = {
  tint: ApimstecSiteHeroTint
  kicker?: string
  title: string
  subtitle?: string
  titleId?: string
  /** Pull hero to main edges (contact / blog full-width) */
  bleed?: boolean
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
}: Props) {
  const rootClass = [
    'apimstec-site-hero',
    `apimstec-site-hero--${tint}`,
    bleed ? 'apimstec-site-hero--bleed' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={rootClass} aria-labelledby={titleId}>
      <div className="apimstec-site-hero-bg" aria-hidden="true" />
      <div className="apimstec-site-hero-content">
        {kicker ? <p className="apimstec-site-hero-eyebrow">{kicker}</p> : null}
        <h1 id={titleId} className="apimstec-site-hero-title">
          {title}
        </h1>
        {subtitle ? <p className="apimstec-site-hero-subtitle">{subtitle}</p> : null}
      </div>
    </section>
  )
}
