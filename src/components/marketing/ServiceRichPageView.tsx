import type { ApimstecSiteHeroTint } from '@/components/marketing/ApimstecSiteHero'
import ServiceHeroClient from '@/components/marketing/ServiceHeroClient'
import ServiceRichPageBody from '@/components/marketing/ServiceRichPageBody'
import type { ApimstecStaticPage } from '@/lib/apimstecStaticPages'
import type { ServiceRichContent } from '@/lib/serviceRichPageContent'
import { getPlatformServicePeers } from '@/config/corporateMenuContent'
import '@/styles/solution-app-development.css'

type Props = {
  page: ApimstecStaticPage
  slug: string
  content: ServiceRichContent
}

export default function ServiceRichPageView({ page, slug, content }: Props) {
  const tint = page.heroTint as ApimstecSiteHeroTint
  const { categoryLabel, navItems } = getPlatformServicePeers('en', slug)

  return (
    <>
      <ServiceHeroClient
        tint={tint}
        title={page.title}
        subtitle={page.subtitle}
        crumbPath={`/services/${slug}`}
      />
      <article className="apimstec-page apimstec-page--solution-rich">
        <ServiceRichPageBody
          content={content}
          navItems={navItems}
          relatedSectionTitle={categoryLabel}
          currentSlug={slug}
          pageTitle={page.title}
        />
      </article>
    </>
  )
}
