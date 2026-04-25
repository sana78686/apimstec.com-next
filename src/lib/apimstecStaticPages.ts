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
  platform: {
    shortTitle: 'Platform',
    description:
      'Apimstec builds a connected software platform so your teams can work in one place with less manual work.',
    kicker: 'What we build',
    title: 'A platform you can grow with',
    subtitle: 'We connect your tools, data, and workflows. You get fewer mistakes and a clearer view of the business.',
    heroTint: 'navy',
    sections: [
      {
        heading: 'What “platform” means here',
        body: 'It is a set of software building blocks. We can start small, then add new parts when you are ready. You do not need to replace everything on day one.',
      },
      {
        heading: 'How we help you',
        body: 'We design APIs, data flows, and security so your apps talk to each other. We can host in the cloud and help you meet basic rules in your industry.',
      },
      {
        heading: 'Good fit for you if…',
        body: 'You want one clear path for your digital work. You are tired of copy-paste between systems, or you need a plan before you build more mobile apps and SaaS features.',
      },
    ],
  },
  marketplace: {
    shortTitle: 'Marketplace',
    description: 'Find tools and add-ons from Apimstec and partners to help your team and your website.',
    kicker: 'Add-ons and tools',
    title: 'Marketplace',
    subtitle: 'A simple place to find extra tools, integrations, and services that work with our platform.',
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
  consultancy: {
    shortTitle: 'Consultancy',
    description: 'Apimstec helps you plan and deliver software, mobile, SaaS, and digital projects in simple steps.',
    kicker: 'Guidance, not jargon',
    title: 'Consulting that stays practical',
    subtitle: 'We help you turn ideas into a clear plan, then we stay with you through build and launch.',
    heroTint: 'teal',
    sections: [
      {
        heading: 'What we do first',
        body: 'We listen, write down the goal in plain English, and list risks and costs early. You always know the next small step before we write a lot of code.',
      },
      {
        heading: 'Areas we often help with',
        body: 'Mobile app planning, SaaS product design, SEO and content strategy for your site, and marketing setup that does not need a full-time expert on day one.',
      },
      {
        heading: 'How we work with your team',
        body: 'We can coach your people, or build with you. Reports are short and use words everyone can read.',
      },
    ],
  },
  solutions: {
    shortTitle: 'Solutions',
    description: 'See how Apimstec helps teams in your space with software, SaaS, and digital projects.',
    kicker: 'By industry and need',
    title: 'Solutions for real teams',
    subtitle: 'We group our work by what you actually do, not by a long list of buzzwords.',
    heroTint: 'navy',
    sections: [
      {
        heading: 'Built around your work',
        body: 'Whether you run a small business or a growing company, we map software to the jobs people do every day.',
      },
      {
        heading: 'SaaS and mobile in one story',
        body: 'Many clients want a web app for staff and a mobile app for customers. We make sure both match the same data and the same simple story on your website.',
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
