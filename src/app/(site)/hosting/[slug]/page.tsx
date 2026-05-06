import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import HostingRichPageView from '@/components/marketing/HostingRichPageView'
import { getHostingRichContent, isHostingRichSlug } from '@/lib/hostingRichPageContent'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'
import { buildApimstecChildPage, childSlugsForSection } from '@/lib/apimstecChildPages'

const SECTION = 'hosting' as const
export const revalidate = 60

export function generateStaticParams() {
  return childSlugsForSection(SECTION)
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = buildApimstecChildPage(SECTION, slug)
  if (!page) return { title: 'Page' }
  return apimstecPageMetadata(page, `/hosting/${encodeURIComponent(slug)}`)
}

export default async function HostingChildPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = buildApimstecChildPage(SECTION, slug)
  if (!page) notFound()
  if (isHostingRichSlug(slug)) {
    const rich = getHostingRichContent(slug)
    if (rich) return <HostingRichPageView page={page} slug={slug} content={rich} />
  }
  return <ApimstecPageShell page={page} />
}
