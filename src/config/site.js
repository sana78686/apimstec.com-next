/**
 * Live public site and support defaults (align with apimstec-react).
 */
export const PUBLIC_SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || 'https://apimstec.com').replace(
  /\/$/,
  '',
)

export const SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'apimstecofficial@gmail.com'
