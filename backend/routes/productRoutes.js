import express from "express";
const router = express.Router();

import {
  getProducts,
  getProductByCatId,
} from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/:id').post(getProductByCatId)

export default router;
