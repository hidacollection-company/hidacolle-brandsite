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
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/hidacolle/message.html",
        destination: "/furniture-that-thinks",
        permanent: true,
      },
      {
        source: "/hidacolle/outline.html",
        destination: "/furniture-that-thinks",
        permanent: true,
      },
      {
        source: "/hidacolle/access.html",
        destination: "/flagshipshop",
        permanent: true,
      },
      {
        source: "/together/index.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/furniture/index.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/scene",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/scene/:path",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/case/index.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/case/works.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/case/works-details_no([a-z0-9/-]+).html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/case/maintenance.html",
        destination: "/ichimaiita/maintenance",
        permanent: true,
      },
      {
        source: "/case/maintenance-details_no([a-z0-9/-]+).html",
        destination: "/ichimaiita/maintenance",
        permanent: true,
      },
      {
        source: "/contact/index.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/shop/index.html",
        destination: "/flagshipshop",
        permanent: true,
      },
      {
        source: "/flow/index.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/faq/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/remote/index.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/maintenance/index.html",
        destination: "/ichimaiita/maintenance",
        permanent: true,
      },
      {
        source: "/hidatakayama/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/staff/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/news/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/trade/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/privacy/index.html",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/siteinfo/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sitemap/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/furniture/ichimaiita.html",
        destination: "/ichimaiita",
        permanent: true,
      },
      {
        source: "/furniture/accessories.html",
        destination: "/original-products",
        permanent: true,
      },
      {
        source: "/furniture/bed.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/furniture/chair.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/furniture/craft.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/furniture/desk.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/furniture/shelf.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/furniture/sofa.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/furniture/stool.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/furniture/storage.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/furniture/table.html",
        destination: "/custom-furniture",
        permanent: true,
      },
      {
        source: "/furniture/table-make.html",
        destination: "/ichimaiita",
        permanent: true,
      },
      {
        source: "/blog/index.html",
        destination: "/",
        permanent: true,
      },
    ]
  },
};