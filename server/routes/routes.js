const expresss = require('express');
const router = expresss.Router();
//import controllers
const authCtrl = require('../controllers/auth');
const registerCtrl = require('../controllers/register');
const cartCtrl = require('../controllers/cart');
const categoriesCtrl = require('../controllers/categories');
const productCtrl = require('../controllers/product');
const bannerCtrl = require('../controllers/banner');
const path = require('path')

//import validator
const validator = require('../middleware/validator');

//application routes
router.post('/login',validator.validateLoginPayload,authCtrl.login);
router.post('/register',validator.validateRegisterPayload,registerCtrl.register);
router.post('/addToCart',[validator.verifyToken,validator.validateCartPayload],cartCtrl.addToCart);
router.put('/removeToCart',validator.verifyToken,cartCtrl.removeCart);
router.get('/cart',validator.verifyToken,cartCtrl.getCart);
router.get('/products',productCtrl.getProducts);
router.get('/banners',bannerCtrl.getBanners);
router.get('/categories',categoriesCtrl.getCategories);
router.get('/logout',validator.verifyToken,authCtrl.logout);

module.exports = router;