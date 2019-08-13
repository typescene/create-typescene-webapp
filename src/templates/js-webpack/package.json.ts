import config from "../../config";

export const name = "package.json"
export const file = JSON.stringify({
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
        "build": "webpack -p --config src/webpack.config.js"
    },
    "dependencies": {
        "@typescene/webapp": "^2.0.0"
    },
    "devDependencies": {
        "@babel/core": "^7.5.5",
        "@babel/plugin-transform-react-jsx":
            config.jsx ? "^7.3.0" : undefined,
        "@babel/plugin-transform-runtime": "^7.5.5",
        "@babel/preset-env": "^7.5.5",
        "@babel/runtime": "^7.5.5",
        "babel-loader": "^8.0.6",
        "webpack": "^4.31.0",
        "webpack-cli": "^3.3.2",
        "webpack-dev-server": "^3.3.1",
        "copy-webpack-plugin": "^5.0.3"
    }
}, undefined, "  ")
