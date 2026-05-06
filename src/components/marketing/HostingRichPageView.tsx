import type { ApimstecSiteHeroTint } from '@/components/marketing/ApimstecSiteHero'
import HostingHeroClient from '@/components/marketing/HostingHeroClient'
import HostingRichPageBody from '@/components/marketing/HostingRichPageBody'
import type { ApimstecStaticPage } from '@/lib/apimstecStaticPages'
import type { HostingRichContent } from '@/lib/hostingRichPageContent'
import { getHostingPeers } from '@/config/corporateMenuContent'
import '@/styles/solution-app-development.css'

type Props = {
  page: ApimstecStaticPage
  slug: string
  content: HostingRichContent
}

export default function HostingRichPageView({ page, slug, content }: Props) {
  const tint = page.heroTint as ApimstecSiteHeroTint
  const { categoryLabel, navItems } = getHostingPeers('en', slug)

  return (
    <>
      <HostingHeroClient
        tint={tint}
        title={page.title}
        subtitle={page.subtitle}
        crumbPath={`/hosting/${slug}`}
      />
      <article className="apimstec-page apimstec-page--solution-rich">
        <HostingRichPageBody
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
