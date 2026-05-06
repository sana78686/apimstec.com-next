/**
 * Rich layout copy for /hosting/:slug (Apimstec — plain English).
 */

export type HostingFaqItem = { q: string; a: string }

export type HostingHeroTone = 'web' | 'cloud' | 'vps' | 'wordpress'

export type HostingRichContent = {
  heroTone: HostingHeroTone
  lead: string
  features: string[]
  faq: HostingFaqItem[]
  thumbLeft: string
  thumbRight: string
}

export const HOSTING_RICH_CONTENT: Record<string, HostingRichContent> = {
  'web-hosting': {
    heroTone: 'web',
    lead:
      'Apimstec web hosting gets brochure sites, landing pages, and light apps online quickly—with SSL, backups, and the Plesk panel included so your team manages files and mail without wrestling the server.',
    features: [
      'Straightforward tiers tied to traffic and storage—not mystery bundles',
      'Free TLS certificates wired through Plesk renewals you can see',
      'Scheduled backups with restore paths your operators understand',
      'Email boxes or forwarding shaped to how you actually work',
      'Staging-friendly workflows when you want to click before going live',
      'Human support when DNS or migrations get tense',
    ],
    faq: [
      {
        q: 'Is Plesk extra?',
        a: 'No. Plesk is the control panel we ship with this tier so you manage domains, databases, and mailboxes from one login.',
      },
      {
        q: 'Can you move my existing site?',
        a: 'Yes—send your current host panel details or exports through the contact page and we schedule a migration checklist.',
      },
      {
        q: 'What if I outgrow shared hosting?',
        a: 'We map the next step—usually cloud or VPS—with downtime windows discussed upfront.',
      },
      {
        q: 'Do you lock me into yearly contracts?',
        a: 'We explain renewal terms before you pay. Shorter cycles are available where it makes sense.',
      },
    ],
    thumbLeft: '🌐',
    thumbRight: '🔒',
  },
  'cloud-hosting': {
    heroTone: 'cloud',
    lead:
      'Cloud hosting from Apimstec adds headroom when campaigns spike or APIs wake up at night—still managed through Plesk where it fits, with scaling discussions tied to real graphs.',
    features: [
      'Elastic CPU/RAM steps instead of guessing months ahead',
      'Health checks and alerts when error rates climb',
      'Load-balancer friendly guidance if you bring multiple nodes',
      'Database sizing conversations before invoices surprise you',
      'Geographic or CDN hooks when latency matters',
      'Runbooks your developers can follow during incidents',
    ],
    faq: [
      {
        q: 'How is this different from VPS?',
        a: 'Cloud focuses on horizontal scaling and burst-friendly billing models; VPS isolates fixed resources. We recommend based on your traffic shape.',
      },
      {
        q: 'Will I still use Plesk?',
        a: 'Often yes for application stacks—complex clusters may mix panels and IaC; we document whichever blend we deploy.',
      },
      {
        q: 'How fast can we scale?',
        a: 'Depends on architecture—we rehearse scale-up paths during onboarding so approvals do not happen mid-fire drill.',
      },
      {
        q: 'Do you monitor uptime?',
        a: 'We configure sensible probes and paging rules with you—not anonymous dashboards nobody watches.',
      },
    ],
    thumbLeft: '☁️',
    thumbRight: '📈',
  },
  'vps-hosting': {
    heroTone: 'vps',
    lead:
      'Apimstec VPS hosting gives predictable resources for heavier databases, custom apps, or compliance-minded isolation—with managed patching paths and Plesk where operators prefer a GUI.',
    features: [
      'Dedicated resources spelled out in plain CPU/RAM/disk terms',
      'Snapshots before risky upgrades',
      'Firewall templates tuned to your exposure surface',
      'SSH plus optional Plesk—the blend matches your team skills',
      'IPv6 and reverse DNS handled without riddles',
      'Escalation contacts who answer during production incidents',
    ],
    faq: [
      {
        q: 'Do I get root?',
        a: 'When your agreement calls for it—otherwise managed paths reduce midnight breakage.',
      },
      {
        q: 'Backups—whose responsibility?',
        a: 'We configure automated snapshots and test restores on a cadence you approve.',
      },
      {
        q: 'PCI or HIPAA contexts?',
        a: 'We scope separation and logging expectations early—no pretend certifications.',
      },
      {
        q: 'Can I downgrade later?',
        a: 'Yes when workloads shrink—we schedule migrations so data lands cleanly.',
      },
    ],
    thumbLeft: '🖥️',
    thumbRight: '🛡️',
  },
  'wordpress-hosting': {
    heroTone: 'wordpress',
    lead:
      'WordPress hosting at Apimstec pairs caching-friendly stacks with disciplined plugin hygiene—Plesk remains your cockpit for domains, cron views, and backups without surrendering performance.',
    features: [
      'Opcode-friendly PHP versions upgraded on coordinated windows',
      'Malware scans with clear quarantine steps',
      'Staging snapshots before WooCommerce or checkout edits',
      'Cron visibility so mystery emails stop disappearing',
      'Collaborator roles for agencies without sharing owner passwords',
      'WP-CLI paths documented for developers who prefer terminals',
    ],
    faq: [
      {
        q: 'Multisite networks?',
        a: 'Supported where architecture fits—we flag plugin conflicts early.',
      },
      {
        q: 'Do you guarantee Core updates?',
        a: 'We schedule them with rollback snapshots—not blind auto-updates on Fridays.',
      },
      {
        q: 'Heavy builders like Elementor?',
        a: 'We tune PHP limits and object caches realistically—no magic “unlimited” promises.',
      },
      {
        q: 'Can we ship files via Git?',
        a: 'Often yes alongside WP workflows—we agree on deploy hooks before mixing pipelines.',
      },
    ],
    thumbLeft: '📝',
    thumbRight: '⚡',
  },
}

export function getHostingRichContent(slug: string): HostingRichContent | undefined {
  return HOSTING_RICH_CONTENT[slug]
}

export function isHostingRichSlug(slug: string): boolean {
  return slug in HOSTING_RICH_CONTENT
}
