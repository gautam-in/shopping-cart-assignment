import AbstractView from "./AbstractView";
import template from "../../templates/register.handlebars";
import { DOCUMENT_TITLE } from "../constants/constants";

export default class RegisterView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    this.setTitle(DOCUMENT_TITLE.register);
    this.setActiveLinkIndicator("register-link");

    // template is the pre-compiled handlebars template
    return template({});
  }

  onSubmitHandler() {
    alert("hello signup");
  }
}
