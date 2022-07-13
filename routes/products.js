const express = require("express");
const router = express.Router();
const {getProducts} = require("../controllers/products");
const {protect} = require("../middleware/auth");
router.get('/', protect, getProducts);

module.exports = router;