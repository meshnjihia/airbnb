/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'res.cloudinary.com'
    ],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'app/components/Map.tsx');
    return config;
  },
};

