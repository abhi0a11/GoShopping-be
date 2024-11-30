import ErrorHandler from "../middlewares/error.js";
import productModel from "../models/products.js";
import { User } from "../models/user.js";

export const add = async (req, res, next) => {
  try {
    const { name } = req.params;
    const { _id } = req.body;
    const { cart } = req.body;

    const updateCartItem = await User.findByIdAndUpdate(
      { _id },
      {
        cart: cart,
      },
      {
        new: true,
      }
    );

    if (!updateCartItem)
      return next(new ErrorHandler(`${name} not Found!`, 409));
    res.status(200).send(`${name} Successfully added to Cart`);
  } catch (error) {
    next(error);
  }
};
export const fetchAllProducts = async (req, res, next) => {
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

    res.status(200).send({
      success: true,
      message: `${name} deleted successfully`,
    });
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
