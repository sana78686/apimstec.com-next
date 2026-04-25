import type { Metadata } from 'next'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'

const p = getApimstecPage('about')
export const metadata: Metadata = apimstecPageMetadata(p, '/about')

export default function AboutPage() {
  return <ApimstecPageShell page={p} />
}
