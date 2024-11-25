import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log("token ", token);
    console.log("token ", req.cookies);
    if (!token)
      return res.status(404).json({
        success: false,
        auth: false,
        message: "Login first",
      });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    res.status(401).json({
      success: false,
      auth: false,
      message: "Authentication failed",
    });
  }
};
