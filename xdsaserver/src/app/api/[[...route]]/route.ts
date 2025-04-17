import { handle } from 'hono/vercel'
import { Hono } from "hono";
import { registerMatchesRoutes } from "./matches";

import { registerServerMetadataRoutes } from './description';

const app = new Hono().basePath('/api');

const port = 3000;

registerMatchesRoutes(app);
registerServerMetadataRoutes(app);

app.get('/check', async (c) => {
  return c.json({success: true})
})

export const GET = handle(app)
export const POST = handle(app)