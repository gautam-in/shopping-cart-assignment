const express = require("express");
const router = express.Router();
const {getCategories} = require("../controllers/categories");
const {protect} = require("../middleware/auth");
router.get('/', protect, getCategories);

module.exports = router;