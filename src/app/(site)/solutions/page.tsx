import type { Metadata } from 'next'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'

const p = getApimstecPage('solutions')
export const metadata: Metadata = apimstecPageMetadata(p, '/solutions')

export default function SolutionsPage() {
  return <ApimstecPageShell page={p} />
}
