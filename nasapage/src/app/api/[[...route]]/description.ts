import { Hono } from "hono";
import { inspect } from "util";
import serverConfig from "../../../../server.config";
import { Configuration, DatabaseConnection, ServerInfo } from "../../../../configurations/xdsa_config";
import {z} from 'zod'
import { generateZodTypeFromConfig } from "@8592/config_utils";
import { buildMariaDBTables } from "../../../../dbhandler/dbhandler";




export function registerServerMetadataRoutes(app: Hono) {
  const control = new Hono();

  control.get("/", async (c) => {
    return c.json(ServerInfo);
  });
  
  control.get("/match/fields", async (c) => {

    return c.json(Configuration)
      
  })

  control.get("/match/fields/refresh", async (c) => {
    
    try {
      
      await buildMariaDBTables(Configuration)
      return c.json({okay: "okay"})

    }
    catch {
      return c.json({notokay: "i am dead help"}, {status: 400});
    }
  })

  app.route("/info", control);
}
