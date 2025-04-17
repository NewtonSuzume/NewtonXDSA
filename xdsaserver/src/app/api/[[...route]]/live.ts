import { Hono } from "hono";
import { createNodeWebSocket } from '@hono/node-ws'

export function liveEventSockets(app: Hono) {
  const control = new Hono();
  const { injectWebSocket, upgradeWebSocket } = createNodeWebSocket({ app })

  control.get("/live", upgradeWebSocket((x) => {

    return {

        onMessage: (e, ws) => {
            console.log(e.data)
        }
    }

  }))

  app.route("/info", control);
}
