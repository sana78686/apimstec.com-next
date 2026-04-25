import { defaultLang, supportedLangs, langPrefix } from '../i18n/translations'
import { ucWords } from './ucWords'

/** Strip `/en`-style prefix; default locale (id) has no prefix. */
export function stripLocalePrefix(pathname) {
  const p = pathname.replace(/\/+$/, '') || '/'
  for (const l of supportedLangs) {
    if (l === defaultLang) continue
    const prefix = `/${l}`
    if (p === prefix || p.startsWith(`${prefix}/`)) {
      const rest = p === prefix ? '/' : p.slice(prefix.length) || '/'
      return { lang: l, rest }
    }
  }
  return { lang: defaultLang, rest: p }
}

function slugLabel(slug) {
  return slug ? ucWords(String(slug).replace(/-/g, ' ')) : ''
}

/**
 * @param {string} pathname
 * @param {(key: string) => string} t
 * @returns {{ label: string, to?: string }[] | null}
 */
export function buildCompressPdfBreadcrumbItems(pathname, t) {
  const { lang, rest } = stripLocalePrefix(pathname)
  const lp = langPrefix(lang)
  if (rest === '/') return null

  const home = { label: t('nav.home'), to: `${lp}/` }
  const join = (path) => `${lp}${path === '/' ? '' : path}`

  if (rest === '/tools') {
    return [home, { label: t('nav.allTools') }]
  }
  if (rest === '/compress') {
    return [home, { label: t('nav.compress') }]
  }
  if (rest === '/compress/result') {
    return [
      home,
      { label: t('nav.compress'), to: join('/compress') },
      { label: t('breadcrumb.result') },
    ]
  }
  if (rest === '/blog') {
    return [home, { label: t('blog.listTitle') }]
  }
  if (rest.startsWith('/blog/')) {
    const slug = rest.slice('/blog/'.length).split('/')[0]
    return [
      home,
      { label: t('blog.listTitle'), to: join('/blog') },
      { label: slugLabel(slug) || t('blog.listTitle') },
    ]
  }
  if (rest.startsWith('/page/')) {
    const slug = rest.slice('/page/'.length).split('/')[0]
    return [home, { label: slugLabel(slug) || t('breadcrumb.page') }]
  }
  if (rest === '/contact') {
    return [home, { label: t('contact.title') }]
  }

  // Apimstec marketing (clear labels from nav)
  if (rest === '/platform') {
    return [home, { label: t('nav.platform') }]
  }
  if (rest === '/marketplace') {
    return [home, { label: t('nav.marketplace') }]
  }
  if (rest === '/consultancy') {
    return [home, { label: t('nav.consultancy') }]
  }
  if (rest === '/solutions') {
    return [home, { label: t('nav.solutions') }]
  }
  if (rest === '/insights') {
    return [home, { label: t('nav.insights') }]
  }
  if (rest === '/about') {
    return [home, { label: t('nav.aboutUs') }]
  }
  if (rest === '/about/careers') {
    return [home, { label: t('nav.aboutUs'), to: join('/about') }, { label: t('corporate.footerCareers') }]
  }
  if (rest === '/about/news') {
    return [home, { label: t('nav.aboutUs'), to: join('/about') }, { label: t('corporate.footerNews') }]
  }

  // Mega menu children: /platform/…, /consultancy/…, /solutions/…, /about/…
  const childM = /^\/(platform|consultancy|solutions|about)\/([^/]+)$/.exec(rest)
  if (childM) {
    const base = childM[1]
    const slug = childM[2]
    const sectionNav = {
      platform: 'nav.platform',
      consultancy: 'nav.consultancy',
      solutions: 'nav.solutions',
      about: 'nav.aboutUs',
    }
    const key = sectionNav[base]
    if (key) {
      return [
        home,
        { label: t(key), to: join(`/${base}`) },
        { label: slugLabel(slug) || t('breadcrumb.page') },
      ]
    }
  }

  if (rest.startsWith('/legal/')) {
    const slug = rest.slice('/legal/'.length).split('/')[0]
    return [
      home,
      { label: t('breadcrumb.legal') },
      { label: slugLabel(slug) || t('breadcrumb.legal') },
    ]
  }

  const single = /^\/([^/]+)$/.exec(rest)
  if (single) {
    const seg = single[1]
    const known = new Set(['tools', 'compress', 'blog', 'contact'])
    if (!known.has(seg)) {
      return [home, { label: slugLabel(seg) }]
    }
  }

  return null
}
