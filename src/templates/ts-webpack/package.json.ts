import config from "../../config";

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
    "main": "index.js",
    "scripts": {
      "start": "webpack-dev-server --hot --config src/webpack.config.js --no-info --open",
      "build": "webpack -p --config src/webpack.config.js",
    },
    "dependencies": {
      "@typescene/webapp": "^2.0.0",
    },
    "devDependencies": {
      "typescript": "^3.4.5",
      "webpack": "^4.31.0",
      "webpack-cli": "^3.3.2",
      "webpack-dev-server": "^3.3.1",
      "copy-webpack-plugin": "^5.0.3",
      "ts-loader": "^6.0.0",
    },
  },
  undefined,
  "  "
);
