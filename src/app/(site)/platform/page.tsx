import type { Metadata } from 'next'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'

const p = getApimstecPage('platform')
export const metadata: Metadata = apimstecPageMetadata(p, '/platform')

export default function PlatformPage() {
  return <ApimstecPageShell page={p} />
}
