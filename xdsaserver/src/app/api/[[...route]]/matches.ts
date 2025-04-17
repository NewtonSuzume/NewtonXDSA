import { Hono } from "hono";
import { generateZodTypeFromConfig } from "../../../../8592sdk/helpers";
import { Configuration } from "../../../../configurations/xdsa_config";
import { pullFromMatchesTable, upsertMatch } from "../../../../dbhandler/dbhandler";
import { wss } from "@/app/sock/live_events";

export function registerMatchesRoutes(app: Hono) {
  const matches = new Hono();

  matches.get("/", async (c) => {
    try {
      const matches = await pullFromMatchesTable();
      return c.json(matches);
    }
    catch (err) {
      return c.json({error: "A critical database error has occurred."}, {status: 503})
    }
  });

  matches.get("/id/:id", async (c) => {
    const id = c.req.param("id");

    try {
      const matches = (await pullFromMatchesTable({property: "id", value: id}))[0];
      return c.json(matches);
    }
    catch (err) {
      return c.json({error: "A critical database error has occurred."}, {status: 503})
    }

  });

  matches.get("/team/:team", async (c) => {

    const team = c.req.param("team");
    try {
      const matches = await pullFromMatchesTable({property: "team_number", value: team});
      return c.json(matches);
    }
    catch (err) {
      return c.json({error: "A critical database error has occurred."}, {status: 503})
    }
    
  });

  matches.get("/match/:m_num", async (c) => {

    const match = c.req.param("m_num");
    try {
      const matches = await pullFromMatchesTable({property: "match_num", value: match});
      return c.json(matches);
    }
    catch (err) {
      return c.json({error: "A critical database error has occurred."}, {status: 503})
    }
    
  });

  matches.get("/scouter/:scouter", async (c) => {

    const scouter_type_enum = ["R1", "R2", "R3", "B1", "B2", "B3"]

    const scouter_type = c.req.param("scouter")

    let type_num = scouter_type_enum.indexOf(scouter_type)

    try {
      const matches = await pullFromMatchesTable({property: "scouter_num", value: String(type_num)});
      return c.json(matches);
    }
    catch (err) {
      return c.json({error: "A critical database error has occurred."}, {status: 503})
    }
    
  });
  
  matches.post("/create", async (c) => {

    const json = await c.req.json()

    const test = generateZodTypeFromConfig(Configuration).safeParse(json)

    if (test.success) {

      console.log("DATABASE ADDITION SHOULD SUCCEED")
      try {
        
        await upsertMatch(Configuration, json)
        return c.json(json, {status: 200 })
      }
      catch (err) {
        return c.json({error: "The database has an error and is not accepting entries. Please wait."}, {status: 503})
      }
      

    } else {

      console.log("DATABASE ADDITION FAILED WITH SCHEMA MATCH ERROR")
      return c.json({error: "Incorrect schema, reference the schema info endpoint to see what the correct schema is."}, {status: 400})

    }



  })

  app.route("/match-data", matches);
}
