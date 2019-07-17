export const name = "src/app.ts"
export const file = `
import { BrowserApplication } from "@typescene/webapp";
import { MainActivity } from "./activities/main/activity";

BrowserApplication.run(
    MainActivity,
    // ... add activities here
);
`