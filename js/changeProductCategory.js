class changeProductCategory {
  constructor() {
    console.log("Change Products on click loaded");
    localStorage.setItem("SHOWCATEGORY", "5b6899953d1a866534f516e2");
  }

  // Function to change the category from local storage
  changeCategory(productCategory) {
    localStorage.setItem("SHOWCATEGORY", productCategory);
  }

  // Handeling button click
  renderProductPage(category) {
    this.changeCategory(category);
    window.location = "/products.html";
  }

  changeProductCategoryButton() {
    // Getting buttons from the DOM
    const DOMButtonsProductPage = document.querySelectorAll(
      ".product-category-button"
    );

    // Converting the DOMNode of buttons to an array
    const arrayButtonDOM = Array.prototype.slice.call(DOMButtonsProductPage);

    console.log("🚇", arrayButtonDOM);

    arrayButtonDOM.map((button) => {
      button.addEventListener("click", () => {
        this.renderProductPage(button.value);
      });
    });
  }
}

var buttonToChangeProduct = new changeProductCategory();

buttonToChangeProduct.changeProductCategoryButton();
