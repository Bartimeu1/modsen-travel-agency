/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const withNextIntl = createNextIntlPlugin();

const __dirname = dirname(fileURLToPath(import.meta.url));
const nextConfig = {
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
    additionalData:
      '@import "./src/styles/_mixins.scss"; @import "./src/styles/_globals.scss";',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  compiler:
    process.env.NODE_ENV === 'production'
      ? { reactRemoveProperties: true }
      : undefined,
};

export default withNextIntl(nextConfig);
