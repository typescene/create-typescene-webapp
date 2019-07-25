import config from "../../../config";

export const name = "src/tsconfig.json"
export const file = JSON.stringify({
    "compilerOptions": {
        "strict": true,
        "module": "es2015",
        "moduleResolution": "node",
        "target": "es5",
        "lib": ["es2015", "dom"],
        "jsx": config.jsx ? "react" : undefined,
        "jsxFactory": config.jsx ? "JSX" : undefined,
        "experimentalDecorators": true,
        "downlevelIteration": true,
        "sourceMap": true
    }
}, undefined, "  ")
