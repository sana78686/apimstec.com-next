import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
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
