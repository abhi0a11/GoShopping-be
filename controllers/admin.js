import ErrorHandler from "../middlewares/error.js";
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
export const deleteUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndDelete({ email });

    if (!user) return next(new ErrorHandler("No user Found!", 409));

    res.status(200).send({
      success: true,
      message: `${email} Removed Successfully`,
    });
  } catch (error) {
    next(error);
  }
};
export const blockUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndUpdate(
      { email },
      {
        block: true,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.send({
      sucess: true,
      message: "User blocked",
    });
  } catch (error) {
    next(error);
  }
};
export const UnblockUser = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await User.findOneAndUpdate(
      { email },
      {
        block: false,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    res.send({
      sucess: true,
      message: "User Unblocked",
    });
  } catch (error) {
    next(error);
  }
};
