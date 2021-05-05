import config from "../../config";
import versions from "../../versions";

export const name = "package.json";
export const file = JSON.stringify(
  {
    "name": config.name,
    "version": "1.0.0",
    "private": true,
    "description": "Typescene front end application",
    "author": "Your name",
    "license": "UNLICENSED",
    "keywords": [],
    "prettier": {},
    "main": "index.js",
    "scripts": {
      "start":
        "webpack serve --hot --config src/webpack.config.js --mode development --devtool inline-source-map --open",
      "build": "webpack -p --config src/webpack.config.js",
    },
    "dependencies": {
      "typescene": versions.typescene,
      "@typescene/webapp": versions["@typescene/webapp"],
    },
    "devDependencies": {
      "typescript": versions.typescript,
      "webpack": versions.webpack,
      "webpack-cli": versions["webpack-cli"],
      "webpack-dev-server": versions["webpack-dev-server"],
      "copy-webpack-plugin": versions["copy-webpack-plugin"],
      "ts-loader": versions["ts-loader"],
    },
  },
  undefined,
  "  "
);
