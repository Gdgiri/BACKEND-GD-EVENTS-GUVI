import express from "express";
import {
  createBooked,
  createBooking,
  createEventStylist,
  createWedding,
  deleteEvent,
  deleteEventStylist,
  deleteSelectionStyle,
  eventCreate,
  fetchEvent,
  fetchId,
  getAllSelection,
  getAllStylist,
  getAllWed,
  getBooked,
  getBookingDetails,
  getEventStylistById,
  getFeedbacks,
  getWed,
  stripePayment,
  stylistCreate,
  stylistGet,
  submitFeedback,
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

// user wedding form

router.post("/creatwed", createWedding);
router.get("/getall", getAllWed);
router.get("/getwed/:id", getWed);

// booked

router.post("/createbook", createBooking);
router.get("/getbooked", getBookingDetails);

// payment

router.post("/payment", stripePayment);

// feedback

router.post("/createfeedback", submitFeedback);
router.get("/getfeedback", getFeedbacks);

// booking

router.post("/createbooking", createBooked);
router.get("/getbooking", getBooked);

export default router;
