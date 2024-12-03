import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  // console.log(new URL(process.env.BACKEND_URL).hostname);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      domain:
        process.env.NODE_ENV === "Development"
          ? "localhost" // Only the hostname for development
          : new URL(process.env.BACKEND_URL).hostname,
      path: "/",
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      user,
      message: message,
    });
};
