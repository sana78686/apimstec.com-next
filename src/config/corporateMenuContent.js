/**
 * NETSOL-style mega menu + section placeholder copy (per language).
 * CMS-driven pages: /page/:slug (English default, no locale prefix in URL).
 */

function flattenCategoryItems(categories) {
  if (!Array.isArray(categories)) return []
  return categories.flatMap((c) => (Array.isArray(c.items) ? c.items : []))
}

/** Services mega menu (English): URLs live under /services/{slug} */
const APIMSTEC_PLATFORM_SERVICE_CATEGORIES_EN = [
  {
    id: 'ai-ml',
    label: 'AI & ML',
    tagline:
      'We help software notice patterns, answer questions, and assist users—explained in normal words so your team stays in control.',
    items: [
      {
        slug: 'ai-development',
        title: 'AI Development',
        description: 'We shape AI features for your product and test them before real users depend on them.',
      },
      {
        slug: 'generative-ai',
        title: 'Generative AI',
        description: 'Tools that draft text or images from prompts, hooked up safely to your brand rules.',
      },
      {
        slug: 'machine-learning',
        title: 'Machine Learning',
        description: 'Software that learns from examples so it can sort, score, or flag new rows for you.',
      },
      {
        slug: 'computer-vision',
        title: 'Computer Vision',
        description: 'Programs that read photos or video—for shelves, quality checks, or counting items.',
      },
      {
        slug: 'natural-language-processing',
        title: 'Natural Language Processing',
        description: 'Reading and tagging text so search, support, and filing take less manual work.',
      },
      {
        slug: 'agentic-ai',
        title: 'Agentic AI',
        description: 'Step-by-step helpers that move between tools you already use, with people approving big moves.',
      },
      {
        slug: 'predictive-analytics',
        title: 'Predictive Analytics',
        description: 'Using past numbers to sketch what demand, risk, or busy periods might look like next.',
      },
    ],
  },
  {
    id: 'software-development',
    label: 'Software Development',
    tagline: 'We build apps for phones and browsers, software shaped around your process, and online products customers pay for monthly.',
    items: [
      {
        slug: 'mobile-app-development',
        title: 'Mobile App Development',
        description: 'Apps for iPhone and Android with updates and store basics handled carefully.',
      },
      {
        slug: 'custom-software-development',
        title: 'Custom Software Development',
        description: 'Screens and workflows built around how your company actually operates.',
      },
      {
        slug: 'web-app-development',
        title: 'Web App Development',
        description: 'Secure browser-based tools your team logs into from anywhere.',
      },
      {
        slug: 'saas-solutions',
        title: 'SaaS Solutions',
        description: 'Many customers sharing one product online—with separate data and simple billing.',
      },
      {
        slug: 'aiaas-solutions',
        title: 'AIaaS Solutions',
        description: 'Your clients switch on AI through your product under fair limits and plain pricing.',
      },
      {
        slug: 'information-technology',
        title: 'Information Technology (IT)',
        description: 'Day-to-day tech care: devices, networks, backups, and vendors.',
      },
    ],
  },
  {
    id: 'intelligent-systems',
    label: 'Intelligent Systems',
    tagline: 'We cut boring clicks, add chat helpers, and suggest useful next steps—always with rules you choose.',
    items: [
      {
        slug: 'business-intelligence',
        title: 'Business Intelligence',
        description: 'Weekly charts and tables leadership agrees on—fed from real company data.',
      },
      {
        slug: 'process-automation',
        title: 'Process Automation',
        description: 'Repeating hand-offs between systems happen on their own until a person must decide.',
      },
      {
        slug: 'chatbot-development',
        title: 'Chatbot Development',
        description: 'Guided chats that answer common questions and collect details before staff step in.',
      },
      {
        slug: 'conversational-ai',
        title: 'Conversational AI',
        description: 'Freer typing in chat while the assistant stays on-topic and hands off when needed.',
      },
      {
        slug: 'bot-automation',
        title: 'Bot automation',
        description: 'Small software workers that update tickets, CRM fields, or alerts overnight.',
      },
      {
        slug: 'recommendation-systems',
        title: 'Recommendation Systems',
        description: '"You might also like" lists based on what people viewed or bought.',
      },
      {
        slug: 'rag-as-a-service',
        title: 'RAG as a service',
        description: 'Ask-your-documents style answers drawn only from files you approved.',
      },
    ],
  },
  {
    id: 'data-services',
    label: 'Data Services',
    tagline: 'We pull facts out of messy files, gather allowed web data, and turn rows into pictures your team trusts.',
    items: [
      {
        slug: 'data-science-analytics',
        title: 'Data Science & Analytics',
        description: 'Digging into numbers with charts and tests so leaders see what changed and why.',
      },
      {
        slug: 'web-scraping',
        title: 'Web Scraping',
        description: 'Gathering public listings or prices you may legally use—slowly and politely.',
      },
      {
        slug: 'data-extraction',
        title: 'Data Extraction',
        description: 'Pulling names, amounts, and dates out of PDFs, scans, and old spreadsheets.',
      },
      {
        slug: 'audio-analysis',
        title: 'Audio Analysis',
        description: 'Turning calls or recordings into searchable text and simple signals.',
      },
      {
        slug: 'deep-learning',
        title: 'Deep Learning',
        description: 'Heavier pattern matching for hard problems—only when lighter tools are not enough.',
      },
    ],
  },
]

