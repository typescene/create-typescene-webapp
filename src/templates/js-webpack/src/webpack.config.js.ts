import config from "../../../config";

export const name = "src/webpack.config.js";
export const file = `
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "app.js")
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "../dist")
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
    new CopyPlugin([path.resolve(__dirname, "public")])
  ]
};
`;
