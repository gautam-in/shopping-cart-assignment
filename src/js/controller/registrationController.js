const registrationView = require("../view/registrationView");
const { headerController } = require("../controller/headerController");
const model = require("../model/homeModel");

const registrationController = async function () {
  headerController();
  await registrationView.renderDOM(model.state);
  registrationView.addRegistrationHandler(handleFormSubmission);
};

const handleFormSubmission = async function (data) {
  await model.persistUserData(data);
  window.location.hash = "login";
};

module.exports = registrationController;
