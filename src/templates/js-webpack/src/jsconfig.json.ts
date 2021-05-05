import config from "../../../config";

const targetAlias: any = { es8: "es2017" };

export const name = "src/jsconfig.json";
export const file = JSON.stringify(
  {
    "compilerOptions": {
      "strict": true,
      "module": "es2020",
      "moduleResolution": "node",
      "target": targetAlias[config.target] || config.target,
      "lib": ["es2015", "dom"],
      "jsx": config.jsx ? "react" : undefined,
      "jsxFactory": config.jsx ? "JSX" : undefined,
    },
  },
  undefined,
  "  "
);
