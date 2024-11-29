import express from "express";
import { add, removeProducts } from "../controllers/cart.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.put("/add/:name", add);
// router.put("/add/:name", isAuthenticated, add);
router.delete("/remove/:name", isAuthenticated, removeProducts);

export default router;
