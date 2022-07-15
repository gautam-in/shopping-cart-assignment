import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @desc    Fetch Product Based on Category Id
// @route   POST /api/products
// @access  Public
const getProductByCatId = asyncHandler(async (req, res) => {
  const product = await Product.find({ category: req.body.categoryId });

  if (product) {
    res.json({ status: true, data: product });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductByCatId };
