import express, { Router } from "express";
import { ZoomAdapter } from "./adapters/ZoomAdapter";

import { createMeetingRoute, getAllMeetingsRoute } from "./routes";

const router: Router = express.Router();

const adapter = new ZoomAdapter();

router.get("/meeting", getAllMeetingsRoute(adapter));
router.post("/meeting", createMeetingRoute(adapter));

export default router;
