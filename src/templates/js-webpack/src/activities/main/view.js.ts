import config from "../../../../../config";

export const name = !config.jsx && "src/activities/main/view.js";
export const file = `
import { UICell, UICenterRow, UILabel } from "typescene";

export default (
  UICell.with(
    UICenterRow.with(
      UILabel.withText("Hello, world!")
    )
  )
);
`;
