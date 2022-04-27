/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

/** To use SVG of logo */
module.exports = {
  experimental: { images: { layoutRaw: true } },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};