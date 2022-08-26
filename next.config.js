/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  "functions": {
    "api/*.js": {
      "maxDuration": 30
    }
  }
}

module.exports = nextConfig
