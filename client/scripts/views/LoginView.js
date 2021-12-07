import AbstractView from "./AbstractView";
import template from "../../templates/login.handlebars";
import { DOCUMENT_TITLE } from "../constants/constants";

export default class LoginView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    this.setTitle(DOCUMENT_TITLE.login);
    this.setActiveLinkIndicator("login-link");

    // template is the pre-compiled handlebars template
    return template({});
  }

  onSubmitHandler() {
    alert("hello login");
  }
}
