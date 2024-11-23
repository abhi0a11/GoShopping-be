import express from "express";
import { getAllUser } from "../controllers/admin.js";

const router = express.Router();

router.get("/all", getAllUser);

export default router;