/** Hosting mega menu (English): URLs live under /hosting/{slug} */
const APIMSTEC_HOSTING_CATEGORIES_EN = [
  {
    id: 'host-deploy',
    label: 'HOST AND DEPLOY',
    tagline:
      'Host websites and apps with clear plans—shared, cloud, or VPS—with WordPress-focused options. Every plan includes the Plesk control panel so you manage sites, domains, mail, and backups in one place.',
    items: [
      {
        slug: 'web-hosting',
        title: 'Web hosting',
        description: 'Host any site quickly, easily, and securely—with Plesk included.',
      },
      {
        slug: 'cloud-hosting',
        title: 'Cloud hosting',
        description: 'Scale with more power and resources when traffic grows—with Plesk included.',
      },
      {
        slug: 'vps-hosting',
        title: 'VPS hosting',
        description: 'Dedicated-style power with a managed VPS—with Plesk included.',
      },
      {
        slug: 'wordpress-hosting',
        title: 'WordPress hosting',
        description: 'Optimized stacks for fast, secure, easy-to-manage WordPress sites—with Plesk included.',
      },
    ],
  },
]

const en = {
  platform: {
    title: 'Services',
    tagline:
      'We are an IT company. Browse AI, apps, automation, and data help—each page uses simple English.',
    basePath: 'services',
    categories: APIMSTEC_PLATFORM_SERVICE_CATEGORIES_EN,
    items: flattenCategoryItems(APIMSTEC_PLATFORM_SERVICE_CATEGORIES_EN),
  },
  hosting: {
    title: 'Hosting',
    tagline: 'Host and deploy websites and apps with plans explained in plain language—not hidden upsells.',
    overviewLabel: 'Overview',
    basePath: 'hosting',
    categories: APIMSTEC_HOSTING_CATEGORIES_EN,
    items: flattenCategoryItems(APIMSTEC_HOSTING_CATEGORIES_EN),
  },
  solutions: {
    title: 'Solutions',
    tagline:
      'Five practical tracks we deliver as an IT company: apps, games, custom software, digital marketing, and online stores.',
    overviewLabel: 'Overview',
    basePath: 'solutions',
    items: [
      {
        slug: 'app-development',
        title: 'App Development',
        description:
          'Mobile apps for iPhone and Android—clear wording on screens and steady pacing from kickoff to release.',
      },
      {
        slug: 'game-development',
        title: 'Game Development',
        description: 'Playable mobile games and branded experiences with room to grow after launch.',
      },
      {
        slug: 'software-development',
        title: 'Software Development',
        description: 'Custom web tools and internal systems that match how your team works today.',
      },
      {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'SEO, content, social, and paid campaigns with reports you can actually read.',
      },
      {
        slug: 'e-commerce-solutions',
        title: 'E-Commerce Solutions',
        description: 'Online shops, secure checkout, and catalogs tuned for phones and repeat buyers.',
      },
    ],
  },
  about: {
    title: 'About Us',
    tagline: 'Technology, trust, and domain expertise in motion.',
    overviewLabel: 'Overview',
    basePath: 'about',
    items: [
      { slug: 'board-of-directors', title: 'Board of Directors', description: 'Stewards of vision, integrity, and long-term growth.' },
      { slug: 'management-team', title: 'Management Team', description: 'Pioneering the architecture of modern finance.' },
      { slug: 'news', title: 'News', description: 'Innovation, progress, and insight from across ApimsTec.' },
      { slug: 'investors', title: 'Investors', description: 'Driving sustainable value through strategic growth.' },
      { slug: 'careers', title: 'Careers', description: 'Join the people powering the future of asset finance and technology.' },
    ],
  },
  marketplace: {
    title: 'Marketplace',
    tagline: 'Discover partners, extensions, and services that extend your platform.',
    overviewLabel: 'Overview',
    basePath: 'marketplace',
    items: [],
  },
  insights: {
    title: 'Insights',
    tagline: 'Perspectives on technology, regulation, and the future of finance.',
    overviewLabel: 'Overview',
    basePath: 'insights',
    items: [],
  },
}

