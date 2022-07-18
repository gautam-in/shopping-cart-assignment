/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n:{
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ['localhost', 'http://localhost:5000']
  },
  rewrites : () => {
    return [
      {
        source: '/api/v1/',
        destination: 'http://localhost:5000/api/v1/'
      },
    ]
  }
}

module.exports = nextConfig
