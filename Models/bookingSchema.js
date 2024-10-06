import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    venueName: { type: String, required: true },
    totalAmount: { type: Number, required: true },
    venueAmount: { type: Number, required: true },
    venuePlace: { type: String, required: true },
    venueImg: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
