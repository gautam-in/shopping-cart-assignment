import express from "express";
const router = express.Router();

import {
  getCategories,
  getBanners
} from '../controllers/categoryController.js'

router.route('/').get(getCategories)
router.route('/banners').get(getBanners)

export default router;
