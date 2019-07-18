export const name = "src/activities/main/activity.js"
export const file = `
import { PageViewActivity } from "typescene";
import view from "./view";

export default class MainActivity extends PageViewActivity.with(view) {
    constructor () {
        super();
        this.path = "/";
    }

    async onManagedStateActiveAsync() {
        await super.onManagedStateActiveAsync();
        console.log("MainActivity is now active");
    }
}
`