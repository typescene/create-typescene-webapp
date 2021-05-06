export const name = "rollup.config.dev.js";
export const file = `
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

import config from "./rollup.config";
config.output.sourcemap = "inline";
config.plugins.push(
  serve({
    port: 8080,
    contentBase: "dist",
    open: true,
  }),
  livereload()
);

export default config;
`;
