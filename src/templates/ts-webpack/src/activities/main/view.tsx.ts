import config from "../../../../../config";

export const name = config.jsx && "src/activities/main/view.tsx";
export const file = `
import { JSX } from "typescene";

export default (
  <cell>
    <centerrow>
      <label>Hello, world!</label>
    </centerrow>
  </cell>
);
`;
