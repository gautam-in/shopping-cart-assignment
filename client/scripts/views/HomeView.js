import AbstractView from "./AbstractView";
import template from "../../templates/home.handlebars";

export default class HomeView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    this.setTitle(
      "Sabka Bazaar - Home: One stop solution for all your groceries."
    );
    this.setActiveLinkIndicator("home-link");
    return template;
  }
}
