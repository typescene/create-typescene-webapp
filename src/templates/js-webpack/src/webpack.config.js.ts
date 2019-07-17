export const name = "src/webpack.config.js"
export const file = `
const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "app.js")
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].[chunkhash].bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    resolve: {
        extensions: [".js"],
    },
    plugins: [
        new CopyPlugin([path.resolve(__dirname, "public")])
    ]
};
`