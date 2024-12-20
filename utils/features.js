import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  // console.log(new URL(process.env.BACKEND_URL).hostname);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      path: "/api/v1/auth/token",
      maxAge: 15 * 60 * 1000,
      // domain:
      //   process.env.NODE_ENV === "Development"
      //     ? "localhost" // Only the hostname for development
      //     : new URL(process.env.BACKEND_URL).hostname,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      user,
      message: message,
    });
};
