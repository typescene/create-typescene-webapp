export const name = "src/webpack.config.js";
export const file = `
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: path.resolve(__dirname, "app.ts")
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  externals: {
    "typescene": "typescene",
    "@typescene/webapp": "typescene"
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
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../node_modules/@typescene/webapp/umd"),
          to: path.resolve(__dirname, "../dist/lib"),
        },
        {
          from: path.resolve(__dirname, "public"),
          to: path.resolve(__dirname, "../dist"),
        },
      ]
    })
  ]
};
`;
