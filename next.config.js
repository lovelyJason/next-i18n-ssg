/** @type {import('next').NextConfig} */
const nextPlugin = require('./next.plugin.js')

const nextConfig = {
  output: 'export',
  plugins: [
    nextPlugin()
  ]
}

module.exports = nextConfig
