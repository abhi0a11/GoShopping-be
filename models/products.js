import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Please provide item name."],
    },
    price: {
      type: String,
      default: "0",
    },
    discount: {
      type: String,
      default: "0",
    },
    pictures: {
      type: [String],
    },
    description: {
      type: String,
    },
    warranty: {
      type: String,
    },
    color: {
      type: [],
    },
    woodMaterial: {
      type: [],
    },
    clothMaterial: {
      type: [],
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      default: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { Collection: "products", timestamps: true }
);

const productModel =
  mongoose.models.productModel || mongoose.model("productModel", productSchema);

export default productModel;
