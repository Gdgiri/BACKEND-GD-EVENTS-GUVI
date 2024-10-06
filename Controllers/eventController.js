import Booking from "../Models/bookingSchema.js";
import Event from "../Models/eventSchema.js";
import EventSelection from "../Models/eventSelection.js";
import EventStylist from "../Models/eventStylistSchema.js";
import Feedback from "../Models/feedbackSchema.js";
import User from "../Models/userSchema.js";

// Create

export const eventCreate = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();

    res
      .status(200)
      .json({ message: "event created successfully", result: newEvent });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "event creation failed due to an internal server error",
    });
  }
};

// getAll

export const fetchEvent = async (req, res) => {
  try {
    const getEvent = await Event.find();
    res
      .status(200)
      .json({ message: "event's fetch successfully", result: getEvent });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "event data's fetch failure due to an internal server error",
    });
  }
};

// getbyId

export const fetchId = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json({ message: "Event fetched ", result: event });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ messaeg: "fetch data is failed due to internal server error" });
  }
};

// update

export const updateEvent = async (req, res) => {
  try {
    const id = req.params.id;
    //console.log(id);

    const modifyEvent = await Event.findByIdAndUpdate(
      id,
      {
        venueImg: req.body.venueImg,
        venueName: req.body.venueName,
        venuePlace: req.body.venuePlace,
        venueAmount: req.body.venueAmount,
        cateringName: req.body.cateringName,
        cateringAmount: req.body.cateringAmount,
        photographerName: req.body.photographerName,
        photographerAmount: req.body.photographerAmount,
        eventStylistName: req.body.eventStylistName,
        eventStylistAmount: req.body.eventStylistAmount,
        entertainerName: req.body.entertainerName,
        entertainerAmount: req.body.entertainerAmount,
        beauticianName: req.body.beauticianName,
        beauticianAmount: req.body.beauticianAmount,
        transportName: req.body.transportName,
        transportAmount: req.body.transportAmount,
      },
      { new: true, runValidators: true }
    );

    if (!modifyEvent) {
      return res.status(404).json({ message: "event not found" });
    }
    res
      .status(200)
      .json({ message: "event updated successfully", result: modifyEvent });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "events update failure due to internal server error" });
  }
};

// delete

export const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    //console.log(id);

    const removeEvent = await Event.findByIdAndDelete(id);

    if (!removeEvent) {
      return res.status(404).json({ message: "event not found" });
    }
    res
      .status(200)
      .json({ message: "event deleted successfully", result: removeEvent });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "event data failed to delete due to internal server error",
    });
  }
};

// create EventStylist

export const createEventStylist = async (req, res) => {
  const { name, imgUrl, services } = req.body;

  try {
    const eventStylist = new EventStylist({ name, imgUrl, services });
    await eventStylist.save();
    res.status(200).json({
      message: "event stylist created successfully",
      result: eventStylist,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "event stylist created failed due to an internal server error",
    });
  }
};

// get AllEventStylist

export const getAllStylist = async (req, res) => {
  try {
    const eventStylists = await EventStylist.find();
    res
      .status(200)
      .json({ message: "event stylist fetch success", result: eventStylists });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "event stylist fetch failed due to an internal server error",
    });
  }
};

// get EventStylistId

export const getEventStylistById = async (req, res) => {
  const { id } = req.params;
  console.log("hi", id);

  try {
    const eventStylist = await EventStylist.findById(id);
    if (!eventStylist) {
      return res.status(404).json({ message: "Event Stylist not found" });
    }
    res.status(200).json(eventStylist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch Event Stylist" });
  }
};

// Update EventStylist

export const updateEventStylist = async (req, res) => {
  const { id } = req.params;
  const { name, imgUrl, services } = req.body;

  try {
    const updatedEventStylist = await EventStylist.findByIdAndUpdate(
      id,
      { name, imgUrl, services },
      { new: true }
    );
    if (!updatedEventStylist) {
      return res.status(404).json({ message: "Event Stylist not found" });
    }
    res.status(200).json({
      message: "Event Stylist updated successfully",
      result: updatedEventStylist,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update Event Stylist" });
  }
};

// delete Stylist

export const deleteEventStylist = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEventStylist = await EventStylist.findByIdAndDelete(id);
    if (!deletedEventStylist) {
      return res.status(404).json({ message: "Event Stylist not found" });
    }
    res.status(200).json({ message: "Event Stylist deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete Event Stylist" });
  }
};

// userStylistCreate

export const stylistCreate = async (req, res) => {
  try {
    const { totalStyleAmount, selectedItems, userPreference } = req.body; // Add userPreference here

    const newSelection = new EventSelection({
      totalStyleAmount,
      selectedItems,
      userPreference, // Now this is correctly defined
    });

    await newSelection.save();
    res
      .status(201)
      .json({ message: "Selection saved successfully", result: newSelection });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save selection" });
  }
};

// userSelectionget

export const stylistGet = async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from the URL
    const selection = await EventSelection.findById(id); // Find selection by ID

    if (!selection) {
      return res.status(404).json({ message: "Selection not found" });
    }

    res.status(200).json({ result: selection }); // Respond with the found selection
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch selection" });
  }
};

