import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { CmsClientBootstrap } from '@/components/CmsClientBootstrap'
import { siteOriginFromEnv } from '@/lib/cms/html'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = siteOriginFromEnv()
const metadataBase = new URL(siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`)

export const metadata: Metadata = {
  metadataBase,
  title: { default: 'Apimstec', template: '%s | Apimstec' },
  description: 'Apimstec — digital solutions and platform engineering.',
  applicationName: 'Apimstec',
  openGraph: {
    type: 'website',
    siteName: 'Apimstec',
    locale: 'en_US',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/icon.svg',
        width: 32,
        height: 32,
        alt: 'Apimstec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CmsClientBootstrap />
        {children}
      </body>
    </html>
  )
}
