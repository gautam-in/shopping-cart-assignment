const express = require("express");
const router = express.Router();
const {getBanners} = require("../controllers/banners");
const {protect} = require("../middleware/auth");
router.get('/',protect, getBanners);

module.exports = router;