const id = {
  platform: {
    title: 'Layanan',
    tagline:
      'Teknik, AI, sistem cerdas, dan data—diorganisir agar Anda dapat menjajaki layanan yang sesuai roadmap.',
    basePath: 'services',
    categories: APIMSTEC_PLATFORM_SERVICE_CATEGORIES_EN,
    items: flattenCategoryItems(APIMSTEC_PLATFORM_SERVICE_CATEGORIES_EN),
  },
  hosting: {
    title: 'Hosting',
    tagline: 'Hosting dan deployment untuk website serta aplikasi dengan paket yang mudah dipahami.',
    overviewLabel: 'Ringkasan',
    basePath: 'hosting',
    categories: APIMSTEC_HOSTING_CATEGORIES_EN,
    items: flattenCategoryItems(APIMSTEC_HOSTING_CATEGORIES_EN),
  },
  solutions: {
    title: 'Solusi',
    tagline:
      'Lima jalur praktis dari Apimstec: aplikasi, game, perangkat lunak khusus, pemasaran digital, dan toko online.',
    overviewLabel: 'Ringkasan',
    basePath: 'solutions',
    items: [
      {
        slug: 'app-development',
        title: 'Pengembangan aplikasi',
        description: 'Aplikasi mobile untuk iPhone dan Android—berpusat pada pengguna nyata.',
      },
      {
        slug: 'game-development',
        title: 'Pengembangan game',
        description: 'Game mobile dan pengalaman bermerek yang bisa dikembangkan setelah rilis.',
      },
      {
        slug: 'software-development',
        title: 'Pengembangan perangkat lunak',
        description: 'Alat web dan sistem internal yang mengikuti cara kerja tim Anda.',
      },
      {
        slug: 'digital-marketing',
        title: 'Pemasaran digital',
        description: 'SEO, konten, sosial media, dan iklan berbayar dengan laporan yang jelas.',
      },
      {
        slug: 'e-commerce-solutions',
        title: 'Solusi e-commerce',
        description: 'Toko online, pembayaran aman, dan katalog yang nyaman di ponsel.',
      },
    ],
  },
  about: {
    title: 'Tentang kami',
    tagline: 'Teknologi, kepercayaan, dan keahlian domain dalam gerak.',
    overviewLabel: 'Ringkasan',
    basePath: 'about',
    items: en.about.items.map((item, i) => ({
      ...item,
      title: ['Dewan direksi', 'Tim manajemen', 'Berita', 'Investor', 'Karier'][i],
      description: [
        'Pengelola visi, integritas, dan pertumbuhan jangka panjang.',
        'Merintis arsitektur keuangan modern.',
        'Inovasi dan wawasan dari seluruh ApimsTec.',
        'Nilai berkelanjutan melalui pertumbuhan strategis.',
        'Bergabung dengan tim yang mendorong masa depan teknologi dan keuangan.',
      ][i],
    })),
  },
  marketplace: {
    title: 'Marketplace',
    tagline: 'Temukan mitra, ekstensi, dan layanan untuk memperluas platform Anda.',
    overviewLabel: 'Ringkasan',
    basePath: 'marketplace',
    items: [],
  },
  insights: {
    title: 'Wawasan',
    tagline: 'Perspektif tentang teknologi, regulasi, dan masa depan keuangan.',
    overviewLabel: 'Ringkasan',
    basePath: 'insights',
    items: [],
  },
}

