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
      "start": "parcel src/index.html --open",
      "build": "parcel build src/index.html",
    },
    "babel": {
      "plugins": ["@babel/plugin-transform-runtime"],
    },
    "dependencies": {
      "@typescene/webapp": "^2.0.0",
    },
    "devDependencies": {
      "parcel-bundler": "^1.12.3",
    },
  },
  undefined,
  "  "
);
