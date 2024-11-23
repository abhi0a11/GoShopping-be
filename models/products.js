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
    picture: {
      type: [String],
      default: ["DEFAULT_PIC"],
    },
    description: {
      type: String,
    },
    warranty: {
      type: String,
    },
    color: {
      type: [String],
    },
    woodMaterial: {
      type: [String],
    },
    clothMaterial: {
      type: [String],
    },
    category: {
      type: String,
      required: true,
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
