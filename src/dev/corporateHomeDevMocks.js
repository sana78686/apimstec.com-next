/**
 * Rich placeholder content for the corporate home (LandingBelowFold) in local dev.
 * Used when the CMS returns nothing, or when VITE_CORPORATE_HOME_DEV_MOCKS=true (forces preview).
 */

export const CORPORATE_HOME_DEV_MOCK_SECTION_TITLE = 'Explore ApimsTec'

export const CORPORATE_HOME_DEV_MOCK_HTML = `
<p><strong>ApimsTec</strong> — local preview of CMS body copy. This block mirrors what you can publish from the Content Manager: short intro, optional links, and styled paragraphs.</p>
<p>Composable platforms for regulated industries: retail, finance workflows, and servicing in one architecture. Swap this HTML in the CMS when you go live.</p>
`

/** Same shape as GET /api/public/home-cards */
export const CORPORATE_HOME_DEV_MOCK_CARDS = [
  {
    id: -101,
    title: 'Platform & integration',
    description:
      'API-first building blocks for digital retail and finance.\nExplore services|/services\nMarketplace|/marketplace',
    icon: 'layers',
    sort_order: 1,
  },
  {
    id: -102,
    title: 'Consultancy',
    description:
      'Lifecycle guidance from strategy to adoption.\nBook a conversation|/contact\nSolutions overview|/solutions',
    icon: 'globe',
    sort_order: 2,
  },
  {
    id: -103,
    title: 'Insights & resources',
    description:
      'Articles, guides, and events.\nRead the blog|/blog\nInsights hub|/insights',
    icon: 'document',
    sort_order: 3,
  },
  {
    id: -104,
    title: 'Support',
    description:
      'We respond to every inquiry.\nContact us|/contact\nTerms & policies|/page/terms',
    icon: 'heart',
    sort_order: 4,
  },
]

/** Same shape as GET /api/public/faq — use newline in question: line1 = category, rest = title */
export const CORPORATE_HOME_DEV_MOCK_FAQ = [
  {
    id: -201,
    question:
      'Getting started\nHow do I evaluate ApimsTec for our organisation?',
    answer:
      '<p>Start with a short discovery call. We map your workflows, then propose a composable path—platform modules, integrations, and rollout phases.</p>',
    sort_order: 1,
  },
  {
    id: -202,
    question: 'Platform & APIs\nWhere is API documentation hosted?',
    answer:
      '<p>Technical references and release notes are published alongside our insights content. Your team can request sandbox access during onboarding.</p>',
    sort_order: 2,
  },
  {
    id: -203,
    question: 'Security & compliance\nHow do you handle data residency?',
    answer:
      '<p>We design for regulated environments. Discuss region, encryption, and audit requirements with our team so the deployment matches your policy.</p>',
    sort_order: 3,
  },
  {
    id: -204,
    question: 'Industries\nDo you support automotive and equipment finance?',
    answer:
      '<p>Yes. Purpose-built journeys for lenders, OEMs, dealers, and enterprises are part of our industry solutions catalogue.</p>',
    sort_order: 4,
  },
  {
    id: -205,
    question: 'Pricing\nIs pricing public?',
    answer:
      '<p>Engagement models depend on modules and services. Contact us for a tailored quote aligned to your scale and timelines.</p>',
    sort_order: 5,
  },
  {
    id: -206,
    question: 'Partnerships\nDo you work with systems integrators?',
    answer:
      '<p>We collaborate with SI partners for implementation and long-term adoption. Reach out to discuss partner programmes.</p>',
    sort_order: 6,
  },
]

export function getCorporateHomeDevMocks() {
  return {
    sectionTitle: CORPORATE_HOME_DEV_MOCK_SECTION_TITLE,
    html: CORPORATE_HOME_DEV_MOCK_HTML.trim(),
    cards: CORPORATE_HOME_DEV_MOCK_CARDS,
    faq: CORPORATE_HOME_DEV_MOCK_FAQ,
  }
}

/**
 * @param {{ content: string, faq: unknown[], cards: unknown[], sectionTitle: string, force: boolean }} p
 */
export function mergeCorporateHomeDevContent(p) {
  const { content, faq, cards, sectionTitle, force } = p
  const mocks = getCorporateHomeDevMocks()

  if (force) {
    return {
      cmsHtml: mocks.html,
      landingFaq: mocks.faq,
      landingCards: mocks.cards,
      cardsSectionTitle: mocks.sectionTitle,
    }
  }

  const html = typeof content === 'string' && content.trim() ? content : mocks.html
  const faqMerged = Array.isArray(faq) && faq.length > 0 ? faq : mocks.faq
  const cardsMerged = Array.isArray(cards) && cards.length > 0 ? cards : mocks.cards
  const title =
    typeof sectionTitle === 'string' && sectionTitle.trim() ? sectionTitle : mocks.sectionTitle

  return {
    cmsHtml: html,
    landingFaq: faqMerged,
    landingCards: cardsMerged,
    cardsSectionTitle: title,
  }
}
