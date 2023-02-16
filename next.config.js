/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: {
    optimizeFonts: true,
    scrollRestoration: true,
  },
  images: {
    unoptimized: true
  },
  trailingSlash: true
};