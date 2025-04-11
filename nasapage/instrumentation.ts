import { Configuration } from "./configurations/xdsa_config";
import { refreshMariaDBTables } from "./dbhandler/dbhandler";

export function register() {
    console.log("Any data that is in this database will be cleared in 10 seconds.")
    console.log("You will know when the DB has been reinitialized, because you will see Japanese text.")

    setTimeout(() => {    refreshMariaDBTables(Configuration);
    }, 10000)

}