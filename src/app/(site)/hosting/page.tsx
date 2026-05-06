import type { Metadata } from 'next'
import HostingOverviewView from '@/components/marketing/HostingOverviewView'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'
import { getCorporateSection } from '@/config/corporateMenuContent'

const p = getApimstecPage('hosting')
export const metadata: Metadata = apimstecPageMetadata(p, '/hosting')

export default function HostingPage() {
  const hosting = getCorporateSection('en', 'hosting')
  const cats = hosting?.categories
  const planItems =
    Array.isArray(cats) && cats.length > 0 && cats[0]?.items?.length
      ? cats[0].items
      : hosting?.items ?? []

  return <HostingOverviewView page={p} planItems={planItems} />
}
