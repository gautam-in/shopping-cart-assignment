const { login, register } = require("../controllers/authController");
const {
  categories,
  products,
  offers,
  addToCart,
} = require("../controllers/dataController");

function initRoutes(app) {
  app.post("/register", register);
  app.post("/login", login);
  app.get("/categories", categories);
  app.get("/products", products);
  app.get("/offers", offers);
  app.post("/addToCart", addToCart);
}

module.exports = initRoutes;
