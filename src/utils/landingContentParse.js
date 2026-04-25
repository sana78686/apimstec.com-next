/**
 * Home card `description` from CMS can be:
 * - Plain text (legacy): shown under the title.
 * - JSON: `{ "intro": "…", "links": [{ "label": "…", "href": "/path" }] }`
 * - Line-based links (one per line): `Label|/path` or `Label|https://…` — optional intro lines above without `|`.
 */
export function parseHomeCardBody(description) {
  const raw = String(description ?? '').trim()
  if (!raw) return { intro: '', links: [] }

  if (raw.startsWith('{')) {
    try {
      const j = JSON.parse(raw)
      if (j && typeof j === 'object' && Array.isArray(j.links)) {
        const links = j.links
          .filter((x) => x && typeof x.label === 'string' && typeof x.href === 'string')
          .map((x) => ({ label: x.label.trim(), href: x.href.trim() }))
        return {
          intro: typeof j.intro === 'string' ? j.intro.trim() : '',
          links,
        }
      }
    } catch {
      /* fall through */
    }
  }

  const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  const links = []
  const introLines = []
  const linkRe = /^(.+?)\s*\|\s*(\/.*|https?:\/\/\S+|mailto:\S+)$/i

  for (const line of lines) {
    const m = line.match(linkRe)
    if (m) links.push({ label: m[1].trim(), href: m[2].trim() })
    else introLines.push(line)
  }

  if (links.length > 0) {
    return { intro: introLines.join('\n'), links }
  }

  return { intro: raw, links: [] }
}

/**
 * FAQ `question` can be one line, or "category" on first line + title on following lines (Etsy-style).
 */
export function splitFaqQuestion(question) {
  const s = String(question ?? '').trim()
  if (!s) return { category: '', title: '' }
  const idx = s.indexOf('\n')
  if (idx === -1) return { category: '', title: s }
  const category = s.slice(0, idx).trim()
  const title = s.slice(idx + 1).trim()
  return {
    category,
    title: title || category,
  }
}

export function isInternalAppHref(href) {
  if (!href || typeof href !== 'string') return false
  const h = href.trim()
  return h.startsWith('/') && !h.startsWith('//')
}
