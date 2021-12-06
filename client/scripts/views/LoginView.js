import AbstractView from "./AbstractView";
import template from "../../templates/login.handlebars";

export default class LoginView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    this.setTitle(
      "Sabka Bazaar - User login: One stop solution for all your groceries."
    );
    this.setActiveLinkIndicator("login-link");
    return template;
  }

  onSubmitHandler() {
    alert("hello login");
  }
}
