import { NextResponse } from 'next/server'
import { resolveSitemapXmlBody } from '@/lib/seo/cmsSeoFiles'
import { getProgrammaticSitemapEntries, sitemapEntriesToXml } from '@/lib/seo/programmaticSitemap'

export const runtime = 'nodejs'

export async function GET() {
  const fromCms = await resolveSitemapXmlBody()
  const body = fromCms ?? sitemapEntriesToXml(await getProgrammaticSitemapEntries())
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
