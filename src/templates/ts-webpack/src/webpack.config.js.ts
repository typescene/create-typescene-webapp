export const name = "src/webpack.config.js";
export const file = `
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "app.ts")
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { transpileOnly: true }
      }
    ]
  },
  plugins: [
    new CopyPlugin([path.resolve(__dirname, "public")])
  ]
};
`;
