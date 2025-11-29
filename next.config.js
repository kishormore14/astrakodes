const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: i18n.defaultLocale,
    locales: i18n.locales,
    localeDetection: i18n.localeDetection,
  },
};

module.exports = nextConfig;
