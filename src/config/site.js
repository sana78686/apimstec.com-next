/**
 * Live public site and support defaults (align with apimstec-react).
 */
export const PUBLIC_SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || 'https://apimstec.com').replace(
  /\/$/,
  '',
)

export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'apimstecofficial@gmail.com'

/** Shown when CMS contact settings omit address (footer + contact page). */
export const DEFAULT_CONTACT_ADDRESS =
  (typeof process.env.NEXT_PUBLIC_CONTACT_ADDRESS === 'string' &&
    process.env.NEXT_PUBLIC_CONTACT_ADDRESS.trim()) ||
  'Zikriya Town, Multan, Pakistan'

/** Shown when CMS omits phone; comma-separated env overrides. */
export const DEFAULT_CONTACT_PHONES = (
  typeof process.env.NEXT_PUBLIC_CONTACT_PHONES === 'string' &&
  process.env.NEXT_PUBLIC_CONTACT_PHONES.trim()
    ? process.env.NEXT_PUBLIC_CONTACT_PHONES
    : '+923012775034, +923019530633'
)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

/** @param {unknown} cmsAddress */
export function resolveContactAddress(cmsAddress) {
  const raw = String(cmsAddress ?? '').trim()
  return raw || DEFAULT_CONTACT_ADDRESS
}

/** @param {unknown} cmsPhone */
export function resolveContactPhones(cmsPhone) {
  const raw = String(cmsPhone ?? '').trim()
  if (!raw) return [...DEFAULT_CONTACT_PHONES]
  const parts = raw.split(/[,;/|\n]+/).map((s) => s.trim()).filter(Boolean)
  return parts.length ? parts : [...DEFAULT_CONTACT_PHONES]
}

/** Display lines for sticky “Working hours” blocks on marketing pages */
export const SITE_OFFICE_HOURS_LINES = [
  'Monday – Friday: 9:00 AM – 6:00 PM',
  'Saturday & Sunday: Closed',
]

export function telHrefFromDisplay(phoneDisplay) {
  const cleaned = String(phoneDisplay ?? '').replace(/[^\d+]/g, '')
  return cleaned ? `tel:${cleaned}` : ''
}
