# Apimstec (Next.js + CMS)

Next.js 15 marketing site with **SSR** for blog, legal, and dynamic CMS pages. **English only** (no `/en` or `/id` URL prefix).

## Setup

```bash
cp .env.example .env.local
# Set NEXT_PUBLIC_CMS_API_URL, NEXT_PUBLIC_SITE_DOMAIN, NEXT_PUBLIC_SITE_ORIGIN
npm install
npm run dev
```

Dev server: **http://localhost:3001** (avoids clashing with Laravel/Vite on 3000).

### Environment

- **`NEXT_PUBLIC_SITE_ORIGIN`** — Full canonical URL with `https`, no trailing slash. Drives `metadataBase`, Open Graph, `sitemap.xml`, `robots.txt`, and CMS image URLs in SSR.
- **`NEXT_PUBLIC_*`** — Inlined at build time; change → `npm run build` again.

Use **`.env.production.example`** on the server (or Plesk env vars).

## Scripts

- `npm run dev` — development
- `npm run build` / `npm run build:clean` — production build (`build:clean` clears `.next` first, useful on Windows if the build cache breaks)
- `npm start` / `npm run start:plesk` — production

## CMS

Same GlobalCMS / Laravel API patterns as `compressedpdf-next`: tenant domain must match **`NEXT_PUBLIC_SITE_DOMAIN`**.
