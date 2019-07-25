import * as path from "path";

const hasFlag = (...str: string[]) =>
    str.some(flag => process.argv.some(s => s === flag));

const getOption = (name: string) =>
    (process.argv.find(s => s.startsWith(name + "=")) || "")
        .replace(/^.*\=/, "");

const folder = process.argv.slice(2).find(s => s[0] !== "-") || "";
const fullFolder = folder && path.resolve(folder);
const name = folder && path.basename(fullFolder);

const config = {
    /** Project name */
    name,

    /** Folder name */
    folder,

    /** Absolute folder name */
    fullFolder,

    /** Force overwrite */
    overwrite: hasFlag("--overwrite"),

    /** Use Yarn instead of NPM? */
    yarn: hasFlag("--yarn"),

    /** Git init? */
    git: hasFlag("-g", "--git"),

    /** Use TypeScript? */
    ts: !hasFlag("-j", "--js"),

    /** Use JSX/TSX? */
    jsx: hasFlag("--jsx", "--tsx"),

    /** Bundler (defaults to webpack) */
    bundler: (getOption("--bundler") || getOption("-b") ||
        "webpack").toLowerCase()
}

export default config;
