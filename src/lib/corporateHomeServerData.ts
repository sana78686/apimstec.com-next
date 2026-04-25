import { getFaq, getHomeCards, getHomePageContent } from '@/lib/cms/server'
import { mergeCorporateHomeDevContent } from '@/dev/corporateHomeDevMocks'
import { defaultLang } from '@/i18n/translations'

export type CorporateHomeFaqItem = {
  id?: number
  question?: string
  answer?: string
  q?: string
  a?: string
}

export type CorporateHomeCard = Record<string, unknown> & { id?: number | string }

export type CorporateHomeServerData = {
  cmsHtml: string
  landingFaq: CorporateHomeFaqItem[]
  landingCards: CorporateHomeCard[]
  cardsSectionTitle: string
  jsonLd?: unknown
}

/**
 * Home page CMS data fetched on the server so HTML and meta are present in View Source
 * (same sources as the client in apimstec-react).
 */
const emptyHome: CorporateHomeServerData = {
  cmsHtml: '',
  landingFaq: [],
  landingCards: [],
  cardsSectionTitle: '',
  jsonLd: undefined,
}

/**
 * Never throws: avoid 500 on home when CMS is down, env is wrong, or dev `.next` is in a bad state.
 */
export async function getCorporateHomeServerData(): Promise<CorporateHomeServerData> {
  try {
  const lang = defaultLang
  const publicPath = '/'

  const [homeRes, faqRes, cardsRes] = await Promise.all([
    getHomePageContent(lang, publicPath).catch(() => ({} as Record<string, unknown>)),
    getFaq(lang).catch(() => ({ faq: [] as { question?: string; answer?: string; q?: string; a?: string }[] })),
    getHomeCards(lang).catch(() => ({ cards: [] as unknown[], section: {} as { title?: string } })),
  ])

  const htmlContent = typeof (homeRes as { content?: string })?.content === 'string' ? (homeRes as { content: string }).content : ''
  const rawFaq = Array.isArray(faqRes?.faq) ? faqRes.faq : []
  const rawCards = Array.isArray(cardsRes?.cards) ? cardsRes.cards : []
  const st = cardsRes?.section && typeof cardsRes.section === 'object' ? cardsRes.section.title : ''
  const sectionTitleStr = typeof st === 'string' ? st : ''

  const isDev = process.env.NODE_ENV === 'development'
  const forceMocks =
    process.env.NEXT_PUBLIC_CORPORATE_HOME_DEV_MOCKS === 'true' ||
    process.env.NEXT_PUBLIC_CORPORATE_HOME_DEV_MOCKS === '1'

  if (isDev) {
    const merged = mergeCorporateHomeDevContent({
      content: htmlContent,
      faq: rawFaq,
      cards: rawCards,
      sectionTitle: sectionTitleStr,
      force: forceMocks,
    })
    return {
      cmsHtml: merged.cmsHtml,
      landingFaq: merged.landingFaq as CorporateHomeFaqItem[],
      landingCards: merged.landingCards as CorporateHomeCard[],
      cardsSectionTitle: merged.cardsSectionTitle,
      jsonLd: (homeRes as { json_ld?: unknown })?.json_ld,
    }
  }

  return {
    cmsHtml: htmlContent,
    landingFaq: rawFaq as CorporateHomeFaqItem[],
    landingCards: rawCards as CorporateHomeCard[],
    cardsSectionTitle: sectionTitleStr,
    jsonLd: (homeRes as { json_ld?: unknown })?.json_ld,
  }
  } catch (e) {
    if (process.env.NODE_ENV === 'development') {
      console.error('[getCorporateHomeServerData]', e)
    }
    return { ...emptyHome }
  }
}