const de = {
  platform: {
    title: 'Leistungen',
    tagline:
      'Engineering, KI, intelligente Systeme und Daten—übersichtlich nach Themen, passend zu Ihrer Roadmap.',
    basePath: 'services',
    categories: APIMSTEC_PLATFORM_SERVICE_CATEGORIES_EN,
    items: flattenCategoryItems(APIMSTEC_PLATFORM_SERVICE_CATEGORIES_EN),
  },
  hosting: {
    title: 'Hosting',
    tagline: 'Websites und Apps zuverlässig hosten—klare Pakete ohne verschleierte Zusatzkosten.',
    overviewLabel: 'Überblick',
    basePath: 'hosting',
    categories: APIMSTEC_HOSTING_CATEGORIES_EN,
    items: flattenCategoryItems(APIMSTEC_HOSTING_CATEGORIES_EN),
  },
  solutions: {
    title: 'Lösungen',
    tagline:
      'Fünf praktische Bereiche: Apps, Games, individuelle Software, Digital Marketing und Online-Shops.',
    overviewLabel: 'Überblick',
    basePath: 'solutions',
    items: [
      {
        slug: 'app-development',
        title: 'App-Entwicklung',
        description: 'Mobile Apps für iPhone und Android—nutzerzentriert und release-fähig.',
      },
      {
        slug: 'game-development',
        title: 'Game-Entwicklung',
        description: 'Spielbare Mobile Games und Markenerlebnisse mit Wachstum nach Launch.',
      },
      {
        slug: 'software-development',
        title: 'Software-Entwicklung',
        description: 'Maßgeschneiderte Web-Tools und interne Systeme nach Ihren Abläufen.',
      },
      {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'SEO, Content, Social Media und Paid Campaigns mit verständlichen Reports.',
      },
      {
        slug: 'e-commerce-solutions',
        title: 'E-Commerce-Lösungen',
        description: 'Onlineshops, sichere Kasse und Kataloge für Mobilgeräte.',
      },
    ],
  },
  about: {
    title: 'Über uns',
    tagline: 'Technologie, Vertrauen und Domain-Expertise in Bewegung.',
    overviewLabel: 'Überblick',
    basePath: 'about',
    items: en.about.items.map((item, i) => ({
      ...item,
      title: ['Vorstand', 'Management', 'News', 'Investoren', 'Karriere'][i],
      description: [
        'Hüter von Vision, Integrität und langfristigem Wachstum.',
        'Architektur der modernen Finanzwelt.',
        'Innovation und Einblicke von ApimsTec.',
        'Nachhaltiger Wert durch strategisches Wachstum.',
        'Werden Sie Teil des Teams für Technologie und Finance.',
      ][i],
    })),
  },
  marketplace: {
    title: 'Marketplace',
    tagline: 'Partner, Erweiterungen und Services für Ihre Plattform.',
    overviewLabel: 'Überblick',
    basePath: 'marketplace',
    items: [],
  },
  insights: {
    title: 'Insights',
    tagline: 'Perspektiven zu Technologie, Regulierung und Zukunft der Finanzwelt.',
    overviewLabel: 'Überblick',
    basePath: 'insights',
    items: [],
  },
}

export const corporateMenuContent = { en, id, de }

/** Sections that use mega-menu / mobile accordion children */
export const CORPORATE_MEGA_SECTION_KEYS = ['platform', 'hosting', 'solutions', 'about']

export function getCorporateSection(lang, sectionKey) {
  const pack = corporateMenuContent[lang] || corporateMenuContent.en
  return pack[sectionKey] || null
}

export function resolvePlaceholderMeta(lang, sectionKey, slug) {
  const data = getCorporateSection(lang, sectionKey)
  if (!data) {
    return { title: 'ApimsTec', description: '' }
  }
  if (!slug) {
    return { title: data.title, description: data.tagline }
  }
  const item = data.items?.find((i) => i.slug === slug)
  if (item) {
    return { title: item.title, description: item.description }
  }
  return { title: data.title, description: data.tagline }
}

/**
 * Services mega-menu grouping: sibling URLs under /services/{slug} in the same category only.
 * @returns {{ categoryLabel: string, navItems: { slug: string, title: string }[] }}
 */
export function getPlatformServicePeers(lang, slug) {
  const platform = getCorporateSection(lang, 'platform')
  const fallbackNav = () =>
    (platform?.items ?? []).map((i) => ({
      slug: i.slug,
      title: i.title,
    }))

  if (!platform || !slug) {
    return { categoryLabel: platform?.title || 'Services', navItems: fallbackNav() }
  }

  const categories = platform.categories
  if (Array.isArray(categories) && categories.length > 0) {
    for (const cat of categories) {
      const raw = cat.items || []
      if (raw.some((i) => i.slug === slug)) {
        return {
          categoryLabel: cat.label || platform.title || 'Services',
          navItems: raw.map((i) => ({ slug: i.slug, title: i.title })),
        }
      }
    }
  }

  return { categoryLabel: platform.title || 'Services', navItems: fallbackNav() }
}

/**
 * Hosting plan siblings under /hosting/{slug} (single mega-menu group).
 */
export function getHostingPeers(lang, _slug) {
  const hosting = getCorporateSection(lang, 'hosting')
  const raw =
    (Array.isArray(hosting?.categories) && hosting.categories[0]?.items?.length
      ? hosting.categories[0].items
      : null) || hosting?.items || []

  const navItems = raw.map((i) => ({ slug: i.slug, title: i.title }))
  return {
    categoryLabel: 'Hosting plans',
    navItems,
  }
}
