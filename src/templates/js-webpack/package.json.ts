import config from "../../config";
import { depend } from "../../versions";

export const name = "package.json";
export const file = JSON.stringify(
  {
    ...config.packageBase,
    "scripts": {
      "start": "webpack --config src/webpack.config.dev.js",
      "build": "webpack --config src/webpack.config.js",
    },
    "dependencies": depend("typescene", "@typescene/webapp"),
    "devDependencies": depend(
      "webpack",
      "webpack-cli",
      "webpack-plugin-serve",
      "copy-webpack-plugin",
      "@babel/core",
      config.jsx ? "@babel/plugin-transform-react-jsx" : undefined,
      "@babel/plugin-transform-runtime",
      "@babel/preset-env",
      "@babel/runtime",
      "babel-loader"
    ),
  },
  undefined,
  "  "
);
