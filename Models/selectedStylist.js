import mongoose from "mongoose";

const selectedServiceSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true, // Service name
  },
  price: {
    type: Number,
    required: true, // Service price
  },
});

const selectedStylistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the user who selects services
    ref: "Auth", // Reference to your User model
    required: true,
  },
  stylistId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the stylist
    ref: "EventStylist", // Reference to the EventStylist model
    required: true,
  },
  stylistName: {
    type: String, // To store stylist's name for easy reference
    required: true,
  },
  selectedServices: [selectedServiceSchema], // Selected services and prices
  totalAmount: {
    type: Number, // Total cost of selected services
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Track when this was created
  },
});

// Create a model for selected stylists
const SelectedStylist = mongoose.model(
  "SelectedStylist",
  selectedStylistSchema
);
export default SelectedStylist;
