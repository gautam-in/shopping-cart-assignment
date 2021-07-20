const registrationTemplate = require("../template/registrationTemplate");
const View = require("./View");
const config = require("../config");

/* eslint-disable quotes */
class registrationView extends View {
  _parentElement = document.querySelector(".main");

  async renderDOM(state) {
    const markup = registrationTemplate.generateMarkup();
    await this.render(this._parentElement, markup);
  }

  _validateUserDetails(fieldType) {
    switch (fieldType) {
      case "password":
        // Password must have minimum 6 characters containing alphabets with Uppercase and a Lowercase and number
        const pwdRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (this._password.value.match(pwdRegEx)) {
          this._password.setCustomValidity("");
        } else {
          this._password.setCustomValidity(
            config.MESSAGECATALOG.INVALID_PASSWORD
          );
        }
        break;
      case "confirm-password":
        if (this._password.value != this._confirmPassword.value) {
          this._confirmPassword.setCustomValidity(
            config.MESSAGECATALOG.INVALID_CNF_PASSWORD
          );
        } else {
          this._confirmPassword.setCustomValidity("");
          console.log(`equal`);
        }
        break;
    }
  }

  addRegistrationHandler(handler) {
    this._registrationForm = document.querySelector(".registration-form");
    this._firstName = document.getElementById("firstname");
    this._lastName = document.getElementById("lastname");
    this._email = document.getElementById("email");
    this._password = document.getElementById("password");
    this._confirmPassword = document.getElementById("confirm-password");

    this._password.addEventListener("keyup", (event) => {
      this._validateUserDetails("password");
    });

    this._confirmPassword.addEventListener("keyup", (event) => {
      this._validateUserDetails("confirm-password");
    });

    this._registrationForm.addEventListener("submit", (event) => {
      this._validateUserDetails("password");
      event.preventDefault();
      handler({
        firstName: this._firstName.value,
        lastName: this._lastName.value,
        email: this._email.value,
      });
    });
  }
}
module.exports = new registrationView();
