import config from "../../../../../config";

export const name = config.jsx && "src/activities/main/view.jsx";
export const file = `
import { HMR } from "@typescene/webapp";
import { JSX } from "typescene";

export default HMR.enableViewReload(
  module,
  <cell>
    <centerrow>
      <label>Hello, world!</label>
    </centerrow>
  </cell>
);
`;
