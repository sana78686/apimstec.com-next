/**
 * Easy English marketing copy for Apimstec (software, mobile apps, SaaS, marketing, SEO, blog).
 * Keep sentences short. Tone: clear and friendly, not the same as other sites in the repo.
 */

export type ApimstecPageSection = { heading: string; body: string }

export type ApimstecStaticPage = {
  /** Short `metadata` title, e.g. "Platform" → "Platform | Apimstec" via site template */
  shortTitle: string
  description: string
  kicker: string
  title: string
  subtitle: string
  /** Hero tint class suffix for CSS */
  heroTint: 'navy' | 'blue' | 'slate' | 'teal'
  sections: ApimstecPageSection[]
}

const pages: Record<string, ApimstecStaticPage> = {
  services: {
    shortTitle: 'Services',
    description:
      'Apimstec is an IT company. Here you can browse what we do—from AI and apps to automation and data—in everyday words.',
    kicker: 'Services',
    title: 'Services we offer',
    subtitle:
      'We build and run technology for businesses: smart features, software, helpers that answer questions, and clear reports from your numbers.',
    heroTint: 'navy',
    sections: [
      {
        heading: 'How to read these pages',
        body: 'Pick a topic below or from the menu. Each page explains what the service is, what we actually do for clients, and how to reach us without memorizing tech terms.',
      },
      {
        heading: 'Who we are',
        body: 'We are an IT company. We write software, ship phone and web apps, connect systems, and help you understand data. If you need your website or marketing touched, we can help there too.',
      },
      {
        heading: 'Want to talk?',
        body: 'Use the contact page and describe your goal in plain language. We answer the same way and suggest a sensible first step.',
      },
    ],
  },
  marketplace: {
    shortTitle: 'Marketplace',
    description: 'Find tools and add-ons from Apimstec and partners to help your team and your website.',
    kicker: 'Add-ons and tools',
    title: 'Marketplace',
    subtitle: 'A simple place to find extra tools and add-ons that plug into what we already built for you.',
    heroTint: 'blue',
    sections: [
      {
        heading: 'Why we use a marketplace',
        body: 'We want you to add only what you need. New tools can be tested and turned on without a long IT project when possible.',
      },
      {
        heading: 'What you might see here',
        body: 'Connectors for your website, reporting helpers, marketing add-ons, and more. Listings are described in plain language so you can choose quickly.',
      },
    ],
  },
  hosting: {
    shortTitle: 'Hosting',
    description:
      'Apimstec offers web, cloud, VPS, and WordPress hosting—with Plesk as the control panel on every plan.',
    kicker: 'Host and deploy',
    title: 'Hosting built for clarity',
    subtitle:
      'Pick the capacity that fits—shared, scalable cloud, VPS, or WordPress-tuned stacks. You always get Plesk to manage sites, SSL, mail, and backups without juggling raw server panels alone.',
    heroTint: 'teal',
    sections: [
      {
        heading: 'Plans that map to real needs',
        body: 'Compare four paths below: Web hosting for typical sites, Cloud hosting when traffic spikes matter, VPS hosting when you want isolated resources, and WordPress hosting tuned for speed and safer updates. There is no separate “Plesk product”—Plesk is the hosting control panel we include so your team can manage domains, files, databases, and restore points in one familiar UI.',
      },
      {
        heading: 'WordPress hosting',
        body: 'WordPress plans focus on fast stacks, thoughtful caching defaults, and practical guidance on plugins and updates so marketing teams keep publishing instead of fighting mystery errors.',
      },
      {
        heading: 'Talk to Apimstec',
        body: 'Use the contact page with your domain, rough traffic, and whether you are migrating an existing site. We suggest a realistic tier and migration checklist before you pay for capacity you will not use.',
      },
    ],
  },
  solutions: {
    shortTitle: 'Solutions',
    description:
      'Apimstec delivers app development, game development, software builds, digital marketing, and e-commerce—each explained without hype.',
    kicker: 'Solutions',
    title: 'Solutions we ship',
    subtitle:
      'Pick a track below: mobile apps, games, custom software, growth marketing, or online selling. Every page tells you what we actually do.',
    heroTint: 'navy',
    sections: [
      {
        heading: 'Built for busy owners',
        body: 'These five paths cover how most clients find us. You might need one or several over time—many teams start with an app or shop, then add SEO and content once the product is live.',
      },
      {
        heading: 'Simple words, clear scope',
        body: 'We are an IT company, but we write like humans. Expect honest timelines, visible milestones, and pricing ranges discussed early.',
      },
      {
        heading: 'Tell us your priority',
        body: 'Use the contact page with a short note about your market and deadline. We route you to the right squad inside Apimstec.',
      },
    ],
  },
  insights: {
    shortTitle: 'Insights',
    description: 'Short articles and tips from Apimstec on software, SEO, marketing, and product ideas.',
    kicker: 'Ideas in plain language',
    title: 'Insights',
    subtitle: 'Small lessons we share so you can make better decisions without a computer science degree.',
    heroTint: 'slate',
    sections: [
      {
        heading: 'What you will find',
        body: 'Notes on building SaaS, improving SEO, content ideas for your blog, and how we work with clients. We keep the tone friendly and the words simple.',
      },
      {
        heading: 'Our blog',
        body: 'Longer posts and updates live in the Blog area. You can start there for deep dives, and use this page to see the big themes we care about.',
      },
    ],
  },
  about: {
    shortTitle: 'About',
    description: 'Apimstec makes software, mobile apps, and SaaS, and we help with marketing, SEO, and blogging.',
    kicker: 'Our company',
    title: 'About Apimstec',
    subtitle: 'We help businesses build and grow with technology—without making it sound harder than it is.',
    heroTint: 'blue',
    sections: [
      {
        heading: 'What we do',
        body: 'We design and build software, mobile applications, and SaaS products. We also support marketing, search engine work (SEO), and blogging so your online presence matches your product.',
      },
      {
        heading: 'How we think',
        body: 'We like clear plans, small releases, and honest timelines. We explain work in easy English and avoid hiding behind technical terms when we can.',
      },
      {
        heading: 'Why work with us',
        body: 'You get a partner who can join your story from the first idea to a live product, and who can help you keep your website and content moving forward.',
      },
    ],
  },
  'about-careers': {
    shortTitle: 'Careers',
    description: 'Work at Apimstec—build software, mobile apps, and SaaS with a friendly team.',
    kicker: 'Join the team',
    title: 'Careers',
    subtitle: 'We look for people who like to build, learn, and explain things simply.',
    heroTint: 'teal',
    sections: [
      {
        heading: 'What we value',
        body: 'Respect, curiosity, and clear communication. You do not need to know every tool on day one—we learn together.',
      },
      {
        heading: 'Roles we often hire',
        body: 'Developers, designers, and people who can help clients with product and content. We list open roles when we can.',
      },
      {
        heading: 'How to reach us',
        body: 'Send a message through the Contact page. Tell us what you have built and what you want to learn next.',
      },
    ],
  },
  'about-news': {
    shortTitle: 'News',
    description: 'News and updates from Apimstec in simple language.',
    kicker: 'Company news',
    title: 'News',
    subtitle: 'Short updates about our work, our team, and the projects we are proud to share.',
    heroTint: 'slate',
    sections: [
      {
        heading: 'What we post here',
        body: 'Product news, new services, and stories from our clients when they agree to share. We keep posts short and easy to read.',
      },
    ],
  },
}

export function getApimstecPage(slug: keyof typeof pages | string): ApimstecStaticPage {
  const p = pages[slug as string]
  if (!p) {
    return {
      shortTitle: 'Page',
      description: 'Apimstec—technology and digital services in clear language.',
      kicker: 'Apimstec',
      title: 'Page',
      subtitle: 'This page is not set up yet. Please use the menu or go back to the home page.',
      heroTint: 'slate',
      sections: [],
    }
  }
  return p
}

export const apimstecPageSlugs = Object.keys(pages) as (keyof typeof pages)[]
