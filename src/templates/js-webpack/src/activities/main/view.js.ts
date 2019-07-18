export const name = "src/activities/main/view.js"
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