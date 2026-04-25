import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'
import { buildApimstecChildPage, childSlugsForSection } from '@/lib/apimstecChildPages'

const SECTION = 'consultancy' as const
export const revalidate = 60

export function generateStaticParams() {
  return childSlugsForSection(SECTION)
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = buildApimstecChildPage(SECTION, slug)
  if (!p) return { title: 'Page' }
  return apimstecPageMetadata(p, `/${SECTION}/${encodeURIComponent(slug)}`)
}

export default async function ConsultancyChildPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = buildApimstecChildPage(SECTION, slug)
  if (!p) notFound()
  return <ApimstecPageShell page={p} />
}
