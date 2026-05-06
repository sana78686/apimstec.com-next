/**
 * Rich layout copy for /solutions/:slug (Apimstec — plain English).
 * Metadata titles/descriptions still come from buildApimstecChildPage / menu.
 */

export type SolutionFaqItem = { q: string; a: string }

export type SolutionHeroVisualId = 'phone' | 'game' | 'software' | 'marketing' | 'commerce'

export type SolutionRichContent = {
  heroVisual: SolutionHeroVisualId
  lead: string
  features: string[]
  faq: SolutionFaqItem[]
  thumbLeft: string
  thumbRight: string
}

export const SOLUTION_RICH_CONTENT: Record<string, SolutionRichContent> = {
  'app-development': {
    heroVisual: 'phone',
    lead:
      'Apimstec plans and builds mobile apps your customers or staff open every day. We stay beside you while layouts take shape, explain choices in everyday words, and keep releases tied to what your business actually needs—not buzzwords.',
    features: [
      'Screens and flows people understand without long manuals',
      'Work targeting both major phone platforms when that saves you time and money',
      'Features shaped around bookings, forms, maps, or payments—not generic templates',
      'Connections to sign-in, maps, or payment tools you already rely on',
      'Care for speed on common phones and weaker networks',
      'Space after launch for fixes and sensible upgrades',
    ],
    faq: [
      {
        q: 'What does Apimstec deliver on an app project?',
        a: 'We cover discovery, interface planning, development, device testing, store-ready builds when you need them, and a steady channel after launch for small fixes. You always know what screen or milestone comes next.',
      },
      {
        q: 'How do you check quality before we go live?',
        a: 'We exercise core flows on real phones, invite your team to click through staging builds, and fix blocking issues before release. Nothing ships as a surprise bundle the night before.',
      },
      {
        q: 'Can we grow the app after the first version?',
        a: 'Yes. We structure work so new modules or experiments can slot in later. Many clients ship a tight first release, learn from users, then fund the next slice with clear priorities.',
      },
      {
        q: 'What is it like to work with your team week to week?',
        a: 'Short updates, visible demos, and wording you can forward to non-technical colleagues. If something slips, we say so early and agree on the trade-off together.',
      },
    ],
    thumbLeft: '📱',
    thumbRight: '📊',
  },
  'game-development': {
    heroVisual: 'game',
    lead:
      'Apimstec builds Unity games and mobile-first titles—tight core loops, readable HUD on small screens, and pipelines you can patch after launch without tearing the project apart.',
    features: [
      'Unity engineering when gameplay, physics, or cross-platform stores call for it',
      'Early focus on one core loop so fun shows up before heavy content spend',
      'Readable UI on common phones, including older models your audience still uses',
      'Room for rewards, levels, or seasonal events once the base feels right',
      'Soft-launch builds so you test with a small crowd before a wide release',
      'Hooks for ads or in-app purchases later, wired in a tidy way when you ask',
    ],
    faq: [
      {
        q: 'What kinds of games does Apimstec build?',
        a: 'Casual and mid-core Unity titles, learning games, marketing mini-games, and prototypes you can show buyers or investors. We stay honest if an idea needs more design time before production ramps up.',
      },
      {
        q: 'How do you keep quality high?',
        a: 'We play builds on real devices, watch loading times, and fix blocking bugs before milestones. You get short clips or builds you can share inside your company.',
      },
      {
        q: 'Can we add content after launch?',
        a: 'Yes. We set up projects so new levels, events, or offers do not mean rewriting the whole app each time.',
      },
      {
        q: 'How do we start with Apimstec?',
        a: 'Send a short note through the contact page: genre, audience age range, and art style level. We reply with a sensible first milestone.',
      },
    ],
    thumbLeft: '🎮',
    thumbRight: '🏆',
  },
  'software-development': {
    heroVisual: 'software',
    lead:
      'Apimstec builds custom software when off-the-shelf tools stop fitting—internal portals, partner-facing sites, and workflows that match how your team actually works today.',
    features: [
      'Requirements captured in plain language before large builds begin',
      'Web-based tools your staff reach from a browser with secure sign-in',
      'Staging links you can click before anything goes live for customers',
      'Straightforward connections between programs you already pay for',
      'Backups and hosting choices explained without vendor fog',
      'A steady path for fixes and upgrades after launch',
    ],
    faq: [
      {
        q: 'What counts as custom software at Apimstec?',
        a: 'Anything from approval queues and dashboards to customer portals and data-heavy internal apps. If spreadsheets are breaking, we map a software path that fits.',
      },
      {
        q: 'How do you handle testing?',
        a: 'We run sensible checks on critical paths, invite your team to try staging, and log issues in one place so nothing gets lost.',
      },
      {
        q: 'Will we own the work?',
        a: 'Yes—with clear notes on hosting, domains, and repos so you are not locked out of your own product.',
      },
      {
        q: 'What should we send first?',
        a: 'Describe the job that hurts most and who does it daily. That becomes our north star for scope.',
      },
    ],
    thumbLeft: '💻',
    thumbRight: '🗂️',
  },
  'digital-marketing': {
    heroVisual: 'marketing',
    lead:
      'Apimstec helps your business get found and trusted online—search-friendly pages, helpful content, social presence, and paid campaigns—with reports that tell a straight story.',
    features: [
      'Keyword and page checks so people find you for the right searches',
      'Blog and landing-page plans tied to questions buyers already ask',
      'Social posts that match where your audience actually spends time',
      'Paid search or paid social budgets tracked against leads or sales',
      'Simple dashboards so you see what changed month to month',
      'Edits in everyday English—no mystery charts without context',
    ],
    faq: [
      {
        q: 'What does Apimstec handle in digital marketing?',
        a: 'SEO basics, content calendars, social posting rhythms, and paid ads when you are ready. We sequence work so quick wins fund bigger bets.',
      },
      {
        q: 'How long before we see results?',
        a: 'Some fixes show in weeks; content and search gains often take longer. We give honest ranges instead of promises nobody can keep.',
      },
      {
        q: 'Do we need a big budget?',
        a: 'No. We start where your spend matches your stage and scale efforts when numbers justify it.',
      },
      {
        q: 'How do we begin?',
        a: 'Share your website link and your main goal—calls, leads, or cart sales. We send a short checklist you can approve.',
      },
    ],
    thumbLeft: '📈',
    thumbRight: '✉️',
  },
  'e-commerce-solutions': {
    heroVisual: 'commerce',
    lead:
      'Apimstec sets up online selling that feels safe for shoppers and calm for your team—catalogs, carts, checkout, and the small details that stop abandoned baskets.',
    features: [
      'Product pages with clear photos, sizes, and shipping notes people trust',
      'Checkout that works well on phones—where most buyers decide',
      'Payment and tax wiring checked before you announce a launch',
      'Inventory and variant rules spelled out before launch-day surprises',
      'Email capture and gentle reminders for carts left behind',
      'Help after go-live when prices, promos, or returns shift',
    ],
    faq: [
      {
        q: 'Can Apimstec use our existing store platform?',
        a: 'Often yes—many teams launch on a trusted storefront toolkit; others need custom ties to warehouse tools. We map what you sell before picking the path.',
      },
      {
        q: 'How do you protect payments?',
        a: 'We follow provider guidance for PCI-minded setups, test checkout flows, and never bury fees in fine print you cannot explain to customers.',
      },
      {
        q: 'What if we ship to more countries later?',
        a: 'We plan currencies, taxes, and messaging early so growth does not mean rebuilding everything.',
      },
      {
        q: 'How do we kick off?',
        a: 'Tell us product count, shipping regions, and whether payments already run online. We answer with a phased plan.',
      },
    ],
    thumbLeft: '🛒',
    thumbRight: '📦',
  },
}

export function getSolutionRichContent(slug: string): SolutionRichContent | undefined {
  return SOLUTION_RICH_CONTENT[slug]
}

export function isSolutionRichSlug(slug: string): boolean {
  return slug in SOLUTION_RICH_CONTENT
}
