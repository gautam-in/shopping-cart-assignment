const homeController = require("../controller/homeController");
const productListController = require("../controller/productListController");
const registrationController = require("../controller/registrationController");
const loginController = require("../controller/loginController");
const helper = require("../helper");

class router {
  _routings = {
    register: "Register",
    login: "Login",
    home: "Home",
    products: "Products",
  };
  initRoutings(path = "") {
    const approute = helper.getHash(window, "path");
    switch (this._routings[approute]) {
      case "Home":
        homeController();
        break;
      case "Products":
        productListController();
        break;
      case "Register":
        registrationController();
        break;
      case "Login":
        loginController();
        break;
      default:
        window.location.hash = "login";
        break;
    }
  }
}
module.exports = new router();
