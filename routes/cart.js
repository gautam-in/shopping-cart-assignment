const express = require("express");
const router = express.Router();
const {addToCart} = require("../controllers/cart");
const {protect} = require("../middleware/auth");
router.post('/addToCart',protect, addToCart);

module.exports = router;