const express       = require('express');
const router        = express.Router();

// json-server npm
// import json data
const categories    = require('./categories/index.get.json');
// const addToCart    = require('./addToCart/index.get.json');
const banners    = require('./banners/index.get.json');
const products    = require('./products/index.get.json');

router.get('/category', (req, res) => res.json(categories));
router.get('/banner', (req, res) => res.json(banners));
router.get('/product', (req, res) => res.json(products));
// router.get('/addToCart', (req, res) => res.json(addToCart));

module.exports = router;
