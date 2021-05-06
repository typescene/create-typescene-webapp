import config from "../../../../../config";

export const name = config.jsx && "src/activities/main/view.jsx";
export const file =
  'import { JSX } from "typescene";\n' +
  (config.bundler !== "webpack" ? "/** @jsx JSX */\n" : "") +
  `
export default (
  <cell>
    <centerrow>
      <label>Hello, world!</label>
    </centerrow>
  </cell>
);
`;
