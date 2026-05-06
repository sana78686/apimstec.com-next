/**
 * Plain English copy for /solutions/:slug — human tone, simple words,
 * with useful search phrases woven in naturally (not stuffed).
 */

import type { ServiceEasyEnglish } from '@/lib/serviceEasyEnglish'
import type { ApimstecPageSection } from '@/lib/apimstecStaticPages'

const S = (description: string, sections: ApimstecPageSection[]): ServiceEasyEnglish => ({
  description,
  sections,
})

export const SOLUTIONS_EASY_ENGLISH_BY_SLUG: Record<string, ServiceEasyEnglish> = {
  'app-development': S(
    'Apimstec builds mobile apps for businesses—iPhone, Android, or both—with attention to everyday wording and screens people understand on first open.',
    [
      {
        heading: 'What we mean',
        body: 'When we say app development, we mean designing and coding the pages, flows, and hooks behind software that lives on phones or tablets. Sometimes that is a public-facing product under your brand; sometimes it is a staff-only tool behind login. We line everything up with how your team already describes the work, what you can spend, and the guardrails you care about.',
      },
      {
        heading: 'What we do for you',
        body: 'We open with a short discovery conversation and simple sketches so “finished” is not a moving target. Then we build in chunks you can tap through on real devices, check carefully before release, and leave room afterwards for fixes—handled like small planned steps, not panic edits at midnight.',
      },
      {
        heading: 'Talk to us',
        body: 'Use the contact page and describe who will use the app and what headache it removes. We write back in straight English with one suggestion for what to do next—a pilot scope, a rough schedule idea, or questions we still need answered.',
      },
    ],
  ),
  'game-development': S(
    'We create games and playful interactive experiences—mostly mobile-first—where Apimstec handles design support, engineering, and getting a stable build into players’ hands.',
    [
      {
        heading: 'What we offer',
        body: 'Casual games, learning games, branded mini-games for marketing, and prototypes you can show to investors all fit here. We care about smooth frame rates on common phones, readable menus, and onboarding that does not confuse first-time players.',
      },
      {
        heading: 'From idea to playable build',
        body: 'Game development is part creative and part engineering. We help you lock core loops early—what the player does, earns, or unlocks—then grow content when the fun is proven. When you are ready, we talk about app store listing basics and soft launches with a small audience.',
      },
      {
        heading: 'Keeping it maintainable',
        body: 'Live games need patches. We structure projects so balance tweaks, seasonal events, or new levels do not become a nightmare six months later. If you plan ads or in-app purchases later, we can wire hooks cleanly from the start.',
      },
      {
        heading: 'Reach out',
        body: 'Share a short pitch: genre, art style level, and target age group. We suggest a sensible milestone plan.',
      },
    ],
  ),
  'software-development': S(
    'Custom software development for teams that outgrow spreadsheets—web portals, internal tools, and connected systems built around how you already work.',
    [
      {
        heading: 'Where we help most',
        body: 'Booking flows, inventory helpers, partner portals, approval queues, and reporting hubs are typical asks. We write maintainable code, document the important parts, and host or deploy where you prefer—cloud setups are common because backups and scaling are easier when planned early.',
      },
      {
        heading: 'Quality without drama',
        body: 'Good software development today includes automated checks where they save time, staging sites you can click through before go-live, and security habits like sensible passwords and roles. We explain trade-offs in everyday language so stakeholders are not lost.',
      },
      {
        heading: 'Long-term partnership',
        body: 'Products change. We prefer agreements where small fixes and upgrades have a clear path instead of “call us when it breaks.” That steady rhythm keeps custom software useful for years.',
      },
      {
        heading: 'Start a conversation',
        body: 'Describe the workflow that hurts today and who uses it. We come back with scope options—not a wall of jargon.',
      },
    ],
  ),
  'digital-marketing': S(
    'Digital marketing services that aim at real leads and searches people actually type—SEO, content, social, and paid campaigns explained in plain reports.',
    [
      {
        heading: 'Getting found online',
        body: 'Search engine optimization (SEO) still matters because free clicks add up. We audit your site structure, page titles, and content gaps, then propose fixes your team can approve. Local businesses often need maps and reviews tuned; online shops need category pages that match buyer intent.',
      },
      {
        heading: 'Content and social',
        body: 'We help plan blogs, landing pages, and short videos that answer customer questions—not fluff nobody reads. Social media marketing works best when it matches where your buyers hang out, whether that is LinkedIn for B2B or short clips for consumer brands.',
      },
      {
        heading: 'Paid ads when you are ready',
        body: 'Paid search and paid social can jump-start demand while organic work compounds. We set clear budgets, track conversions in a simple dashboard, and trim what does not pay back. You always see where money went and what moved the needle.',
      },
      {
        heading: 'Talk to Apimstec',
        body: 'Send your website link and your main goal—calls, sign-ups, or sales. We respond with a starter checklist you can act on.',
      },
    ],
  ),
  'e-commerce-solutions': S(
    'E-commerce solutions from catalog setup to secure checkout—custom builds or trusted platforms—so selling online feels straightforward for you and your buyers.',
    [
      {
        heading: 'Stores that convert',
        body: 'We implement product pages with clean photos, honest shipping notes, and cart flows that work on phones. Payment gateways, taxes, and inventory basics are wired carefully because mistakes there cost trust fast.',
      },
      {
        heading: 'Platforms vs custom',
        body: 'Many brands launch faster on a proven storefront toolkit; others need a bespoke storefront tied to odd warehouse rules. We map SKUs, variants, and refunds before coding so you are not patching holes after launch.',
      },
      {
        heading: 'Growth hooks',
        body: 'Email capture, abandoned-cart reminders, simple loyalty rules, and analytics tags help you learn what sells. We keep tracking GDPR-friendly where it applies and explain cookie banners in words shoppers understand.',
      },
      {
        heading: 'Tell us your shop idea',
        body: 'Share product count, markets you ship to, and whether you already take payments online. We propose a path that matches your pace.',
      },
    ],
  ),
}

export function getSolutionsEasyEnglish(slug: string): ServiceEasyEnglish | undefined {
  return SOLUTIONS_EASY_ENGLISH_BY_SLUG[slug]
}
