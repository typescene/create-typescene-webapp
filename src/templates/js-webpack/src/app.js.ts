export const name = "src/app.js";
export const file = `
import { BrowserApplication } from "@typescene/webapp";
import MainActivity from "./activities/main/activity";

// ... register services here
// new MyService().register();

const app = BrowserApplication.run(
  MainActivity,
  // ... add activities here
);

// uncomment to use the browser history API:
// app.useHistoryAPI();
`;
