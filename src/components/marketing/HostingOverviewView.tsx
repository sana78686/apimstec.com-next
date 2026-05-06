import type { ApimstecStaticPage } from '@/lib/apimstecStaticPages'
import HostingHeroClient from '@/components/marketing/HostingHeroClient'
import HostingPlansGrid from '@/components/marketing/HostingPlansGrid'
import Link from 'next/link'
import type { ApimstecSiteHeroTint } from '@/components/marketing/ApimstecSiteHero'
import '@/styles/solution-app-development.css'
import '@/styles/hosting-overview.css'

type PlanItem = { slug: string; title: string; description: string }

type Props = {
  page: ApimstecStaticPage
  planItems: PlanItem[]
}

export default function HostingOverviewView({ page, planItems }: Props) {
  const tint = page.heroTint as ApimstecSiteHeroTint

  return (
    <>
      <HostingHeroClient tint={tint} title={page.title} subtitle={page.subtitle} crumbPath="/hosting" />
      <article className="apimstec-page apimstec-page--solution-rich hosting-overview-rich">
        <div className="hosting-overview-main-wrap">
          <div className="hosting-overview-prose">
            {page.sections.map((s, i) => (
              <section key={i} className="hosting-overview-section">
                <h2 className="hosting-overview-section-title">{s.heading}</h2>
                <p className="hosting-overview-section-body">{s.body}</p>
              </section>
            ))}
          </div>
          <HostingPlansGrid items={planItems} />
          <div className="hosting-overview-footer-cta">
            <p className="hosting-overview-footer-text">
              Need help choosing between shared, cloud, VPS, or WordPress hosting?{' '}
              <Link href="/contact" className="hosting-overview-footer-link">
                Contact Apimstec
              </Link>{' '}
              with your domains and traffic—we answer in plain English.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
