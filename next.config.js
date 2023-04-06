/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: {
    optimizeFonts: true,
    scrollRestoration: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'workspace.hidacolle.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  trailingSlash: true
};