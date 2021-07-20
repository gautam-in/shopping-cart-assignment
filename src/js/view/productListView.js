const productListTemplate = require("../template/productListTemplate");
const View = require("./View");
const handlebars = require("handlebars");
const $ = require("jquery");

/* eslint-disable quotes */
class productListView extends View {
  _parentElement = document.querySelector(".main");
  _data_categories = {};
  _data_products = {};
  _filter_value = "";
  async renderDOM(state) {
    const markup = productListTemplate.generateMarkup(state);
    this.render(this._parentElement, markup);
  }
  addToCartHandler(handler) {
    // Event Handler for Adding item to Cart
    document
      .querySelector(".product-list")
      .addEventListener("click", (event) => {
        if (event.target.closest(".buy-now"))
          handler(event.target.closest(".buy-now").dataset.productId);
      });
  }
  filterSelectionHandler() {
    $(".sidebar__toggle-btn").on("click", function () {
      $(".catalouge__filter").toggle(400, function () {
        let selectedCategoryName;
        if ($(".catalouge__filter")[0].style.display == "none") {
          $(".sidebar__toggle-btn").addClass("collapse");
          selectedCategoryName = $(".catalouge__filter--item.selected").html();
          if (selectedCategoryName) {
            $(".sidebar__toggle-btn").html(selectedCategoryName);
          }
        } else {
          $(".sidebar__toggle-btn").removeClass("collapse");
        }
      });
    });
    $(".catalouge__filter").on("click", function (event) {
      const targetElem = event.target.closest(".catalouge__filter--item");
      if (targetElem) {
        if (targetElem.classList.contains("selected")) {
          targetElem.classList.remove("selected");
          window.location.hash = "#products";
        } else {
          $(".sidebar__toggle-btn").textContent = targetElem.textContent;
          window.location.hash = targetElem.dataset.filterId;
          targetElem.classList.add("selected");
        }
      }
    });
  }
}
module.exports = new productListView();
