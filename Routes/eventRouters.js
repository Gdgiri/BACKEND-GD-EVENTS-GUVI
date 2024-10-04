import express from "express";
import {
  createEventStylist,
  deleteEvent,
  deleteEventStylist,
  deleteSelectionStyle,
  eventCreate,
  fetchEvent,
  fetchId,
  getAllSelection,
  getAllStylist,
  getEventStylistById,
  stylistCreate,
  stylistGet,
  updateEvent,
  updateEventStylist,
  updateStylistSelection,
} from "../Controllers/eventController.js";

const router = express.Router();

router.post("/createevent", eventCreate);
router.get("/getallevent", fetchEvent);
router.get("/getevent/:id", fetchId);
router.put("/editevent/:id", updateEvent);
router.delete("/deleteevent/:id", deleteEvent);

// eventStylist

router.post("/createstylist", createEventStylist);
router.get("/getallStylist", getAllStylist);
router.get("/getstyleevent/:id", getEventStylistById);
router.put("/updatestylist/:id", updateEventStylist);
router.delete("/deletestylist/:id", deleteEventStylist);

// eventStylist User Selection

router.post("/createstylistselection", stylistCreate);
router.get("/getselectstylist/:id", stylistGet);
router.get("/getallselection", getAllSelection);
router.put("/editselectionstyle/:id", updateStylistSelection);
router.delete("/deleteselectionstyle/:id", deleteSelectionStyle);

export default router;
