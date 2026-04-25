import SiteLayoutClient from '@/components/site/SiteLayoutClient'

/**
 * This file stays a **Server Component** (no 'use client').
 * The marketing shell is implemented in `SiteLayoutClient` (`'use client'`) for mega menu, mobile drawer, and CMS nav trees — that part hydrates in the browser, like any interactive shell.
 * Per-route `metadata` in `page.tsx` / `layout.tsx` and the **root** `metadata` still render in `<head>` for View Source, same pattern as compresspdf-next.
 */
export const revalidate = 60

export default function SiteRouteLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayoutClient>{children}</SiteLayoutClient>
}
