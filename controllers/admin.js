import { User } from "../models/user.js";
import { sendCookie } from "../utils/features.js";

export const getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    next(error);
  }
};
