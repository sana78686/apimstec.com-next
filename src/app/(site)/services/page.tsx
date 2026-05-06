import type { Metadata } from 'next'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'

const p = getApimstecPage('services')
export const metadata: Metadata = apimstecPageMetadata(p, '/services')

export default function ServicesPage() {
  return <ApimstecPageShell page={p} />
}
