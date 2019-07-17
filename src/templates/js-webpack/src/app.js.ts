export const name = "src/app.js"
export const file = `
import { BrowserApplication } from "@typescene/webapp";
import { MainActivity } from "./activities/main/activity";

BrowserApplication.run(
    MainActivity,
    // ... add activities here
);
`