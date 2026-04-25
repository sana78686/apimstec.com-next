import type { Metadata } from 'next'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'

const p = getApimstecPage('marketplace')
export const metadata: Metadata = apimstecPageMetadata(p, '/marketplace')

export default function MarketplacePage() {
  return <ApimstecPageShell page={p} />
}
