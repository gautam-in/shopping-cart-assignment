import AbstractView from "./AbstractView";
import template from "../../templates/home.handlebars";
import { fetchData } from "../helpers/apiService";
import { API_PATH, DOCUMENT_TITLE } from "../constants/constants";

export default class HomeView extends AbstractView {
  constructor() {
    super();
    this.bannerList = [];
    this.categoryList = [];
  }

  async getTemplate() {
    this.bannerList = await this.getBannerData();
    this.categoryList = await this.getProductCategoriesData();
    this.setTitle(DOCUMENT_TITLE.home);
    this.setActiveLinkIndicator("home-link");

    const input = {
      banner: [],
      categories: [],
    };
    if (this.categoryList && this.categoryList.length) {
      input.categories = this.categoryList
        .filter((category) => category.enabled)
        .sort((a, b) => a.order - b.order);
    }

    if (this.bannerList && this.bannerList.length) {
      input.banner = this.bannerList
        .filter((banner) => banner.isActive)
        .sort((a, b) => a.order - b.order);
    }

    // template is the pre-compiled handlebars template
    return template(input);
  }

  async getBannerData() {
    return fetchData(API_PATH.bannersUrl);
  }

  async getProductCategoriesData() {
    return fetchData(API_PATH.categoriesUrl);
  }
}
