/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // this will allow nextjs to resolve files (js, ts, css)
    // outside packages/app directory. 
    externalDir: true,
  }, 
  images: {
    domains: ['image.tmdb.org'],
  },
}

module.exports = nextConfig
