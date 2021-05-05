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
      "webpack": versions.webpack,
      "webpack-cli": versions["webpack-cli"],
      "webpack-plugin-serve": versions["webpack-plugin-serve"],
      "copy-webpack-plugin": versions["copy-webpack-plugin"],
      "@babel/core": versions["@babel/core"],
      "@babel/plugin-transform-react-jsx": config.jsx
        ? versions["@babel/plugin-transform-react-jsx"]
        : undefined,
      "@babel/plugin-transform-runtime": versions["@babel/plugin-transform-runtime"],
      "@babel/preset-env": versions["@babel/preset-env"],
      "@babel/runtime": versions["@babel/runtime"],
      "babel-loader": versions["babel-loader"],
    },
  },
  undefined,
  "  "
);
