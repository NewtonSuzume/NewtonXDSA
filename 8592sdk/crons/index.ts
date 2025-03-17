import * as cron from "node-cron";
import { loadEvents } from "@8592/utils";

cron.schedule(`0 */6 * * *`, async () => {
  loadEvents();
});
