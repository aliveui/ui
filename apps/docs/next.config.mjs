import { withLogtail } from '@logtail/next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: 'img.logo.dev',
        protocol: 'https',
      },
    ],
  },
  staticPageGenerationTimeout: 180,

  // biome-ignore lint/suspicious/useAwait: "redirects is async"
  async redirects() {
    return [
      { source: '/', destination: '/overview', permanent: false },
      {
        source: '/components',
        destination: '/components/announcement',
        permanent: false,
      },
      { source: '/ai', destination: '/components/ai', permanent: true },
      {
        source: '/ai/:slug*',
        destination: '/components/ai/:slug*',
        permanent: true,
      },
      {
        source: '/announcement',
        destination: '/components/announcement',
        permanent: true,
      },
      {
        source: '/avatar-stack',
        destination: '/components/avatar-stack',
        permanent: true,
      },
      { source: '/banner', destination: '/components/banner', permanent: true },
      {
        source: '/calendar',
        destination: '/components/calendar',
        permanent: true,
      },
      {
        source: '/code-block',
        destination: '/components/code-block',
        permanent: true,
      },
      {
        source: '/color-picker',
        destination: '/components/color-picker',
        permanent: true,
      },
      { source: '/cursor', destination: '/components/cursor', permanent: true },
      {
        source: '/dialog-stack',
        destination: '/components/dialog-stack',
        permanent: true,
      },
      {
        source: '/dropzone',
        destination: '/components/dropzone',
        permanent: true,
      },
      { source: '/editor', destination: '/components/editor', permanent: true },
      { source: '/gantt', destination: '/components/gantt', permanent: true },
      { source: '/kanban', destination: '/components/kanban', permanent: true },
      { source: '/list', destination: '/components/list', permanent: true },
      {
        source: '/marquee',
        destination: '/components/marquee',
        permanent: true,
      },
      { source: '/pill', destination: '/components/pill', permanent: true },
      { source: '/rating', destination: '/components/rating', permanent: true },
      {
        source: '/sandbox',
        destination: '/components/sandbox',
        permanent: true,
      },
      {
        source: '/snippet',
        destination: '/components/snippet',
        permanent: true,
      },
      {
        source: '/spinner',
        destination: '/components/spinner',
        permanent: true,
      },
      { source: '/table', destination: '/components/table', permanent: true },
      { source: '/tags', destination: '/components/tags', permanent: true },
      {
        source: '/theme-switcher',
        destination: '/components/theme-switcher',
        permanent: true,
      },
    ];
  },

  transpilePackages: [],
};

let nextConfig = withMDX(withLogtail({ ...config }));

if (process.env.ANALYZE === 'true') {
  nextConfig = withBundleAnalyzer()(nextConfig);
}

export default nextConfig;
