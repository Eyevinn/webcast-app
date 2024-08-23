/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  trailingSlash: false,
  poweredByHeader: false,
  experimental: {
    instrumentationHook: true
  }
};
