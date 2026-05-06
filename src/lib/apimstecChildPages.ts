import { getCorporateSection, resolvePlaceholderMeta } from '@/config/corporateMenuContent'
import type { ApimstecStaticPage } from '@/lib/apimstecStaticPages'
import { getServiceEasyEnglish } from '@/lib/serviceEasyEnglish'
import { getSolutionsEasyEnglish } from '@/lib/solutionsEasyEnglish'

const SECTION_KEYS = ['platform', 'hosting', 'solutions', 'about'] as const
export type ApimstecChildSection = (typeof SECTION_KEYS)[number]

export function isApimstecChildSection(s: string): s is ApimstecChildSection {
  return (SECTION_KEYS as readonly string[]).includes(s)
}

const TINT_BY_SECTION: Record<ApimstecChildSection, ApimstecStaticPage['heroTint']> = {
  platform: 'navy',
  hosting: 'teal',
  solutions: 'blue',
  about: 'slate',
}

/** Shorter tab / SEO title from menu item (already plain language). */
function shortTitleFromItem(title: string): string {
  const t = title.trim()
  if (t.length <= 32) return t
  return `${t.slice(0, 29)}…`
}

/**
 * Content for corporate mega menu child URLs: /services/…, /hosting/…, /solutions/…, /about/…
 * Services (`platform`) and Solutions use plain-English modules when `lang` is `en`.
 */
export function buildApimstecChildPage(
  section: ApimstecChildSection,
  slug: string,
  lang: 'en' = 'en',
): ApimstecStaticPage | null {
  const data = getCorporateSection(lang, section)
  const item = data?.items?.find((i: { slug: string }) => i.slug === slug)
  if (!data || !item) return null

  const meta = resolvePlaceholderMeta(lang, section, slug)
  const title = String(meta.title || item.title)
  const easy =
    lang === 'en' && section === 'platform'
      ? getServiceEasyEnglish(slug)
      : lang === 'en' && section === 'solutions'
        ? getSolutionsEasyEnglish(slug)
        : undefined
  const description = String(easy?.description ?? meta.description ?? item.description)
  const tint = TINT_BY_SECTION[section]

  const fallbackSections = [
    {
      heading: 'In simple words',
      body: `This is part of our ${data.title.toLowerCase()} work at Apimstec. We are an IT company. We build software, mobile apps, and online products. We also help with your website and marketing when you ask.`,
    },
    {
      heading: 'What you can do next',
      body:
        'Write one or two sentences on the contact page about what you need. We answer in easy English with a clear next step.',
    },
  ]

  return {
    shortTitle: shortTitleFromItem(item.title),
    description,
    kicker: data.title,
    title,
    subtitle: description,
    heroTint: tint,
    sections: easy?.sections ?? fallbackSections,
  }
}

/**
 * `generateStaticParams` — skip slugs that have a dedicated `app/.../.../page.tsx` route
 * so we do not duplicate `/about/careers` and `/about/news`.
 */
export function childSlugsForSection(section: ApimstecChildSection, reserved: string[] = []): { slug: string }[] {
  const data = getCorporateSection('en', section)
  const reservedSet = new Set(reserved)
  return (data?.items || [])
    .filter((i: { slug: string }) => !reservedSet.has(i.slug))
    .map((item: { slug: string }) => ({ slug: item.slug }))
}
