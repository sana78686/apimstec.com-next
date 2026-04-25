import type { Metadata } from 'next'
import ApimstecHomeClient from '@/components/marketing/ApimstecHomeClient'
import { translations } from '@/i18n/translations'
import { socialMetadata } from '@/lib/seoMetadata'
import { getCorporateHomeServerData } from '@/lib/corporateHomeServerData'

const h = translations.en

export const revalidate = 60

/** Short tab title: "Apimstec" (overrides the `%s | Apimstec` template) */
export const metadata: Metadata = {
  title: { absolute: 'Apimstec' },
  description: h.subtitle,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  ...socialMetadata({
    title: 'Apimstec',
    description: h.subtitle,
    path: '/',
    ogLocale: 'en_US',
  }),
}

/**
 * Server Component: CMS home data is fetched here so the response HTML (View Source) includes copy, FAQ, cards, and JSON-LD like compresspdf-next.
 * The child client component only adds interactivity (FAQ open state).
 */
export default async function HomePage() {
  let data
  try {
    data = await getCorporateHomeServerData()
  } catch {
    data = { cmsHtml: '', landingFaq: [], landingCards: [], cardsSectionTitle: '', jsonLd: undefined }
  }
  const jsonLdPayload = data.jsonLd

  return (
    <>
      {jsonLdPayload ? (
        <script
          type="application/ld+json"
          data-cms-seo-prerender="1"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPayload) }}
        />
      ) : null}
      <ApimstecHomeClient
        initialCmsHtml={data.cmsHtml}
        initialLandingFaq={data.landingFaq}
        initialLandingCards={data.landingCards}
        initialCardsTitle={data.cardsSectionTitle}
      />
    </>
  )
}
