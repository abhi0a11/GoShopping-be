import express from "express";
import {
  getAllUser,
  deleteUser,
  blockUser,
  UnblockUser,
} from "../controllers/admin.js";

const router = express.Router();
router.delete("/delete/:email", deleteUser);
router.get("/all", getAllUser);
router.put("/block/:email", blockUser);
router.put("/unblock/:email", UnblockUser);
export default router;
