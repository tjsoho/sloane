// Import environment variables
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,  // Enables strict mode for React, which helps in catching potential issues
  typescript: {
    ignoreBuildErrors: false,  // Ensures TypeScript errors are caught during build
  },
};

export default config;
