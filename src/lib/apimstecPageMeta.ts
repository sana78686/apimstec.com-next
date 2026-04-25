import type { Metadata } from 'next'
import type { ApimstecStaticPage } from '@/lib/apimstecStaticPages'
import { socialMetadata } from '@/lib/seoMetadata'

/** Simple titles: `Platform` + site template in root layout → "Platform | Apimstec" */
export function apimstecPageMetadata(
  p: ApimstecStaticPage,
  path: string,
): Metadata {
  return {
    title: p.shortTitle,
    description: p.description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    ...socialMetadata({
      title: p.title,
      description: p.description,
      path,
      ogLocale: 'en_US',
    }),
  }
}
