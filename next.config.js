/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  poweredByHeader: false,
  experimental: {
    instrumentationHook: true
  }
};
