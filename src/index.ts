import chalk from "chalk";
import { spawn } from "child_process";
import * as fs from "fs";
import config from "./config";
import { writeAllTemplateFiles } from "./templates";
import * as tips from "./tips";

function main() {
    try {
        // check config
        if (!config.name) {
            throw Error("Please specify a project name");
        }
        if (config.bundler !== "webpack" &&
            config.bundler !== "parcel") {
            throw Error("Invalid bundler: " + config.bundler);
        }

        // create the target folder first
        if (fs.existsSync(config.name)) {
            if (!config.overwrite) {
                tips.add("Use --overwrite flag to overwrite files");
                throw Error("Folder already exists: " + config.name);
            }
            console.log(chalk.red.bold("Using existing folder") + " " +
                chalk.blue(config.name));
        }
        else {
            fs.mkdirSync(config.folder, { recursive: true });
            console.log("Created working folder " + chalk.blue(config.folder));
        }

        // change over to the target folder to make things easier
        process.chdir(config.folder);

        // create all the files
        let totalFiles = writeAllTemplateFiles();
        console.log(totalFiles + " files written.\n");

        // initialize NPM package
        console.log(chalk.dim.italic("Installing packages..."));
        var npm = spawn(config.yarn ? "yarn" : "npm",
            config.yarn ? ["install", "-s"] : ["install"],
            {
                env: process.env,
                stdio: "inherit",
                detached: true
            });
        npm.on("close", code => {
            npm.unref();
            if (code !== 0) {
                logAndExit(Error("Installation failed"));
            }

            // add tips about `npm run`
            tips.add("Created a new app in " + chalk.blue(config.fullFolder),
                "    " + chalk.green("cd " + config.folder),
                "    " + chalk.green(config.yarn ? "yarn run start" : "npm run start"),
                "      to start a development server and open a browser",
                "    " + chalk.green(config.yarn ? "yarn run start" : "npm run build"),
                "      to build a production bundle");

            // initialize git repository if requested
            if (config.git) {
                let git = spawn("git", ["init"], {
                    env: process.env,
                    stdio: "inherit",
                    detached: true
                });
                git.on("close", code => {
                    logAndExit(code ? Error("Initialization failed") : undefined);
                });
            }
            else {
                tips.add(chalk.bold("Did not") + " initialize a repository",
                    "    " + chalk.green("cd " + config.folder),
                    "    " + chalk.green("git init"),
                    "      to initialize an empty Git repository");
                logAndExit();
            }
        });
    }
    catch (err) {
        logAndExit(err);
    }
}

function logAndExit(err?: Error) {
    if (err) console.log(chalk.red.bold("ERROR: ") + err.message);
    else tips.log();
    process.exit(err ? 1 : 0);
}

if (process.argv.some(a => a === "-h" || a === "-?" || a === "--help")) {
    console.log(chalk.bold("Usage:") +
        " npx create-typescene-webapp " +
        chalk.green("<project-folder>") + " [options]\n");
    console.log("Options:\n\n" +
        "  -j, --js         Do NOT install and use TypeScript\n" +
        "  --jsx            Include JSX support\n" +
        "  --bundler=<...>  Use a specific bundler (webpack or parcel)\n" +
        "  --yarn           Use Yarn instead of NPM\n" +
        "  -g, --git        Initialize git repository\n" +
        "  --overwrite      Force overwrite files in existing folder\n" +
        "  -h, --help       Print help information\n" +
        "\n");
    process.exit(0);
}
main();
