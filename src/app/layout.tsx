import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CmsClientBootstrap } from '@/components/CmsClientBootstrap'
import { siteOriginFromEnv } from '@/lib/cms/html'

/* Same stack as apimstec-react (index.html Google Fonts Inter 400–700) — must set variable on <html> and className on <body> so --font-inter resolves. */
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

const siteUrl = siteOriginFromEnv()
const metadataBase = new URL(siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`)

export const metadata: Metadata = {
  metadataBase,
  title: { default: 'Apimstec', template: '%s | Apimstec' },
  description: 'Apimstec — IT company: software, apps, and simple explanations.',
  applicationName: 'Apimstec',
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Apimstec',
    locale: 'en_US',
    alternateLocale: ['en_US'],
    url: '/',
    images: [
      {
        url: '/favicon.png',
        width: 32,
        height: 32,
        alt: 'Apimstec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/favicon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <CmsClientBootstrap />
        {children}
      </body>
    </html>
  )
}
