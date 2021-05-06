import config from "../../config";
import { depend } from "../../versions";

export const name = "package.json";
export const file = JSON.stringify(
  {
    ...config.packageBase,
    "scripts": {
      "start": "parcel src/index.html --open",
      "build": "parcel build src/index.html",
    },
    "dependencies": depend("typescene", "@typescene/webapp"),
    "devDependencies": depend("typescript", "parcel"),
  },
  undefined,
  "  "
);
