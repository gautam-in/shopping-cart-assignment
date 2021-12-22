import AbstractView from "./AbstractView";
import template from "../../templates/products.handlebars";
import productListingSectionTemplate from "../../templates/productListingSection.handlebars";
import { API_PATH, DOCUMENT_TITLE } from "../constants/constants";
import { fetchData } from "../helpers/apiService";

export default class ProductsView extends AbstractView {
  constructor() {
    super();
    this.categoryList = [];
    this.productsList = [];
    this.templateInput = {
      categories: [],
      products: [],
    };
  }

  async getTemplate() {
    try {
      this.categoryList = await this.getProductCategoriesData();
      this.productsList = await this.getAllProducts();
      this.setTitle(DOCUMENT_TITLE.products);
      this.setActiveLinkIndicator("products-link");

      this.templateInput = {
        categories: [],
        products: this.productsList,
      };
      if (this.categoryList && this.categoryList.length) {
        this.templateInput.categories = this.categoryList
          .filter((category) => category.enabled)
          .sort((a, b) => a.order - b.order);
      }

      // template is the pre-compiled handlebars template
      return template(this.templateInput);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  async getProductCategoriesData() {
    return fetchData(API_PATH.categoriesUrl);
  }

  async getAllProducts() {
    return fetchData(API_PATH.productsUrl);
  }

  filterProductsBasedOnCategory(categoryId) {
    if (categoryId && this.productsList && this.productsList.length) {
      this.templateInput.products = this.productsList.filter(
        (product) => product.category === categoryId
      );

      const viewHtml = productListingSectionTemplate(this.templateInput);
      document.querySelector("#productsListingSection").innerHTML = viewHtml;
    }
  }

  getCategoryObject(categoryId) {
    const categoryItem = this.categoryList.filter(
      (category) => category.id === categoryId
    );
    return categoryItem && categoryItem.length ? categoryItem[0] : null;
  }

  getProductObject(productId) {
    const productItem = this.productsList.filter(
      (product) => product.id === productId
    );
    return productItem && productItem.length ? productItem[0] : null;
  }

  addProductToCart(productId, cartInstance) {
    const productObj = this.getProductObject(productId);
    if (productObj) {
      cartInstance.addToCart(productObj);
    }
  }
}
