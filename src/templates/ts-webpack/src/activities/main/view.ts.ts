import config from "../../../../../config";

export const name = !config.jsx && "src/activities/main/view.ts"
export const file = `
import { HMR } from "@typescene/webapp";
import { UICell, UICenterRow, UILabel } from "typescene";

export default HMR.enableViewReload(
    module,
    UICell.with(
        UICenterRow.with(
            UILabel.withText("Hello, world!")
        )
    )
)
`
