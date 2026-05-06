import Link from 'next/link'
import '@/styles/hosting-overview.css'

export type HostingPlanCard = {
  slug: string
  title: string
  description: string
}

const FEATURED = new Set(['wordpress-hosting'])

/**
 * Hosting overview — linked cards for each plan (WordPress highlighted).
 */
export default function HostingPlansGrid({ items }: { items: HostingPlanCard[] }) {
  if (!items?.length) return null

  return (
    <section className="hosting-plans" aria-labelledby="hosting-plans-heading">
      <h2 id="hosting-plans-heading" className="hosting-plans-heading">
        Compare hosting plans
      </h2>
      <p className="hosting-plans-intro">
        Every plan includes the <strong>Plesk</strong> control panel for sites, domains, mail, and backups—pick{' '}
        <strong>WordPress hosting</strong> below if you want a stack tuned for WP.
      </p>
      <ul className="hosting-plans-grid">
        {items.map((item) => {
          const featured = FEATURED.has(item.slug)
          return (
            <li key={item.slug}>
              <Link
                href={`/hosting/${encodeURIComponent(item.slug)}`}
                className={`hosting-plan-card ${featured ? 'hosting-plan-card--featured' : ''}`}
              >
                {featured ? <span className="hosting-plan-badge">Popular</span> : null}
                <span className="hosting-plan-card-title">{item.title}</span>
                <span className="hosting-plan-card-desc">{item.description}</span>
                <span className="hosting-plan-card-cta">View details →</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
