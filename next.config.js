const withTM = require("next-transpile-modules");

module.exports = withTM({
  transpileModules: [
    "@mdx-deck/components",
    "@mdx-deck/layouts",
    "@mdx-deck/themes"
  ],
  pageExtensions: ["jsx", "js", "mdx"],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-deck/loader",
          options: {
            remarkPlugins: [
              require("remark-emoji"),
              require("remark-unwrap-images")
            ]
          }
        }
      ]
    });
    return config;
  }
});
