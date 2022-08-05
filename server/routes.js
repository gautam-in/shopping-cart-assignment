const { Router } = require("express");
const loginController = require("../server/controllers/login");
const  productsController  = require("./controllers/productsController");
const router = Router({ strict: true });
const { isValidToken } = require("./middleware");

router.post("/login", loginController.login);
router.get("/products", isValidToken, productsController.getAllProducts);
router.get("/product/:id", isValidToken, productsController.getProduct);


module.exports = router;