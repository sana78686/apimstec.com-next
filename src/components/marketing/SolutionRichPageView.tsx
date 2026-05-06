import type { ApimstecSiteHeroTint } from '@/components/marketing/ApimstecSiteHero'
import SolutionHeroClient from '@/components/marketing/SolutionHeroClient'
import SolutionRichPageBody from '@/components/marketing/SolutionRichPageBody'
import type { ApimstecStaticPage } from '@/lib/apimstecStaticPages'
import type { SolutionRichContent } from '@/lib/solutionRichPageContent'
import { getCorporateSection } from '@/config/corporateMenuContent'
import '@/styles/solution-app-development.css'

type Props = {
  page: ApimstecStaticPage
  slug: string
  content: SolutionRichContent
}

export default function SolutionRichPageView({ page, slug, content }: Props) {
  const tint = page.heroTint as ApimstecSiteHeroTint
  const solutions = getCorporateSection('en', 'solutions')
  const navItems = (solutions?.items ?? []).map((i: { slug: string; title: string }) => ({
    slug: i.slug,
    title: i.title,
  }))

  return (
    <>
      <SolutionHeroClient
        tint={tint}
        title={page.title}
        subtitle={page.subtitle}
        crumbPath={`/solutions/${slug}`}
      />
      <article className="apimstec-page apimstec-page--solution-rich">
        <SolutionRichPageBody content={content} navItems={navItems} currentSlug={slug} pageTitle={page.title} />
      </article>
    </>
  )
}
