import type { Metadata } from 'next'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'

const p = getApimstecPage('consultancy')
export const metadata: Metadata = apimstecPageMetadata(p, '/consultancy')

export default function ConsultancyPage() {
  return <ApimstecPageShell page={p} />
}
