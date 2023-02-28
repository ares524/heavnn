/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/posts/1',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
