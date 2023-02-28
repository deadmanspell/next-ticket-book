/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    DB_LOCAL_URI: `mongodb://localhost:27017/ticketBook`,
  }
}

