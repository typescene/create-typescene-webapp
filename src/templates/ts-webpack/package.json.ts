import config from "../../config";
import versions from "../../versions";

export const name = "package.json";
export const file = JSON.stringify(
  {
    ...config.packageBase,
    "scripts": {
      "start": "webpack --config src/webpack.config.dev.js",
      "build": "webpack --config src/webpack.config.js",
    },
    "dependencies": {
      "typescene": versions.typescene,
      "@typescene/webapp": versions["@typescene/webapp"],
    },
    "devDependencies": {
      "typescript": versions.typescript,
      "webpack": versions.webpack,
      "webpack-cli": versions["webpack-cli"],
      "webpack-plugin-serve": versions["webpack-plugin-serve"],
      "copy-webpack-plugin": versions["copy-webpack-plugin"],
      "ts-loader": versions["ts-loader"],
    },
  },
  undefined,
  "  "
);
