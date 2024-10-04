import mongoose from "mongoose";

// Define the BookedEvent schema
const bookedEventSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth", // Reference to the User who made the booking
      required: true,
    },
    stylist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EventStylist", // Reference to the stylist
      required: true,
    },
    selection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EventSelection", // Reference to the selected services
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true, // This is the grand total amount including stylist services
    },
  },
  { timestamps: true }
);

// Create the model from the schema
const BookedEvent = mongoose.model("BookedEvent", bookedEventSchema);

export default BookedEvent;
