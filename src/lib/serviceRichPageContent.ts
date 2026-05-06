/**
 * Rich layout copy for /services/:slug (Apimstec — plain English).
 * Hero/subtitle metadata still come from buildApimstecChildPage / menu where applicable.
 */

export type ServiceFaqItem = { q: string; a: string }

/** Hero band treatment inside the shared rich layout */
export type ServiceHeroVisualId =
  | 'service-ai'
  | 'service-software'
  | 'service-mobile'
  | 'service-automation'
  | 'service-data'
  | 'service-intel'

export type ServiceRichContent = {
  heroVisual: ServiceHeroVisualId
  lead: string
  features: string[]
  faq: ServiceFaqItem[]
  thumbLeft: string
  thumbRight: string
}

function contactClose(...parts: string[]): ServiceFaqItem {
  return {
    q: parts[0] ?? 'How do we start?',
    a:
      parts[1] ??
      'Use the contact page with a short note about your goal and timeline. We answer in plain English with one clear next step.',
  }
}

export const SERVICE_RICH_CONTENT: Record<string, ServiceRichContent> = {
  /* ——— AI & ML ——— */
  'ai-development': {
    heroVisual: 'service-ai',
    lead:
      'Apimstec designs and ships AI features inside products people already use—bounded by your rules, tested before anyone relies on them, and explained in words managers can repeat.',
    features: [
      'Discovery workshops that turn “AI” into one concrete job per release',
      'Safety rails: permissions, logging, and human review where stakes are high',
      'Benchmarks on your own data—not demo screenshots',
      'Integration with sign-in, billing, and support tools you already run',
      'Staging builds your team can click before customers see anything',
      'Care after launch for drift, bugs, and sensible upgrades',
    ],
    faq: [
      {
        q: 'What counts as AI development with Apimstec?',
        a: 'Practical features such as classification, ranking, assistants, or perception—not slides about futures. We scope what trains, what runs in production, and who owns the outcome.',
      },
      {
        q: 'Do we need a huge dataset on day one?',
        a: 'Not always. We tell you honestly what each milestone needs. Sometimes we start with off-the-shelf pieces plus your labels; sometimes we need more examples before training spend makes sense.',
      },
      {
        q: 'How do you handle mistakes?',
        a: 'We design fallbacks, confidence thresholds, and escalation paths. Important actions stay with people until you are comfortable automating further.',
      },
      contactClose(
        'What should we send first?',
        'Describe one user story: who clicks what, and what “good” looks like. Screenshots or a rough workflow help.',
      ),
    ],
    thumbLeft: '🧠',
    thumbRight: '⚡',
  },
  'generative-ai': {
    heroVisual: 'service-ai',
    lead:
      'Apimstec wires generative tools—text, images, or drafts—into your product or internal workflows with brand limits, access rules, and staff training so output stays on-policy.',
    features: [
      'Prompt templates and guardrails tuned to your tone',
      'Secure routing so prompts do not leak secrets',
      'Admin switches to turn modules off during incidents',
      'Evaluation sets so you see quality before wide rollout',
      'Human review queues where drafts need approval',
      'Documentation your support team can actually follow',
    ],
    faq: [
      {
        q: 'Can we use our own documents?',
        a: 'Yes when retrieval is appropriate. We map sources, permissions, and refresh cycles so answers trace back to files you approved.',
      },
      {
        q: 'How do you reduce hallucinations?',
        a: 'Grounded retrieval, tight scopes, and tests on awkward questions. We never promise zero mistakes—we plan for them.',
      },
      {
        q: 'Which providers do you support?',
        a: 'We stay vendor-flexible and pick based on fit, cost, and privacy. You see trade-offs before we lock anything in.',
      },
      contactClose(),
    ],
    thumbLeft: '✨',
    thumbRight: '📝',
  },
  'machine-learning': {
    heroVisual: 'service-ai',
    lead:
      'Apimstec builds learning systems from your examples—sorting, scoring, anomaly hints—with honest notes about data needs and error rates tied to business decisions.',
    features: [
      'Label and data audits before expensive training',
      'Baseline rules so ML must beat something simple',
      'Monitoring hooks when patterns drift',
      'Exports your analysts can open without fancy tooling',
      'Latency planning for online versus batch scoring',
      'Plain-language readouts for leadership reviews',
    ],
    faq: [
      {
        q: 'When is machine learning the wrong choice?',
        a: 'When clear rules exist, data is thin, or costs outweigh gains. We say so early rather than selling complexity.',
      },
      {
        q: 'Who owns the models?',
        a: 'You do—with repos, configs, and runbooks documented so you are not locked out.',
      },
      {
        q: 'How long until something usable?',
        a: 'Depends on data cleanliness and acceptance tests. We ship thin slices you can measure rather than one giant finish line.',
      },
      contactClose(),
    ],
    thumbLeft: '📊',
    thumbRight: '🎯',
  },
  'computer-vision': {
    heroVisual: 'service-ai',
    lead:
      'Apimstec turns camera uploads and video frames into reliable signals—labels, counts, damage hints—with attention to lighting, cheap phones, and what happens when the model shrugs.',
    features: [
      'Capture guidance so field shots are usable',
      'Edge versus cloud trade-offs explained upfront',
      'Human review for low-confidence frames',
      'Benchmarks on real site photos, not catalog-perfect shots',
      'Exports into tickets, ERP lines, or dashboards',
      'Iteration budgets after go-live',
    ],
    faq: [
      {
        q: 'Do we need special cameras?',
        a: 'Usually no—often phones suffice if angles and lighting are coached. We prototype with what teams already carry.',
      },
      {
        q: 'Can it run offline?',
        a: 'Sometimes. We map latency, battery, and update paths before promising disconnected mode.',
      },
      {
        q: 'What about bias or fairness?',
        a: 'We review classes and sample coverage with you. Sensitive decisions stay gated by policy.',
      },
      contactClose(
        'What samples help?',
        'Send a small anonymized set showing typical and messy cases—not only perfect examples.',
      ),
    ],
    thumbLeft: '📷',
    thumbRight: '🔍',
  },
  'natural-language-processing': {
    heroVisual: 'service-ai',
    lead:
      'Apimstec helps software read and organize text—search, tagging, routing, light summaries—so people spend less time on dull sorting and more on decisions.',
    features: [
      'Language and encoding checks for messy inbound text',
      'Entity lists tuned to your domain vocabulary',
      'Privacy-preserving flows when messages are sensitive',
      'Plug-ins to help desks, CRMs, or file stores',
      'Measuring precision/recall on your own gold set',
      'Rollback-friendly deployments',
    ],
    faq: [
      {
        q: 'Does this replace staff?',
        a: 'It removes repetitive triage. Teams still handle judgment calls—we surface context faster.',
      },
      {
        q: 'Multilingual support?',
        a: 'Yes where models fit your languages and compliance needs—we validate on real snippets.',
      },
      {
        q: 'Can we keep data on-prem?',
        a: 'Sometimes constraints steer architecture. We document where text flows and who can see it.',
      },
      contactClose(),
    ],
    thumbLeft: '💬',
    thumbRight: '🗂️',
  },
  'agentic-ai': {
    heroVisual: 'service-ai',
    lead:
      'Apimstec builds step-by-step assistants that hop between tools you already pay for—with checkpoints, audit trails, and stops where money or compliance matters.',
    features: [
      'Workflow maps before any autonomous loop',
      'Credential vault patterns your security team can accept',
      'Dry-run mode to rehearse sequences',
      'Alerts when a step fails or needs a person',
      'Templates for common finance or ops flows',
      'Sunset switches if you need to pause automation',
    ],
    faq: [
      {
        q: 'Is this “set and forget”?',
        a: 'No. Humans stay in the loop for high-stakes steps. Logs show what ran and why.',
      },
      {
        q: 'How fast do agents run?',
        a: 'We tune parallelism versus API limits. Heavy jobs move to queues with visible status.',
      },
      {
        q: 'What if vendor APIs change?',
        a: 'We version adapters and tests so breaks surface in staging first.',
      },
      contactClose(
        'Best first project?',
        'Pick one repetitive multi-tool task with clear inputs—invoice intake, ticket enrichment, or nightly reconciliations.',
      ),
    ],
    thumbLeft: '🤖',
    thumbRight: '🔗',
  },
  'predictive-analytics': {
    heroVisual: 'service-ai',
    lead:
      'Apimstec builds forecasts from your history—demand hints, busy periods, risk signals—shown as charts people trust with caveats printed beside the numbers.',
    features: [
      'Clean lineage from raw tables to chart tiles',
      'Scenario sliders where leadership asks “what if?”',
      'Alert thresholds that avoid pager fatigue',
      'Seasonality and holiday handling discussed openly',
      'Documentation of known blind spots',
      'Refresh schedules matched to decision cadence',
    ],
    faq: [
      {
        q: 'Are forecasts guarantees?',
        a: 'No. We pair predictions with confidence and historical error so planners stay grounded.',
      },
      {
        q: 'What data feeds models?',
        a: 'Only sources you approve. We inventory joins and gaps before promising accuracy.',
      },
      {
        q: 'Can ops teams maintain it?',
        a: 'We hand off notebooks or dashboards with training—not black boxes only engineers understand.',
      },
      contactClose(),
    ],
    thumbLeft: '📈',
    thumbRight: '📅',
  },

  /* ——— Software ——— */
  'mobile-app-development': {
    heroVisual: 'service-mobile',
    lead:
      'Apimstec ships mobile apps for iPhone and Android—including Unity games and playful branded titles when that is the right engine—with sane release pacing, store-ready builds, and crash visibility after launch.',
    features: [
      'Unity pipelines when gameplay or 3D is central to the product',
      'Native or cross-platform choices explained with upkeep costs',
      'Offline-first thinking where field teams need it',
      'Push, deep links, and entitlement patterns wired cleanly',
      'Performance budgets on common devices',
      'Roadmaps for updates without rewriting each quarter',
    ],
    faq: [
      {
        q: 'When do you recommend Unity?',
        a: 'When you need rich interaction, animation, or game loops shared across phones and tablets. For simple forms-first apps we may steer elsewhere.',
      },
      {
        q: 'Do you publish to the stores?',
        a: 'We prep listings, screenshots guidance, and submission packages; your accounts stay yours.',
      },
      {
        q: 'How do you test games versus utility apps?',
        a: 'Gameplay passes on mid-tier devices plus scripted journeys for purchases or login. We split crash analytics by build channel.',
      },
      contactClose(
        'Kickoff checklist?',
        'Audience, monetization model, platforms, and whether Unity is already chosen—or ask us to recommend.',
      ),
    ],
    thumbLeft: '📱',
    thumbRight: '🕹️',
  },
  'custom-software-development': {
    heroVisual: 'service-software',
    lead:
      'Apimstec writes software around how your company truly operates—approvals, exceptions, and audit trails included—so teams graduate from brittle spreadsheets.',
    features: [
      'Requirements captured in everyday language',
      'Role-based access baked in from sprint one',
      'Staging URLs decision-makers can click',
      'APIs that fit your existing roster of tools',
      'Hosting and backup choices spelled out',
      'Training slices so adoption sticks',
    ],
    faq: [
      {
        q: 'Will we own the code?',
        a: 'Yes—with repos, environments, and keys documented in one place.',
      },
      {
        q: 'How do we phase delivery?',
        a: 'Vertical slices that prove value early—never six months of invisible work.',
      },
      {
        q: 'Can you rescue a stalled project?',
        a: 'Often. We audit what exists, stabilize paths users rely on, then chart refactors honestly.',
      },
      contactClose(),
    ],
    thumbLeft: '🛠️',
    thumbRight: '📋',
  },
  'web-app-development': {
    heroVisual: 'service-software',
    lead:
      'Apimstec builds secure browser apps—accounts, workflows, admin panels—with attention to speed, accessibility basics, and hosting that matches real traffic.',
    features: [
      'Design systems aligned to your brand without reinventing wheels',
      'Session and CSRF hygiene explained to your security contacts',
      'Progressive enhancement where connectivity is uneven',
      'Observability on errors and slow endpoints',
      'Content Security Policy guidance',
      'Deployment pipelines you can repeat',
    ],
    faq: [
      {
        q: 'SPA or multi-page?',
        a: 'We pick based on SEO needs, team skills, and offline demands—no dogma.',
      },
      {
        q: 'Accessibility level?',
        a: 'We hit sensible defaults and escalate where regulations demand more.',
      },
      {
        q: 'Integrations?',
        a: 'OAuth, SAML, or API keys—mapped with expiration and rotation.',
      },
      contactClose(),
    ],
    thumbLeft: '🌐',
    thumbRight: '🔐',
  },
  'saas-solutions': {
    heroVisual: 'service-software',
    lead:
      'Apimstec helps you ship a shared online product—many tenants, fair billing, upgrade paths—with foundations that do not collapse when the second customer arrives.',
    features: [
      'Tenant isolation patterns reviewed with your risk posture',
      'Plan and metering sketches before engineering locks choices',
      'Signup-to-first-value journeys measured',
      'Operational emails that respect branding',
      'Invoice and tax hooks planned early',
      'Supportability features—impersonation flags, audit logs',
    ],
    faq: [
      {
        q: 'Multi-region needs?',
        a: 'We chart data residency early—it shifts architecture.',
      },
      {
        q: 'Trial abuse?',
        a: 'Rate limits, device fingerprinting where appropriate, and manual review hooks.',
      },
      {
        q: 'Can we migrate legacy users?',
        a: 'Yes—with dual-write or batch strategies scoped per downtime tolerance.',
      },
      contactClose(),
    ],
    thumbLeft: '☁️',
    thumbRight: '💳',
  },
  'aiaas-solutions': {
    heroVisual: 'service-ai',
    lead:
      'Apimstec packages AI as a metered feature inside your SaaS—clear quotas, honest docs for downstream buyers, and guardrails so support stays survivable.',
    features: [
      'Usage accounting APIs your billing team understands',
      'Fair-use messaging surfaced in-product',
      'Kill switches per tenant during incidents',
      'Latency tiers—batch versus realtime—priced honestly',
      'Synthetic monitors on core prompts',
      'Partner-ready SLA language drafted together',
    ],
    faq: [
      {
        q: 'Who pays model vendor bills?',
        a: 'We map pass-through versus markup models transparently.',
      },
      {
        q: 'How do upgrades roll out?',
        a: 'Feature flags and cohort rollout so you can observe spend spikes.',
      },
      {
        q: 'Data isolation?',
        a: 'Tenant-scoped stores and keys—reviewed before launch.',
      },
      contactClose(),
    ],
    thumbLeft: '🔌',
    thumbRight: '📡',
  },
  'information-technology': {
    heroVisual: 'service-software',
    lead:
      'Apimstec keeps offices running—devices, Wi‑Fi, backups, vendors—with ticketing rhythm and documentation so outages do not depend on one hero employee.',
    features: [
      'Inventory that matches finance records',
      'Patch windows communicated clearly',
      'Backup drill schedules—not just checkbox policies',
      'Guest and contractor access patterns',
      'Escalation trees after hours',
      'Vendor liaison so quotes stay comparable',
    ],
    faq: [
      {
        q: 'Remote and hybrid support?',
        a: 'Yes—MDM, VPN health checks, and laptop swaps shipped where needed.',
      },
      {
        q: 'Microsoft 365 or Google Workspace?',
        a: 'Both—we align identity, groups, and retention to your compliance stance.',
      },
      {
        q: 'Security tooling?',
        a: 'We integrate endpoint agents you choose without stacking duplicates blindly.',
      },
      contactClose(),
    ],
    thumbLeft: '🖥️',
    thumbRight: '📶',
  },

  /* ——— Intelligent systems ——— */
  'business-intelligence': {
    heroVisual: 'service-intel',
    lead:
      'Apimstec stitches spreadsheets and databases into Monday-ready dashboards—definitions everyone agrees on so arguments move from “whose number?” to “what next?”',
    features: [
      'Metric dictionaries written in business English',
      'Refresh schedules aligned to close cycles',
      'Row-level security where teams should not see everything',
      'Mobile-friendly snapshots for executives',
      'Export paths to slides without screenshot gymnastics',
      'Cost-aware warehouse choices',
    ],
    faq: [
      {
        q: 'Tools?',
        a: 'We stay pragmatic—Power BI, Looker, Metabase, or custom—matched to your stack.',
      },
      {
        q: 'Single source of truth myths?',
        a: 'We document known duplicates and phased cleanup rather than pretending.',
      },
      {
        q: 'Training?',
        a: 'Hands-on sessions with real scenarios from your company—not generic labs.',
      },
      contactClose(),
    ],
    thumbLeft: '📊',
    thumbRight: '📑',
  },
  'process-automation': {
    heroVisual: 'service-automation',
    lead:
      'Apimstec replaces soul-crushing copy-paste between systems with monitored flows—exceptions routed to people, logs proving what happened.',
    features: [
      'As-is maps workshops with sticky-note honesty',
      'Idempotent jobs so retries do not double-pay',
      'Dead-letter queues humans actually watch',
      'Secrets rotated without midnight scrambles',
      'Simulation runs before flipping production switches',
      'ROI tracked against hours reclaimed',
    ],
    faq: [
      {
        q: 'RPA versus APIs?',
        a: 'We prefer APIs when stable; RPA when legacy UI is the only door—and we say when tech debt will bite.',
      },
      {
        q: 'Failure alerts?',
        a: 'Tiered: chat ping, ticket, then pager rules you approve.',
      },
      {
        q: 'Compliance trails?',
        a: 'Immutable logs with retention tuned to your sector.',
      },
      contactClose(),
    ],
    thumbLeft: '⚙️',
    thumbRight: '🔁',
  },
  'chatbot-development': {
    heroVisual: 'service-automation',
    lead:
      'Apimstec builds guided chat experiences—buttons and scripted branches first—so customers get answers fast while humans receive clean handoffs.',
    features: [
      'Content synced from sources you trust',
      'Localization hooks when regions differ',
      'Fallback pathways that never dead-end',
      'Analytics on drop-off steps',
      'CRM tickets created with full transcript context',
      'Iteration cadence after launch',
    ],
    faq: [
      {
        q: 'Buttons versus free text?',
        a: 'We blend—buttons for speed, typed fallback where variability matters.',
      },
      {
        q: 'Channels?',
        a: 'Web widgets, WhatsApp Business, Slack—scoped per readiness.',
      },
      {
        q: 'Who trains responses?',
        a: 'Your subject experts review—we supply drafting sandboxes.',
      },
      contactClose(),
    ],
    thumbLeft: '💬',
    thumbRight: '📲',
  },
  'conversational-ai': {
    heroVisual: 'service-ai',
    lead:
      'Apimstec layers richer language understanding onto chats—still bounded by policies—with testing on rude inputs, edge cases, and multilingual quirks.',
    features: [
      'Grounded answers where facts must be exact',
      'Tool calls audited step by step',
      'Red-team prompts before launch',
      'Voice versus text modality choices',
      'Handoff summaries agents actually read',
      'Cost caps per conversation',
    ],
    faq: [
      {
        q: 'Difference from classic bots?',
        a: 'More flexible wording—but still needs guardrails and evaluation harnesses.',
      },
      {
        q: 'Hallucination risk?',
        a: 'Mitigated with retrieval, citation habits, and refusal templates.',
      },
      {
        q: 'Latency budgets?',
        a: 'We stream tokens or chunk replies so UX stays snappy.',
      },
      contactClose(),
    ],
    thumbLeft: '🗨️',
    thumbRight: '🎙️',
  },
  'bot-automation': {
    heroVisual: 'service-automation',
    lead:
      'Apimstec deploys software bots that update tickets, CRM fields, and alerts overnight—scheduled, observable, and owned by runbooks your ops team can edit.',
    features: [
      'Secrets separated from scripts',
      'Concurrency caps protecting fragile targets',
      'Dry-run environments mirroring production shapes',
      'Heartbeat monitors proving jobs ran',
      'Owner rotation documented',
      'Change logs tied to deployments',
    ],
    faq: [
      {
        q: 'Platform?',
        a: 'Power Automate, n8n, custom workers—we align to your licenses and skills.',
      },
      {
        q: 'Break-glass?',
        a: 'Manual overrides always exist—we never trap data solely inside bots.',
      },
      {
        q: 'Audit?',
        a: 'Each bot writes structured logs you can ship to SIEM if needed.',
      },
      contactClose(),
    ],
    thumbLeft: '🤖',
    thumbRight: '📬',
  },
  'recommendation-systems': {
    heroVisual: 'service-intel',
    lead:
      'Apimstec tunes “you might also like” surfaces—catalog-aware, cold-start aware, and measurable—so merchandising and editorial teams trust the lists.',
    features: [
      'Cold-start strategies for new items',
      'Fairness reviews when bubbles hurt outcomes',
      'Explainability toggles for staff consoles',
      'A/B hooks baked into serving layers',
      'Caching strategies at scale',
      'Seasonal retraining windows',
    ],
    faq: [
      {
        q: 'Do we need deep learning?',
        a: 'Often not initially—strong baselines beat fancy models with thin data.',
      },
      {
        q: 'Privacy?',
        a: 'We clarify opt-in signals and scrub where regulations demand.',
      },
      {
        q: 'Offline evaluation?',
        a: 'Holdout metrics plus shadow traffic before winner promotion.',
      },
      contactClose(),
    ],
    thumbLeft: '🛒',
    thumbRight: '⭐',
  },
  'rag-as-a-service': {
    heroVisual: 'service-ai',
    lead:
      'Apimstec delivers ask-your-documents experiences—indexes rebuilt when PDFs change, citations visible, and permissions enforced per folder.',
    features: [
      'Chunking tuned to your doc layouts',
      'Hybrid lexical + vector retrieval where helpful',
      'Citation snippets reviewers can click',
      'PII scanning before ingestion',
      'Sandbox tenants for legal review',
      'Throttle limits protecting embedding bills',
    ],
    faq: [
      {
        q: 'On-prem or cloud vectors?',
        a: 'Both feasible—we compare latency, cost, and audit paths.',
      },
      {
        q: 'Multilingual PDFs?',
        a: 'Handled with OCR choices spelled out per language.',
      },
      {
        q: 'Stale answers?',
        a: 'Version tags surface doc freshness in-line.',
      },
      contactClose(),
    ],
    thumbLeft: '📚',
    thumbRight: '🔎',
  },

  /* ——— Data services ——— */
  'data-science-analytics': {
    heroVisual: 'service-data',
    lead:
      'Apimstec explores datasets with clear notebooks and reproducible charts—hypothesis first—so leaders see whether a change moved the needle.',
    features: [
      'Data contracts between producers and consumers',
      'Ethics checkpoints on sensitive fields',
      'Baseline visuals before experiments',
      'Power calculations when samples are small',
      'Code snapshots archived per milestone',
      'Story-ready summaries—not raw dumps',
    ],
    faq: [
      {
        q: 'BI overlap?',
        a: 'Science digs deeper than dashboards; we sync definitions so both match.',
      },
      {
        q: 'Tooling?',
        a: 'Python/R/SQL—whatever fits your stack and hiring pipeline.',
      },
      {
        q: 'Handoff?',
        a: 'Analysts receive runnable notebooks plus README checkpoints.',
      },
      contactClose(),
    ],
    thumbLeft: '🧪',
    thumbRight: '📉',
  },
  'web-scraping': {
    heroVisual: 'service-data',
    lead:
      'Apimstec collects public web data you are legally entitled to—polite crawl rates, robust parsers when layouts shift, and audit trails for sources.',
    features: [
      'robots.txt and terms reviews documented',
      'Backoff strategies when sites hiccup',
      'Change detection alerting teams early',
      'Structured storage ready for BI joins',
      'Fingerprint rotation where permitted',
      'Retention aligned with policy',
    ],
    faq: [
      {
        q: 'Will targets block us?',
        a: 'We engineer respectful pacing and proxies only where allowed—never promise carte blanche.',
      },
      {
        q: 'Maintenance?',
        a: 'Layouts drift—we budget monitors and fixes as ongoing care.',
      },
      {
        q: 'Formats?',
        a: 'JSON, CSV, Parquet—whatever downstream prefers.',
      },
      contactClose(),
    ],
    thumbLeft: '🌍',
    thumbRight: '🗄️',
  },
  'data-extraction': {
    heroVisual: 'service-data',
    lead:
      'Apimstec pulls facts trapped in PDFs, scans, and messy exports into trustworthy rows—with validation queues humans trust when confidence dips.',
    features: [
      'OCR tuning per document family',
      'Confidence scoring surfaced per field',
      'Golden-set regression tests',
      'Human-in-loop reviewers with keyboard shortcuts',
      'Secure transport from inbox to pipeline',
      'Audit snapshots proving extractor versions',
    ],
    faq: [
      {
        q: 'Handwriting?',
        a: 'Possible with caveats—we prototype before promising accuracy.',
      },
      {
        q: 'Languages?',
        a: 'Declared up front; engines differ per script.',
      },
      {
        q: 'ERP posting?',
        a: 'We stage validated batches before journals hit ledgers.',
      },
      contactClose(),
    ],
    thumbLeft: '📄',
    thumbRight: '✅',
  },
  'audio-analysis': {
    heroVisual: 'service-data',
    lead:
      'Apimstec converts calls and recordings into searchable transcripts and light signals—keywords, sentiment hints, QA flags—within privacy rules you set.',
    features: [
      'Speaker diarization where multiple voices overlap',
      'Noise suppression tuned for contact centers',
      'Keyword lists editable without redeploys',
      'Retention timers per jurisdiction',
      'Exports to BI or coaching tools',
      'Sampling QA on transcript accuracy',
    ],
    faq: [
      {
        q: 'Real-time versus batch?',
        a: 'Both paths—latency dictates architecture.',
      },
      {
        q: 'PCI or HIPAA contexts?',
        a: 'Scoped workflows with redaction patterns reviewed jointly.',
      },
      {
        q: 'Languages and accents?',
        a: 'Benchmarked on your samples—not marketing benchmarks.',
      },
      contactClose(),
    ],
    thumbLeft: '🎧',
    thumbRight: '📝',
  },
  'deep-learning': {
    heroVisual: 'service-ai',
    lead:
      'When lighter ML misses messy vision, speech, or language tasks, Apimstec trains deeper models—with sober talk about data appetite, GPU cost, and maintenance.',
    features: [
      'Baselines proving uplift before scaling GPUs',
      'Experiment tracking and reproducible seeds',
      'Compressed deployments where edge chips matter',
      'Monitoring for input drift',
      'Fallback tiers when models abstain',
      'Knowledge transfer sessions for your engineers',
    ],
    faq: [
      {
        q: 'Do we always need deep learning?',
        a: 'No—we escalate only after simpler candidates fail fair benchmarks.',
      },
      {
        q: 'Label volume?',
        a: 'Estimated early with sampling plans—no surprise milestones.',
      },
      {
        q: 'Explainability?',
        a: 'Techniques vary by modality—we pair outputs with uncertainty cues.',
      },
      contactClose(),
    ],
    thumbLeft: '🔬',
    thumbRight: '🧮',
  },
}

export function getServiceRichContent(slug: string): ServiceRichContent | undefined {
  return SERVICE_RICH_CONTENT[slug]
}

export function isServiceRichSlug(slug: string): boolean {
  return slug in SERVICE_RICH_CONTENT
}
