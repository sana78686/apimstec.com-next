import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import ServiceRichPageView from '@/components/marketing/ServiceRichPageView'
import { getServiceRichContent, isServiceRichSlug } from '@/lib/serviceRichPageContent'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'
import { buildApimstecChildPage, childSlugsForSection } from '@/lib/apimstecChildPages'

/** Config section key (mega menu); public URL is `/services/…`. */
const SECTION = 'platform' as const
export const revalidate = 60

export function generateStaticParams() {
  return childSlugsForSection(SECTION)
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = buildApimstecChildPage(SECTION, slug)
  if (!p) return { title: 'Page' }
  return apimstecPageMetadata(p, `/services/${encodeURIComponent(slug)}`)
}

export default async function ServiceChildPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = buildApimstecChildPage(SECTION, slug)
  if (!p) notFound()
  if (isServiceRichSlug(slug)) {
    const rich = getServiceRichContent(slug)
    if (rich) return <ServiceRichPageView page={p} slug={slug} content={rich} />
  }
  return <ApimstecPageShell page={p} />
}
