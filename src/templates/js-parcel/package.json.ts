import config from "../../config";
import versions from "../../versions";

export const name = "package.json";
export const file = JSON.stringify(
  {
    ...config.packageBase,
    "scripts": {
      "start": "parcel src/index.html --open",
      "build": "parcel build src/index.html",
    },
    "dependencies": {
      "typescene": versions.typescene,
      "@typescene/webapp": versions["@typescene/webapp"],
    },
    "devDependencies": {
      "parcel": versions["parcel"],
    },
  },
  undefined,
  "  "
);
