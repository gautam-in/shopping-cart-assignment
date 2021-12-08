import AbstractView from "./AbstractView";
import template from "../../templates/products.handlebars";
import { DOCUMENT_TITLE } from "../constants/constants";

export default class ProductsView extends AbstractView {
  constructor() {
    super();
  }

  getTemplate() {
    this.setTitle(DOCUMENT_TITLE.products);
    this.setActiveLinkIndicator("products-link");

    // template is the pre-compiled handlebars template
    return template({});
  }
}
