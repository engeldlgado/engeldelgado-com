/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap')
    }

    return config
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig
