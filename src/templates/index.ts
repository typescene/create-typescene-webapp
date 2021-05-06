import * as chalk from "chalk";
import * as fs from "fs";
import * as path from "path";
import config from "../config";
import * as tips from "../tips";

/** Writes all templated files, returns number of files written */
export function writeAllTemplateFiles() {
  if (config.ts && config.bundler === "webpack") {
    tips.add(chalk.green("[DONE]") + " Installed Typescene, TypeScript, and Webpack");
    return writeTemplates(
      require("./gitignore"),
      require("./readme.md"),
      require("./ts-webpack/package.json"),
      require("./ts-webpack/src/tsconfig.json"),
      require("./ts-webpack/src/webpack.config.js"),
      require("./ts-webpack/src/webpack.config.dev.js"),
      require("./ts-webpack/src/app.ts"),
      require("./ts-webpack/src/public/index.html"),
      require("./ts-webpack/src/activities/main/activity.ts"),
      require("./ts-webpack/src/activities/main/view.ts"),
      require("./ts-webpack/src/activities/main/view.tsx")
    );
  } else if (!config.ts && config.bundler === "webpack") {
    tips.add(chalk.green("[DONE]") + " Installed Typescene, Babel, and Webpack");
    return writeTemplates(
      require("./gitignore"),
      require("./readme.md"),
      require("./js-webpack/package.json"),
      require("./js-webpack/src/jsconfig.json"),
      require("./js-webpack/src/webpack.config.js"),
      require("./js-webpack/src/webpack.config.dev.js"),
      require("./js-webpack/src/app.js"),
      require("./js-webpack/src/public/index.html"),
      require("./js-webpack/src/activities/main/activity.js"),
      require("./js-webpack/src/activities/main/view.js"),
      require("./js-webpack/src/activities/main/view.jsx")
    );
  } else if (config.ts && config.bundler === "parcel") {
    tips.add(chalk.green("[DONE]") + " Installed Typescene, TypeScript, and Parcel");
    return writeTemplates(
      require("./gitignore"),
      require("./readme.md"),
      require("./ts-parcel/package.json"),
      require("./ts-parcel/src/index.html"),
      require("./ts-parcel/src/commonjs.d.ts"),
      require("./ts-webpack/src/tsconfig.json"),
      require("./ts-webpack/src/app.ts"),
      require("./ts-webpack/src/activities/main/activity.ts"),
      require("./ts-webpack/src/activities/main/view.ts"),
      require("./ts-webpack/src/activities/main/view.tsx")
    );
  } else if (!config.ts && config.bundler === "parcel") {
    tips.add(chalk.green("[DONE]") + " Installed Typescene and Parcel");
    return writeTemplates(
      require("./gitignore"),
      require("./readme.md"),
      require("./js-parcel/package.json"),
      require("./js-parcel/src/index.html"),
      require("./js-webpack/src/jsconfig.json"),
      require("./js-webpack/src/app.js"),
      require("./js-webpack/src/activities/main/activity.js"),
      require("./js-webpack/src/activities/main/view.js"),
      require("./js-webpack/src/activities/main/view.jsx")
    );
  } else if (config.ts && config.bundler === "rollup") {
    tips.add(chalk.green("[DONE]") + " Installed Typescene, TypeScript, and Rollup");
    return writeTemplates(
      require("./gitignore"),
      require("./readme.md"),
      require("./ts-rollup/package.json"),
      require("./ts-rollup/rollup.config.js"),
      require("./ts-rollup/rollup.config.dev.js"),
      require("./ts-webpack/src/tsconfig.json"),
      require("./ts-webpack/src/app.ts"),
      require("./ts-webpack/src/public/index.html"),
      require("./ts-rollup/src/activities/main/activity.ts"),
      require("./ts-webpack/src/activities/main/view.ts"),
      require("./ts-webpack/src/activities/main/view.tsx")
    );
  } else if (!config.ts && config.bundler === "rollup") {
    if (config.jsx) throw Error("Rollup: JSX not supported without TypeScript");
    tips.add(chalk.green("[DONE]") + " Installed Typescene and Rollup");
    return writeTemplates(
      require("./gitignore"),
      require("./readme.md"),
      require("./js-rollup/package.json"),
      require("./js-rollup/rollup.config.js"),
      require("./js-rollup/rollup.config.dev.js"),
      require("./js-webpack/src/jsconfig.json"),
      require("./js-webpack/src/app.js"),
      require("./js-webpack/src/public/index.html"),
      require("./js-rollup/src/activities/main/activity.js"),
      require("./js-webpack/src/activities/main/view.js"),
      require("./js-webpack/src/activities/main/view.jsx")
    );
  } else {
    throw Error("Configuration not supported");
  }
}

function writeTemplates(...templates: { name: string; file: string }[]) {
  for (const { name, file } of templates) {
    if (!name) continue;
    fs.mkdirSync(path.dirname(name), { recursive: true });
    fs.writeFileSync(name, String(file).trimLeft());
  }
  return templates.length;
}
