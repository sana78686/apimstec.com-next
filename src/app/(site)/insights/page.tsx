import type { Metadata } from 'next'
import Link from 'next/link'
import ApimstecPageShell from '@/components/marketing/ApimstecPageShell'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'
import { translations } from '@/i18n/translations'

const p = getApimstecPage('insights')
const b = translations.en.blog
export const metadata: Metadata = apimstecPageMetadata(p, '/insights')

export default function InsightsPage() {
  return (
    <ApimstecPageShell page={p}>
      <p className="apimstec-page-section" style={{ margin: 0 }}>
        <Link href="/blog" className="apimstec-page-inline-link">
          {b.listTitle} →
        </Link>
      </p>
    </ApimstecPageShell>
  )
}
