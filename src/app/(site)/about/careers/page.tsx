import type { Metadata } from 'next'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'

const p = getApimstecPage('about-careers')
export const metadata: Metadata = apimstecPageMetadata(p, '/about/careers')

export default function AboutCareersPage() {
  return <ApimstecPageShell page={p} />
}
