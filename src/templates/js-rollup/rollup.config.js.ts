import config from "../../config";

const targets: any = {
  es6: ".es6",
  es2015: ".es6",
  es2016: ".es6",
  es8: ".es8",
  es2017: ".es8",
  es2018: ".es8",
  es2019: ".es8",
  es2020: ".es8",
  esnext: ".es8",
};
const libFileName = "typescene" + (targets[config.target] || "") + ".min.js";

export const name = "rollup.config.js";
export const file = `
import * as fs from "fs";
import * as path from "path";
import resolve from "@rollup/plugin-node-resolve";

const copyFiles = [
  [
    "node_modules/@typescene/webapp/umd/${libFileName}",
    "dist/lib/${libFileName}",
  ],
  ["src/public/index.html", "dist/index.html"],
  // ...add files here if they need to be copied during build
];

export default {
  input: "./src/app.js",
  external: ["typescene", "@typescene/webapp"],
  output: {
    name: "app",
    dir: "dist",
    entryFileNames: "app.bundle.js",
    format: "iife",
    globals: {
      typescene: "typescene",
      "@typescene/webapp": "typescene"
    },
  },
  plugins: [
    {
      async buildStart() {
        for (let f of copyFiles) {
          let src = path.resolve(__dirname, f[0]);
          let dest = path.resolve(__dirname, f[1]);
          if (!fs.existsSync(path.dirname(dest)))
            fs.mkdirSync(path.dirname(dest), { recursive: true });
          console.log(src + " => " + dest);
          fs.copyFileSync(src, dest);
          this.addWatchFile(src);
        }
      },
    },
    resolve(),
  ],
};
`;
