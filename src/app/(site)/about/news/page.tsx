import type { Metadata } from 'next'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'

const p = getApimstecPage('about-news')
export const metadata: Metadata = apimstecPageMetadata(p, '/about/news')

export default function AboutNewsPage() {
  return <ApimstecPageShell page={p} />
}
