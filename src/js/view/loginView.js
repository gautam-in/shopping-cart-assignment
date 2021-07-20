const loginTemplate = require("../template/loginTemplate");
const View = require("./View");
const handlebars = require("handlebars");

/* eslint-disable quotes */
class loginView extends View {
  _parentElement = document.querySelector(".main");
  async renderDOM(state) {
    const markup = loginTemplate.generateMarkup(state);
    this.render(this._parentElement, markup);
  }
  addLoginHandler(handler) {
    this._loginForm = document.querySelector(".login-form");
    this._email = document.getElementById("email");
    this._password = document.getElementById("password");

    this._loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      handler({
        email: this._email.value,
        password: this._password.value,
      });
    });
  }
}
module.exports = new loginView();
