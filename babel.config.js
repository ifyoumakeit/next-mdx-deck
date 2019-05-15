module.exports = {
  presets: ["next/babel", "@emotion/babel-preset-css-prop"],
  plugins: [
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-syntax-dynamic-import"
  ]
};
