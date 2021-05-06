import config from "../../config";
import { depend } from "../../versions";

export const name = "package.json";
export const file = JSON.stringify(
  {
    ...config.packageBase,
    "scripts": {
      "start": "rollup --config rollup.config.dev.js -w",
      "build": "rollup --config rollup.config.js",
    },
    "dependencies": depend("typescene", "@typescene/webapp"),
    "devDependencies": depend(
      "@rollup/plugin-node-resolve",
      "@rollup/plugin-typescript",
      "rollup-plugin-livereload",
      "rollup-plugin-serve",
      "rollup",
      "typescript"
    ),
  },
  undefined,
  "  "
);
