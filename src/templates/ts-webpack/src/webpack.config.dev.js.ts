export const name = "src/webpack.config.dev.js";
export const file = `
const path = require("path");
const config = require("./webpack.config");
const { WebpackPluginServe: Serve } = require("webpack-plugin-serve");

config.mode = "development";
config.devtool = "inline-source-map";
config.watch = true;
config.entry.app = [config.entry.app, "webpack-plugin-serve/client"];
config.plugins.push(
  new Serve({
    host: "localhost",
    port: 8080,
    hmr: true,
    open: true,
    static: path.resolve(__dirname, "../dist"),
  })
);
module.exports = config;
`;
