import config from "../../../config";

export const name = "src/webpack.config.js";
export const file = `
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: path.resolve(__dirname, "app.js")
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
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-runtime"${
                config.jsx
                  ? `,
              ['@babel/plugin-transform-react-jsx', {
                pragma: "JSX"
              }]`
                  : ""
              }
            ]
          }
        }
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
