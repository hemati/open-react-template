/** @type {import('next').NextConfig} */
const nextConfig = {
  // Honey Blast share-link counting (lib/hb-measure.ts, server side only): taken from the build environment,
  // since the hosting's server runtime does not see the console's environment variables
  env: {
    HB_GA_MEASUREMENT_ID: process.env.HB_GA_MEASUREMENT_ID ?? '',
    HB_GA_API_SECRET: process.env.HB_GA_API_SECRET ?? '',
  },
}

module.exports = nextConfig
