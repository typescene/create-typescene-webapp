const VERSIONS = {
  "typescene": "3",
  "@typescene/webapp": "^3.1.0",
  "typescript": "*",
  "webpack": "^5.36.2",
  "webpack-cli": "^4.6.0",
  "webpack-plugin-serve": "^1.4.1",
  "copy-webpack-plugin": "^8.1.1",
  "ts-loader": "^9.1.1",
  "@babel/core": "^7.14.0",
  "@babel/plugin-transform-runtime": "^7.13.15",
  "@babel/plugin-transform-react-jsx": "^7.13.12",
  "@babel/preset-env": "^7.14.1",
  "@babel/runtime": "^7.14.0",
  "babel-loader": "^8.2.2",
  "parcel": "2.0.0-beta.2",
  "@rollup/plugin-node-resolve": "^13.0.0",
  "@rollup/plugin-typescript": "^8.2.1",
  "rollup-plugin-livereload": "^2.0.0",
  "rollup-plugin-serve": "^1.1.0",
  "rollup": "^2.47.0",
};

export function depend(...packages: Array<keyof typeof VERSIONS | undefined>) {
  let result: any = {};
  for (let p of packages) {
    if (p) result[p] = VERSIONS[p];
  }
  return result;
}
