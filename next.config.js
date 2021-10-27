/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const redirects = require('./config/redirects');

const withImagesConfig = {
  assetPrefix: 'https://github.com',
  dynamicAssetPrefix: true,
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    return config;
  },
};

module.exports = withPlugins([withImages, { withImagesConfig }], {
  trailingSlash: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async redirects() {
    return redirects;
  },
});

// module.exports = {
//   trailingSlash: true,
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
//   async redirects() {
//     return redirects;
//   },
// };
