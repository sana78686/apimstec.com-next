import { getCorporateSection, resolvePlaceholderMeta } from '@/config/corporateMenuContent'
import type { ApimstecStaticPage } from '@/lib/apimstecStaticPages'

const SECTION_KEYS = ['platform', 'consultancy', 'solutions', 'about'] as const
export type ApimstecChildSection = (typeof SECTION_KEYS)[number]

export function isApimstecChildSection(s: string): s is ApimstecChildSection {
  return (SECTION_KEYS as readonly string[]).includes(s)
}

const TINT_BY_SECTION: Record<ApimstecChildSection, ApimstecStaticPage['heroTint']> = {
  platform: 'navy',
  consultancy: 'teal',
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
 * Content for corporate mega menu child URLs: /platform/…, /consultancy/…, /solutions/…, /about/…
 * Uses menu copy; adds the same “easy English” body pattern everywhere.
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
  const description = String(meta.description || item.description)
  const tint = TINT_BY_SECTION[section]

  return {
    shortTitle: shortTitleFromItem(item.title),
    description,
    kicker: data.title,
    title,
    subtitle: description,
    heroTint: tint,
    sections: [
      {
        heading: 'In simple words',
        body: `This is part of our ${data.title.toLowerCase()} work at Apimstec. We make software, mobile apps, and SaaS. We also help with marketing, SEO, and writing for your site when you need it.`,
      },
      {
        heading: 'What you can do next',
        body:
          'Tell us your goal in one or two lines on the contact page. We answer in easy English and suggest a small next step. No need for technical words.',
      },
    ],
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
