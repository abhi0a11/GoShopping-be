import ErrorHandler from "../middlewares/error.js";
import productModel from "../models/products.js";

export const add = async (req, res, next) => {
  try {
    const {
      name,
      price,
      discount,
      picture,
      description,
      warranty,
      color,
      woodMaterial,
      clothMaterial,
      category,
    } = req.body;

    let product = await productModel.findOne({ name });
    if (product) return next(new ErrorHandler("Product already exist", 409));

    product = productModel.create({
      name,
      price,
      discount,
      picture,
      description,
      warranty,
      color,
      woodMaterial,
      clothMaterial,
      category,
    });
    res.status(200).send(`Successfully added ${name}`);
  } catch (error) {
    next(error);
  }
};
export const fetchProducts = async (req, res, next) => {
  try {
    const { category } = req.params;
    const products = await productModel.find({ category });
    if (!products) return next(new ErrorHandler("No product Found!", 409));

    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};
export const removeProducts = async (req, res, next) => {
  try {
    const { name } = req.params;

    let product = await productModel.findOneAndDelete({ name });
    if (!product) {
      return next(new ErrorHandler("No product Found!", 409));
    }

    res.status(200).send(`Product ${name} is deleted successfully`);
  } catch (error) {
    next(error);
  }
};
export const UpdateProducts = async (req, res, next) => {
  try {
    const { name } = req.params;
    const updates = req.body;

    const updateProduct = await productModel.findOneAndUpdate(
      { name },
      updates,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updateProduct) return next(new ErrorHandler("No product Found!", 409));

    res.status(200).send(`Product ${name} is updated successfully`);
  } catch (error) {
    next(error);
  }
};
