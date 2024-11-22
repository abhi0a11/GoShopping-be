import express from "express";
import { getAllUser } from "../controllers/admin.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", isAuthenticated, getAllUser);

export default router;
