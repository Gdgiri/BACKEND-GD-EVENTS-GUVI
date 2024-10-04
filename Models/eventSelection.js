// models/EventSelection.js
import mongoose from "mongoose";

const eventSelectionSchema = new mongoose.Schema(
  {
    totalStyleAmount: {
      type: Number,
      required: true,
    },
    selectedItems: [
      {
        label: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const EventSelection = mongoose.model("EventSelection", eventSelectionSchema);

export default EventSelection;
