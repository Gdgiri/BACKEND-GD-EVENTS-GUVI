import mongoose from "mongoose";

const serviceOptionSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
 
});

const eventStylistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  services: [serviceOptionSchema],
});

eventStylistSchema.index({ name: 1 });

const EventStylist = mongoose.model("EventStylist", eventStylistSchema);

export default EventStylist;