// userSelectGetAll

export const getAllSelection = async (req, res) => {
  try {
    const selections = await EventSelection.find();
    res.status(200).json({ result: selections });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch selections" });
  }
};

// update Stylist Selection

export const updateStylistSelection = async (req, res) => {
  try {
    const { totalStyleAmount, selectedItems } = req.body;
    const updatedSelection = await EventSelection.findByIdAndUpdate(
      req.params.id,
      { totalStyleAmount, selectedItems, userPreference },
      { new: true }
    );

    if (!updatedSelection) {
      return res.status(404).json({ message: "Selection not found" });
    }

    res.status(200).json({
      message: "Selection updated successfully",
      result: updatedSelection,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update selection" });
  }
};

// delete Selection Stylist

export const deleteSelectionStyle = async (req, res) => {
  try {
    const deletedSelection = await EventSelection.findByIdAndDelete(
      req.params.id
    );

    if (!deletedSelection) {
      return res.status(404).json({ message: "Selection not found" });
    }

    res.status(200).json({ message: "Selection deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete selection" });
  }
};

// user  wedding

// create

export const createWedding = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res
      .status(200)
      .json({ message: "Event created successfully", result: user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Event not created due to an internal server error" });
  }
};

// get All

export const getAllWed = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ message: "Data fetched successfully", result: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Fetching failed" });
  }
};

// get by id

export const getWed = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    if (!users) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json({ message: "Data fetched success", result: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "data fetch failed" });
  }
};

// booked

export const createBooking = async (
  userId,
  stylistId,
  selectionData,
  totalAmount
) => {
  try {
    // Create a new EventSelection entry
    const newSelection = new EventSelection({
      totalStyleAmount: selectionData.totalStyleAmount,
      selectedItems: selectionData.selectedItems,
    });
    await newSelection.save();

    // Create a new BookedEvent entry
    const newBooking = new BookedEvent({
      user: userId,
      stylist: stylistId,
      selection: newSelection._id, // Reference to the EventSelection
      totalAmount: totalAmount,
    });
    await newBooking.save();

    console.log("Booking created successfully!");
  } catch (error) {
    console.error("Error creating booking:", error);
  }
};

// getBooking

export const getBookingDetails = async (bookingId) => {
  try {
    const booking = await BookedEvent.findById(bookingId)
      .populate("user") // Populate user details
      .populate("stylist") // Populate stylist details
      .populate("selection"); // Populate the selected services

    console.log(booking);
  } catch (error) {
    console.error("Error fetching booking details:", error);
  }
};

export const stripePayment = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Working properly" });
};

// feedback

// create feedback

export const submitFeedback = async (req, res) => {
  const { userId, message } = req.body;

  try {
    const newFeedback = new Feedback({ userId, message });
    await newFeedback.save();
    res.status(201).json({
      message: "Feedback submitted successfully",
      feedback: newFeedback,
    });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ message: "Failed to submit feedback", error });
  }
};

// get feedback

export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate(
      "userId",
      "username email"
    ); // Populate user details
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    res.status(500).json({ message: "Failed to fetch feedbacks", error });
  }
};

// booking

// create book

export const createBooked = async (req, res) => {
  const { venueName, venueAmount, venuePlace } = req.body;

  const newBooking = new Booking({
    venueName,
    totalAmount,
    venueAmount,
    venuePlace,
    venueImg,
  });

  try {
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: "book create success", savedBooking });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get book

export const getBooked = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ message: "book fetched", bookings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
