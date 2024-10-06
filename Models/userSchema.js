import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    groomName: {
      type: String,
      required: true,
    },
    brideName: {
      type: String,
      required: true,
    },
    marriageDate: {
      type: Date,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
