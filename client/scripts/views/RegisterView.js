import AbstractView from "./AbstractView";
import template from "../../templates/register.handlebars";

export default class RegisterView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    this.setTitle(
      "Sabka Bazaar - Register user: One stop solution for all your groceries."
    );
    this.setActiveLinkIndicator("register-link");
    return template;
  }

  onSubmitHandler() {
    alert("hello signup");
  }
}
