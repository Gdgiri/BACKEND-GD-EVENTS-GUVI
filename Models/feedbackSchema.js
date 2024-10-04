// models/Feedback.js
import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the user
    ref: "Auth", // Assuming you have an Auth model for users
    required: true,
  },
  message: {
    type: String,
    required: true,
    minlength: 5, // Minimum length for feedback
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model for feedback
const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;
