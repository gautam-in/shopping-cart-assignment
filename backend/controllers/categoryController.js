import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";
import Banner from "../models/bannerModel.js";

// @desc    Fetch all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});

  res.json({ status: true, data: categories });
});

const getBanners = asyncHandler(async (req, res) => {
  const banners = await Banner.find({});

  res.json({ status: true, data: banners });
});

export { getCategories, getBanners };
