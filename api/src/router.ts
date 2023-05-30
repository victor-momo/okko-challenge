import express, { Router } from "express";
import { ZoomAdapter } from "./adapters/ZoomAdapter";

import { getAllMeetingsRoute } from "./routes";

const router: Router = express.Router();

const adapter = new ZoomAdapter();

router.get("/meeting", getAllMeetingsRoute(adapter));

export default router;
