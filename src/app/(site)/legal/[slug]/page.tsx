import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getLegalPage } from '@/lib/cms/server'
import { absolutizeCmsHtmlServer, siteOriginFromEnv } from '@/lib/cms/html'
import { JsonLdScript } from '@/components/cms/JsonLdScript'
import ApimstecSiteHero from '@/components/marketing/ApimstecSiteHero'
import type { ApimstecSiteHeroTint } from '@/components/marketing/ApimstecSiteHero'
import '@/styles/site-marketing-shell.css'
import '@/styles/cms-page.css'

const VALID = ['terms', 'privacy-policy', 'disclaimer', 'about-us', 'cookie-policy']

function legalHeroAccent(slug: string): { tint: ApimstecSiteHeroTint; kicker: string } {
  switch (slug) {
    case 'terms':
      return { tint: 'blue', kicker: 'Terms' }
    case 'privacy-policy':
      return { tint: 'teal', kicker: 'Privacy' }
    case 'disclaimer':
      return { tint: 'slate', kicker: 'Disclaimer' }
    case 'about-us':
      return { tint: 'navy', kicker: 'About' }
    case 'cookie-policy':
      return { tint: 'violet', kicker: 'Cookies' }
    default:
      return { tint: 'slate', kicker: 'Legal' }
  }
}

export const revalidate = 60

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
  if (!VALID.includes(slug)) return { title: 'Legal' }
  try {
    const data = (await getLegalPage(slug, 'en')) as { title?: string; content?: string }
    const title = String(data?.title || slug)
    return { title, description: plainText(String(data?.content || '')).slice(0, 160) }
  } catch {
    return { title: 'Legal' }
  }
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!VALID.includes(slug)) notFound()

  let data: { title?: string; content?: string; json_ld?: unknown }
  try {
    data = (await getLegalPage(slug, 'en')) as typeof data
  } catch {
    notFound()
  }

  const origin = siteOriginFromEnv()
  const html = absolutizeCmsHtmlServer(String(data?.content || ''), origin)
  const { tint, kicker } = legalHeroAccent(slug)

  return (
    <article className="cms-page">
      <JsonLdScript data={data.json_ld} />
      <div className="site-marketing-shell">
        <ApimstecSiteHero tint={tint} kicker={kicker} title={String(data?.title || slug)} titleId="legal-hero-title" />
        <div className="cms-page-legal-below">
          <div
            className="cms-page-content legal-content-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
