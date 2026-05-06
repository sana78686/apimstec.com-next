/**
 * Plain English body copy for /services/:slug pages (Apimstec as an IT company).
 * Keep wording simple — avoid buzzwords like “optimize”, “utilize”, “leverage”.
 */

import type { ApimstecPageSection } from '@/lib/apimstecStaticPages'

export type ServiceEasyEnglish = {
  /** When set, used for meta description and hero subtitle */
  description?: string
  sections: ApimstecPageSection[]
}

const S = (
  description: string,
  sections: ApimstecPageSection[],
): ServiceEasyEnglish => ({ description, sections })

/** keyed by URL slug under /services */
export const SERVICE_EASY_ENGLISH_BY_SLUG: Record<string, ServiceEasyEnglish> = {
  'ai-development': S(
    'We are an IT company. We plan and build AI features inside your apps so they can help users with real tasks.',
    [
      {
        heading: 'What we mean',
        body: 'Artificial intelligence here means software that can spot patterns, answer questions, or suggest next steps. We design those pieces so they fit your business rules and your team can trust them.',
      },
      {
        heading: 'What we do for you',
        body: 'We talk with you about the problem, choose a sensible technical path, then build and test the feature. We stay involved after launch so fixes and updates are not rushed guesses.',
      },
      {
        heading: 'Talk to us',
        body: 'Tell us what you want users to experience on the contact page. We reply in simple language with a clear next step.',
      },
    ],
  ),
  'generative-ai': S(
    'We help you use tools that create text, images, or drafts from prompts—wired safely into your product or internal workflows.',
    [
      {
        heading: 'What we mean',
        body: '“Generative” tools produce new content from a short instruction. That can mean draft emails, help articles, or images for marketing. We connect them to your data only where it makes sense.',
      },
      {
        heading: 'What we do for you',
        body: 'As your IT partner we set up the plumbing: accounts, safety checks, and user screens. We train your staff so they know what the tool is good at and what it should not do.',
      },
      {
        heading: 'Talk to us',
        body: 'Describe who will use the tool and what they should get out of it. We suggest a small pilot before anything big.',
      },
    ],
  ),
  'machine-learning': S(
    'We build systems that learn from examples in your data, then apply those lessons to new cases—such as sorting items or spotting unusual records.',
    [
      {
        heading: 'What we mean',
        body: 'Machine learning is a way to teach software from past examples instead of writing every rule by hand. You need enough sample data and clear goals.',
      },
      {
        heading: 'What we do for you',
        body: 'We prepare data with you, train models, and embed results into your apps or reports. We explain results in everyday words so managers can follow along.',
      },
      {
        heading: 'Talk to us',
        body: 'Share what you want to predict or sort. We tell you honestly if the data is ready or what is missing.',
      },
    ],
  ),
  'computer-vision': S(
    'We work with photos and video so software can recognize objects, read labels, or flag damage—useful for shops, warehouses, and quality checks.',
    [
      {
        heading: 'What we mean',
        body: 'Computer vision means programs that understand pixels: what is in an image, where it sits, and sometimes how it changes over time.',
      },
      {
        heading: 'What we do for you',
        body: 'We design capture flows (camera or upload), build the recognition steps, and hook outputs into your existing tools. We focus on lighting and error handling so the field team is not stuck.',
      },
      {
        heading: 'Talk to us',
        body: 'Send a short note about what you want the camera or file to answer. We propose a practical test on real samples.',
      },
    ],
  ),
  'natural-language-processing': S(
    'We help software read and organize text: search, tagging, basic summaries, and routing support tickets so people spend less time on dull sorting.',
    [
      {
        heading: 'What we mean',
        body: 'Natural language processing is how computers make sense of words people write or say. It powers search boxes, chat helpers, and inbox routing.',
      },
      {
        heading: 'What we do for you',
        body: 'We map your text sources, pick methods that match your languages and privacy needs, and ship screens or APIs your team already uses.',
      },
      {
        heading: 'Talk to us',
        body: 'Tell us where your text lives and what you wish happened automatically. We keep the first scope small.',
      },
    ],
  ),
  'agentic-ai': S(
    'We build guided assistants that follow step-by-step tasks across tools you already use, with human checkpoints so nothing important runs on autopilot alone.',
    [
      {
        heading: 'What we mean',
        body: 'Instead of a single answer, these assistants can plan a short sequence: look something up, fill a form, or ping a person when a decision is needed.',
      },
      {
        heading: 'What we do for you',
        body: 'As an IT company we connect your existing programs, set permissions, and keep logs. You always see what ran and can stop or change flows without a rewrite.',
      },
      {
        heading: 'Talk to us',
        body: 'Describe one repetitive workflow you want help with. We start there rather than boiling the ocean.',
      },
    ],
  ),
  'predictive-analytics': S(
    'We use past numbers and events to build forecasts that help you plan stock, staffing, or risk—shown in charts your team can actually read.',
    [
      {
        heading: 'What we mean',
        body: 'Predictive work looks backward to guess what might happen next. It is never perfect, but it beats gut feel when history repeats.',
      },
      {
        heading: 'What we do for you',
        body: 'We clean historical data with you, build models, and deliver dashboards or alerts. We spell out limits so nobody treats a guess as a guarantee.',
      },
      {
        heading: 'Talk to us',
        body: 'Say what decision you want support for and what data you keep today.',
      },
    ],
  ),

  'mobile-app-development': S(
    'We design and build phone and tablet apps your customers or staff can rely on every day, with updates and store listings handled properly.',
    [
      {
        heading: 'What we mean',
        body: 'A mobile app lives on iOS, Android, or both. It should feel fast offline where needed and respect privacy.',
      },
      {
        heading: 'What we do for you',
        body: 'We cover screens, sign-in, notifications, and links to your backend. We help with app store rules and crash tracking.',
      },
      {
        heading: 'Talk to us',
        body: 'Tell us who uses the app and on which phones. We agree on a thin first version you can ship.',
      },
    ],
  ),
  'custom-software-development': S(
    'We write software shaped around how your company really works—not a one-size template—so teams stop fighting spreadsheets.',
    [
      {
        heading: 'What we mean',
        body: 'Custom means we build forms, workflows, and reports for your rules, customers, and approvals.',
      },
      {
        heading: 'What we do for you',
        body: 'We document requirements in plain English, build in stages, and train users. You own the outcome with clear hosting and backup choices.',
      },
      {
        heading: 'Talk to us',
        body: 'Describe the job that hurts most today. That becomes our first milestone.',
      },
    ],
  ),
  'web-app-development': S(
    'We build secure websites that behave like applications: accounts, data entry, and admin tools that work in the browser.',
    [
      {
        heading: 'What we mean',
        body: 'A web app runs through Chrome, Safari, or Edge without installing a separate program on each laptop.',
      },
      {
        heading: 'What we do for you',
        body: 'We handle layout, speed, accessibility basics, and server APIs. We pick hosting that matches your traffic and budget.',
      },
      {
        heading: 'Talk to us',
        body: 'Share who logs in and what they must do online. We sketch a simple flow together.',
      },
    ],
  ),
  'saas-solutions': S(
    'We help you offer your product as an online service many customers share—billing, sign-up, and separate data per customer included.',
    [
      {
        heading: 'What we mean',
        body: 'SaaS means Software as a Service: people pay over time and always use the latest version in the browser or app.',
      },
      {
        heading: 'What we do for you',
        body: 'We structure accounts, roles, plans, and upgrades. We keep security basics such as password reset and audit trails in mind from day one.',
      },
      {
        heading: 'Talk to us',
        body: 'Tell us who pays and how often. We outline billing hooks early.',
      },
    ],
  ),
  'aiaas-solutions': S(
    'We package AI features as a service your own clients can turn on—metered fairly and documented so support stays calm.',
    [
      {
        heading: 'What we mean',
        body: 'AI as a service means your customers consume AI through your product under clear limits and pricing.',
      },
      {
        heading: 'What we do for you',
        body: 'We design APIs, usage counters, and admin screens. We help you explain limits in honest wording.',
      },
      {
        heading: 'Talk to us',
        body: 'Describe your buyer and what AI outcome they sell downstream.',
      },
    ],
  ),
  'information-technology': S(
    'We support everyday IT needs: networks, devices, email setup, backups, and vendors—so your office keeps running.',
    [
      {
        heading: 'What we mean',
        body: 'Information technology is the stack that lets people work: laptops, Wi‑Fi, servers, and basic policies.',
      },
      {
        heading: 'What we do for you',
        body: 'We plan, install, monitor, and fix issues. We document passwords and recovery paths where allowed.',
      },
      {
        heading: 'Talk to us',
        body: 'List offices, headcount, and pain points. We propose a sensible care plan.',
      },
    ],
  ),

  'business-intelligence': S(
    'We turn your scattered spreadsheets and database rows into charts and reports leaders open every Monday without fear.',
    [
      {
        heading: 'What we mean',
        body: 'Business intelligence is steady reporting: sales, costs, and trends in one place.',
      },
      {
        heading: 'What we do for you',
        body: 'We connect sources, define metrics in words everyone agrees on, and publish dashboards with refreshes you can trust.',
      },
      {
        heading: 'Talk to us',
        body: 'Name three numbers you wish you saw weekly. We start there.',
      },
    ],
  ),
  'process-automation': S(
    'We replace boring manual steps between systems—copy-paste, email forwarding, ticket updates—with reliable automated flows.',
    [
      {
        heading: 'What we mean',
        body: 'Automation means software triggers the next step when a rule matches, so people handle exceptions instead of every row.',
      },
      {
        heading: 'What we do for you',
        body: 'We map the real process on paper first, then wire forms, APIs, and alerts. You get logs when something breaks.',
      },
      {
        heading: 'Talk to us',
        body: 'Pick one process that eats hours each week.',
      },
    ],
  ),
  'chatbot-development': S(
    'We build chat helpers that answer frequent questions and collect details before a human joins—on your site or in messaging apps.',
    [
      {
        heading: 'What we mean',
        body: 'A chatbot is a guided conversation with buttons or typed answers, tuned to your FAQs and tone.',
      },
      {
        heading: 'What we do for you',
        body: 'We write flows, hook knowledge sources you approve, and add handoff to staff with context.',
      },
      {
        heading: 'Talk to us',
        body: 'Share your top ten customer questions.',
      },
    ],
  ),
  'conversational-ai': S(
    'We design richer chat experiences that understand varied wording while staying inside topics and policies you set.',
    [
      {
        heading: 'What we mean',
        body: 'Users type freely; the system still stays on safe rails and knows when to stop.',
      },
      {
        heading: 'What we do for you',
        body: 'We blend language models with your facts, test failure cases, and measure satisfaction.',
      },
      {
        heading: 'Talk to us',
        body: 'Explain channels (web, WhatsApp, internal help desk) and languages.',
      },
    ],
  ),
  'bot-automation': S(
    'We build bots that move data between apps—creating tickets, updating CRM fields, or posting alerts when something changes.',
    [
      {
        heading: 'What we mean',
        body: 'Here “bot” means an unattended worker in software, not a physical robot.',
      },
      {
        heading: 'What we do for you',
        body: 'We secure credentials, schedule jobs, and send failure emails humans notice.',
      },
      {
        heading: 'Talk to us',
        body: 'Describe two systems that should stay in sync.',
      },
    ],
  ),
  'recommendation-systems': S(
    'We help shoppers or readers see “you might also like” suggestions grounded in what people actually viewed or bought.',
    [
      {
        heading: 'What we mean',
        body: 'Recommendations guess the next best item from behavior history and item details.',
      },
      {
        heading: 'What we do for you',
        body: 'We tune lists for speed, fairness, and cold-start cases when data is thin.',
      },
      {
        heading: 'Talk to us',
        body: 'Tell us your catalog size and where suggestions should appear.',
      },
    ],
  ),
  'rag-as-a-service': S(
    'We set up question-and-answer helpers that pull answers from your own documents so replies stay on your facts.',
    [
      {
        heading: 'What we mean',
        body: 'Your files stay behind your walls; the assistant searches them before answering and cites sources when helpful.',
      },
      {
        heading: 'What we do for you',
        body: 'We handle uploads, indexing, access rules, and refresh when PDFs change.',
      },
      {
        heading: 'Talk to us',
        body: 'List document types (PDFs, wiki, tickets) and who may see what.',
      },
    ],
  ),

  'data-science-analytics': S(
    'We explore your numbers with care—charts, experiments, and plain summaries—so leaders see whether a change worked.',
    [
      {
        heading: 'What we mean',
        body: 'Data science mixes statistics and coding to answer “what happened?” and “what if we try this?”',
      },
      {
        heading: 'What we do for you',
        body: 'We work in notebooks and dashboards you can reuse. We avoid mystery systems that nobody can explain.',
      },
      {
        heading: 'Talk to us',
        body: 'Bring one business question and the tables you trust.',
      },
    ],
  ),
  'web-scraping': S(
    'We collect public web data you are allowed to use—prices, listings, news—and store it cleanly for reports or alerts.',
    [
      {
        heading: 'What we mean',
        body: 'Scraping means automated copying of pages that permit it, at polite speeds.',
      },
      {
        heading: 'What we do for you',
        body: 'We respect robots rules and terms, add retries, and monitor when layouts change.',
      },
      {
        heading: 'Talk to us',
        body: 'Confirm legal clearance for targets; we document scope.',
      },
    ],
  ),
  'data-extraction': S(
    'We pull facts trapped in PDFs, scans, forms, and old exports into structured rows your tools can use.',
    [
      {
        heading: 'What we mean',
        body: 'Extraction turns messy files into named fields such as dates, amounts, and IDs.',
      },
      {
        heading: 'What we do for you',
        body: 'We handle OCR when needed, validation rules, and human review queues for low confidence.',
      },
      {
        heading: 'Talk to us',
        body: 'Share sample files (with secrets removed).',
      },
    ],
  ),
  'audio-analysis': S(
    'We work with sound and speech—transcripts, keyword spotting, and basic quality checks for calls or media.',
    [
      {
        heading: 'What we mean',
        body: 'Audio analysis turns recordings into text or signals you can search.',
      },
      {
        heading: 'What we do for you',
        body: 'We pick engines for your languages, handle noisy rooms, and secure storage.',
      },
      {
        heading: 'Talk to us',
        body: 'Describe volume, languages, and privacy rules.',
      },
    ],
  ),
  'deep-learning': S(
    'When simpler tools struggle with messy images or speech, we use heavier computer models—with honest talk about data and cost.',
    [
      {
        heading: 'What we mean',
        body: 'Deep learning means bigger computer models that need more examples and more power, but they can spot harder patterns.',
      },
      {
        heading: 'What we do for you',
        body: 'We only suggest it when simpler tools fail. We train, benchmark, and ship behind APIs or batch jobs.',
      },
      {
        heading: 'Talk to us',
        body: 'Tell us the problem simpler tools could not crack.',
      },
    ],
  ),
}

export function getServiceEasyEnglish(slug: string): ServiceEasyEnglish | undefined {
  return SERVICE_EASY_ENGLISH_BY_SLUG[slug]
}
