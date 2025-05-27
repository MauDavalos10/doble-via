/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
