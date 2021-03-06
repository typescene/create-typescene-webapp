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
      "typescript",
      "webpack",
      "webpack-cli",
      "webpack-plugin-serve",
      "copy-webpack-plugin",
      "ts-loader"
    ),
  },
  undefined,
  "  "
);
