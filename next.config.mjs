/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  output: 'standalone',
  images: {
    domains: ['focusider.s3.ap-northeast-2.amazonaws.com'],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
