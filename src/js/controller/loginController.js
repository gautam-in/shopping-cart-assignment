const loginView = require("../view/loginView");
const { headerController } = require("../controller/headerController");
const model = require("../model/homeModel");

const loginController = async function () {
  headerController();
  await loginView.renderDOM(model.state);
  loginView.addLoginHandler(handleLogin);
};

const handleLogin = function (data) {
  // model.persistUserData(data);
  window.location.hash = "home";
  console.log(data);
};

module.exports = loginController;
