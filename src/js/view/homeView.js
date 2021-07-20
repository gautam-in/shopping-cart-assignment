//import Glide from "@glidejs/glide";

const View = require("./View");
const homeTemplate = require("../template/homeTemplate");
const handlebars = require("handlebars");

/* eslint-disable quotes */
class HomeView extends View {
  _parentElement = document.querySelector(".main");
  async renderDOM(state) {
    const markup = homeTemplate.generateMarkup(state);
    await this.render(this._parentElement, markup);
    // Invoking Method to initialize carousel
    this._initializeCarousel();
  }

  _initializeCarousel() {
    new Glide(".glide").mount();
  }
}
module.exports = new HomeView();
