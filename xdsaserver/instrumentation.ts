import { Configuration, DatabaseConnection } from "./configurations/xdsa_config";
import { refreshMariaDBTables } from "./dbhandler/dbhandler";

export function register() {
    
    if (DatabaseConnection.clearOnStart) {
        console.log("Any data that is in this database will be cleared in 5 seconds.")
        console.log("You will know when the DB has been reinitialized, because you will see Japanese text.")

        setTimeout(() => {    refreshMariaDBTables(Configuration);
        }, 5000)
    }

}