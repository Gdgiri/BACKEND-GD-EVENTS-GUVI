import express from "express";
import {
  deleteEvent,
  eventCreate,
  fetchEvent,
  fetchId,
  updateEvent,
} from "../Controllers/eventController.js";

const router = express.Router();

router.post("/createevent", eventCreate);
router.get("/getallevent", fetchEvent);
router.get("/getevent/:id", fetchId);
router.put("/editevent/:id", updateEvent);
router.delete("/deleteevent/:id", deleteEvent);

export default router;
