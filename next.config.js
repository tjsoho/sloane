// Import environment variables
await import('./src/env.js');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true, // Enables strict mode for React
  typescript: {
    ignoreBuildErrors: false, // Ensures TypeScript errors are caught during the build
  },
  trailingSlash: true, // Adds a trailing slash to all routes for better compatibility with static files
  output: 'standalone', // Ensures standalone mode for Next.js, useful for Vercel deployments
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/sloane-website-afb7a.appspot.com/o/**',
      },
    ],
  },
};

export default config;
