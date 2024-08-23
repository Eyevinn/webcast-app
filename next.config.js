/** @type {import('next').NextConfig} */
module.exports = {
  output: process.env.BUILD_STATIC_ONLY ? 'export' : 'standalone',
  trailingSlash: process.env.BUILD_STATIC_ONLY ? true : false,
  poweredByHeader: false,
  experimental: {
    instrumentationHook: true
  }
};
