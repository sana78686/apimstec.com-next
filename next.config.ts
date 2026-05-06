import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  async redirects() {
    return [
      { source: '/consultancy', destination: '/hosting', permanent: true },
      { source: '/consultancy/:slug', destination: '/hosting/:slug', permanent: true },
      { source: '/hosting/plesk-hosting', destination: '/hosting', permanent: true },
      { source: '/platform/:slug', destination: '/services/:slug', permanent: true },
      { source: '/solutions/auto-fleet', destination: '/solutions', permanent: true },
      { source: '/solutions/banking-lending', destination: '/solutions', permanent: true },
      { source: '/solutions/oem-dealer', destination: '/solutions', permanent: true },
      { source: '/solutions/equipment-finance', destination: '/solutions', permanent: true },
      { source: '/solutions/managed-services', destination: '/solutions', permanent: true },
    ]
  },
  async rewrites() {
    return [{ source: '/cms-seo-sync.php', destination: '/api/cms-seo-sync' }]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  poweredByHeader: false,
}

export default nextConfig
