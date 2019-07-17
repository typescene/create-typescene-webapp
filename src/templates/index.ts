import chalk from "chalk";
import * as fs from "fs";
import * as path from "path";
import config from "../config";
import * as tips from "../tips";

/** Writes all templated files, returns number of files written */
export function writeAllTemplateFiles() {
    if (config.ts && config.bundler === "webpack") {
        tips.add(chalk.green("[DONE]") +
            " Installed Typescene, TypeScript, and Webpack");
        return writeTemplates(
            require("./gitignore"),
            require("./readme.md"),
            require("./ts-webpack/package.json"),
            require("./ts-webpack/src/tsconfig.json"),
            require("./ts-webpack/src/webpack.config.js"),
            require("./ts-webpack/src/app.ts"),
            require("./ts-webpack/src/public/index.html"),
            require("./ts-webpack/src/activities/main/activity.ts"),
            require("./ts-webpack/src/activities/main/view/index.ts"),
        );
    }
    else if (!config.ts && config.bundler === "webpack") {
        tips.add(chalk.green("[DONE]") +
            " Installed Typescene and Webpack");
        return writeTemplates(
            require("./gitignore"),
            require("./readme.md"),
            require("./js-webpack/package.json"),
            require("./js-webpack/src/webpack.config.js"),
            require("./js-webpack/src/app.js"),
            require("./js-webpack/src/public/index.html"),
            require("./js-webpack/src/activities/main/activity.js"),
            require("./js-webpack/src/activities/main/view/index.js"),
        );
    }
    else if (config.ts && config.bundler === "parcel") {
        tips.add(chalk.green("[DONE]") +
            " Installed Typescene, TypeScript, and Parcel");
        return writeTemplates(
            require("./gitignore"),
            require("./readme.md"),
            require("./ts-parcel/package.json"),
            require("./ts-parcel/src/index.html"),
            require("./ts-parcel/src/commonjs.d.ts"),
            require("./ts-webpack/src/tsconfig.json"),
            require("./ts-webpack/src/app.ts"),
            require("./ts-webpack/src/activities/main/activity.ts"),
            require("./ts-webpack/src/activities/main/view/index.ts"),
        );
    }
    else if (!config.ts && config.bundler === "parcel") {
        tips.add(chalk.green("[DONE]") +
            " Installed Typescene and Parcel");
        return writeTemplates(
            require("./gitignore"),
            require("./readme.md"),
            require("./js-parcel/package.json"),
            require("./js-parcel/src/index.html"),
            require("./js-webpack/src/app.js"),
            require("./js-webpack/src/activities/main/activity.js"),
            require("./js-webpack/src/activities/main/view/index.js"),
        );
    }
    else {
        throw Error("Configuration not supported");
    }
}

function writeTemplates(...templates: { name: string, file: string }[]) {
    for (const { name, file } of templates) {
        fs.mkdirSync(path.dirname(name), { recursive: true });
        fs.writeFileSync(name, String(file).trimLeft());
    }
    return templates.length;
}
