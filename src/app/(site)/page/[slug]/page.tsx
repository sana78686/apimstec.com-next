import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPageBySlug } from '@/lib/cms/server'
import { absolutizeCmsHtmlServer, siteOriginFromEnv } from '@/lib/cms/html'
import { JsonLdScript } from '@/components/cms/JsonLdScript'
import ApimstecSiteHero from '@/components/marketing/ApimstecSiteHero'
import type { ApimstecSiteHeroTint } from '@/components/marketing/ApimstecSiteHero'
import { langPrefix } from '@/i18n/translations'
import '@/styles/site-marketing-shell.css'
import '@/styles/cms-page.css'

export const revalidate = 60

function formatSlugKicker(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function dynamicPageHeroTint(slug: string): ApimstecSiteHeroTint {
  const s = slug.toLowerCase()
  if (s === 'terms' || s.startsWith('terms')) return 'blue'
  if (s.includes('privacy')) return 'teal'
  if (s.includes('disclaimer')) return 'slate'
  if (s.includes('cookie')) return 'violet'
  if (s.includes('about')) return 'navy'
  if (s.includes('human-rights')) return 'indigo'
  if (s.includes('modern-slavery')) return 'violet'
  if (s.includes('investors')) return 'navy'
  return 'slate'
}

function plainText(html: string) {
  if (!html || typeof html !== 'string') return ''
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const data = (await getPageBySlug(slug, 'en')) as Record<string, string | undefined>
    if (data?._seo_redirect) return { title: 'Page' }
    const title = String(data?.title || slug)
    return { title, description: plainText(String(data?.content || '')).slice(0, 160) }
  } catch {
    return { title: 'Page' }
  }
}

export default async function CmsDynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let data: Record<string, unknown>
  try {
    data = (await getPageBySlug(slug, 'en')) as Record<string, unknown>
  } catch {
    notFound()
  }

  const redir = data?._seo_redirect as { locale?: string; slug?: string } | undefined
  if (redir?.locale && redir?.slug) {
    const lp = langPrefix(redir.locale as 'en')
    redirect(`${lp}/page/${encodeURIComponent(String(redir.slug))}`)
  }

  const origin = siteOriginFromEnv()
  const html = absolutizeCmsHtmlServer(String(data?.content || ''), origin)
  const jsonLd = data?.json_ld

  return (
    <article className="cms-page">
      <JsonLdScript data={jsonLd} />
      <div className="site-marketing-shell">
        <ApimstecSiteHero
          tint={dynamicPageHeroTint(slug)}
          kicker={formatSlugKicker(slug)}
          title={String(data?.title || slug)}
          titleId="cms-page-hero-title"
        />
        <div className="cms-page-dynamic-below">
          <div className="cms-page-content legal-content-body" dangerouslySetInnerHTML={{ __html: html }} />
          <footer className="cms-page-footer">
            <Link href="/" className="cms-page-back">
              ← Back to home
            </Link>
          </footer>
        </div>
      </div>
    </article>
  )
}
