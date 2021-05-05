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
    "prettier": {},
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
      "typescene": versions.typescene,
      "@typescene/webapp": versions["@typescene/webapp"],
    },
    "devDependencies": {
      "parcel": versions["parcel"],
    },
  },
  undefined,
  "  "
);
