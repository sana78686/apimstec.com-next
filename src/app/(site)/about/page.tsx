import type { Metadata } from 'next'
import AboutUsPage from '@/components/marketing/AboutUsPage'
import { getApimstecPage } from '@/lib/apimstecStaticPages'
import { apimstecPageMetadata } from '@/lib/apimstecPageMeta'

const p = getApimstecPage('about')
export const metadata: Metadata = apimstecPageMetadata(p, '/about')

export default function AboutPage() {
  return <AboutUsPage />
}
