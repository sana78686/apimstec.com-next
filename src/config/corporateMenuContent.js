/**
 * NETSOL-style mega menu + section placeholder copy (per language).
 * CMS-driven pages: /page/:slug (English default, no locale prefix in URL).
 */

const en = {
  platform: {
    title: 'Platform',
    tagline: 'An AI-driven, composable platform that unifies digital retail, asset finance, and loan servicing with trust and transparency.',
    overviewLabel: 'Overview',
    basePath: 'platform',
    items: [
      { slug: 'transcend-platform', title: 'Transcend Platform', description: 'Composable core for lenders, OEMs, dealers, and fleets.' },
      { slug: 'digital-retail', title: 'Digital Retail', description: 'Unified showroom and online journeys into one seamless experience.' },
      { slug: 'finance-ai-labs', title: 'Finance AI Labs', description: 'Applied AI for credit, servicing, and document intelligence.' },
      { slug: 'integrations', title: 'Integrations & APIs', description: 'Connect your ecosystem with secure, well-documented APIs.' },
      { slug: 'trust-compliance', title: 'Trust & compliance', description: 'Controls and visibility designed for regulated industries.' },
    ],
  },
  consultancy: {
    title: 'Consultancy',
    tagline: 'Lifecycle consultancy for BFSI that compounds ROI.',
    overviewLabel: 'Overview',
    basePath: 'consultancy',
    items: [
      { slug: 'information-security', title: 'Information Security', description: 'Real-time defense with audit-ready compliance.' },
      { slug: 'generative-ai', title: 'Generative AI', description: 'Practical GenAI for workflows, risk, and customer experience.' },
      { slug: 'regulatory-compliance', title: 'Regulatory compliance', description: 'Navigate change with domain-led advisory.' },
      { slug: 'digital-transformation', title: 'Digital transformation', description: 'Roadmaps that align technology with business outcomes.' },
      { slug: 'data-analytics', title: 'Data & analytics', description: 'Decision-grade insight across the asset lifecycle.' },
    ],
  },
  solutions: {
    title: 'Solutions',
    tagline: 'Industry solutions tailored to how you originate, service, and scale.',
    overviewLabel: 'Overview',
    basePath: 'solutions',
    items: [
      { slug: 'auto-fleet', title: 'Auto & fleet', description: 'Finance and retail programs for mobility and fleet operators.' },
      { slug: 'banking-lending', title: 'Banking & lending', description: 'Modern lending stacks with transparency and control.' },
      { slug: 'oem-dealer', title: 'OEM & dealer', description: 'Programs that connect factory, dealer, and end customer.' },
      { slug: 'equipment-finance', title: 'Equipment finance', description: 'Lifecycle tools for machinery and commercial assets.' },
      { slug: 'managed-services', title: 'Managed services', description: 'Operate and evolve your platform with dedicated experts.' },
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
    title: 'Platform',
    tagline: 'Platform komposit yang didorong AI untuk menyatukan ritel digital, pembiayaan aset, dan layanan pinjaman dengan transparansi.',
    overviewLabel: 'Ringkasan',
    basePath: 'platform',
    items: en.platform.items.map((item, i) => ({
      ...item,
      title: ['Platform Transcend', 'Ritel Digital', 'Finance AI Labs', 'Integrasi & API', 'Kepercayaan & kepatuhan'][i],
      description: [
        'Inti komposit untuk pemberi pinjaman, OEM, dealer, dan armada.',
        'Perjalanan showroom dan daring dalam satu pengalaman mulus.',
        'AI terapan untuk kredit, layanan, dan dokumen.',
        'Hubungkan ekosistem Anda dengan API yang aman.',
        'Kendali dan visibilitas untuk industri terregulasi.',
      ][i],
    })),
  },
  consultancy: {
    title: 'Konsultansi',
    tagline: 'Konsultansi siklus hidup untuk BFSI yang memperkuat ROI.',
    overviewLabel: 'Ringkasan',
    basePath: 'consultancy',
    items: en.consultancy.items.map((item, i) => ({
      ...item,
      title: ['Keamanan informasi', 'Generative AI', 'Kepatuhan regulasi', 'Transformasi digital', 'Data & analitik'][i],
      description: [
        'Pertahanan real-time dengan kepatuhan siap audit.',
        'GenAI praktis untuk alur kerja dan risiko.',
        'Menavigasi perubahan dengan advisori berdomain.',
        'Peta jalan yang menyelaraskan teknologi dan bisnis.',
        'Wawasan untuk pengambilan keputusan di siklus aset.',
      ][i],
    })),
  },
  solutions: {
    title: 'Solusi',
    tagline: 'Solusi industri yang disesuaikan dengan cara Anda beroriginasi dan melayani.',
    overviewLabel: 'Ringkasan',
    basePath: 'solutions',
    items: en.solutions.items.map((item, i) => ({
      ...item,
      title: ['Otomotif & armada', 'Perbankan & pinjaman', 'OEM & dealer', 'Pembiayaan peralatan', 'Layanan terkelola'][i],
      description: [
        'Program pembiayaan dan ritel untuk mobilitas.',
        'Tumpukan pinjaman modern dengan kontrol.',
        'Menghubungkan pabrik, dealer, dan pelanggan.',
        'Alat siklus hidup untuk mesin dan aset komersial.',
        'Operasikan platform Anda bersama ahli.',
      ][i],
    })),
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
    title: 'Plattform',
    tagline: 'Eine KI-gestützte, composable Plattform für Digital Retail, Asset Finance und Loan Servicing mit Transparenz.',
    overviewLabel: 'Überblick',
    basePath: 'platform',
    items: en.platform.items.map((item, i) => ({
      ...item,
      title: ['Transcend Platform', 'Digital Retail', 'Finance AI Labs', 'Integrationen & APIs', 'Vertrauen & Compliance'][i],
      description: [
        'Composable Core für Kreditgeber, OEMs, Händler und Flotten.',
        'Showroom- und Online-Reisen in einem Erlebnis.',
        'Angewandte KI für Kredit, Servicing und Dokumente.',
        'Verbinden Sie Ihr Ökosystem mit sicheren APIs.',
        'Kontrollen für regulierte Branchen.',
      ][i],
    })),
  },
  consultancy: {
    title: 'Beratung',
    tagline: 'Lifecycle-Beratung für BFSI mit messbarem ROI.',
    overviewLabel: 'Überblick',
    basePath: 'consultancy',
    items: en.consultancy.items.map((item, i) => ({
      ...item,
      title: ['Informationssicherheit', 'Generative KI', 'Regulatorische Compliance', 'Digitale Transformation', 'Daten & Analytik'][i],
      description: [
        'Echtzeit-Abwehr mit auditierbarer Compliance.',
        'Praktische GenKI für Workflows und Risiko.',
        'Veränderungen mit Domain-Expertise navigieren.',
        'Roadmaps für Technologie und Business.',
        'Einblicke über den Asset-Lebenszyklus.',
      ][i],
    })),
  },
  solutions: {
    title: 'Lösungen',
    tagline: 'Branchenlösungen für Origination, Servicing und Skalierung.',
    overviewLabel: 'Überblick',
    basePath: 'solutions',
    items: en.solutions.items.map((item, i) => ({
      ...item,
      title: ['Auto & Flotte', 'Banken & Kredite', 'OEM & Händler', 'Equipment Finance', 'Managed Services'][i],
      description: [
        'Finanz- und Retail-Programme für Mobilität.',
        'Moderne Kredit-Stacks mit Kontrolle.',
        'Werk, Händler und Endkunde verbinden.',
        'Lifecycle-Tools für Maschinen und Anlagen.',
        'Plattform mit Experten betreiben.',
      ][i],
    })),
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
export const CORPORATE_MEGA_SECTION_KEYS = ['platform', 'consultancy', 'solutions', 'about']

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
