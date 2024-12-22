import express from "express";
import {
  add,
  fetchProducts,
  fetchAllProducts,
  removeProducts,
  UpdateProducts,
} from "../controllers/products.js";

const router = express.Router();

router.post("/add", add);
router.get("/allproducts", fetchAllProducts);
router.get("/products/:category", fetchProducts);
router.delete("/remove/:name", removeProducts);
router.put("/update/:name", UpdateProducts);

export default router;
