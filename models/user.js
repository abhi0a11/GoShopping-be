import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    required: true,
    type: String,
    select: false,
  },
  role: {
    required: true,
    type: String,
  },
  block: {
    default: false,
    type: Boolean,
  },
  cart: {
    type: [],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", usersSchema);
