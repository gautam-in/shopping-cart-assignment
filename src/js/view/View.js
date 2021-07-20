//TODO to uncomment the icons realted code
// const icons = require("url:../../../static/images/icons.svg");
class View {
  _parentElement;
  // Method to render the html markup in target container element
  async render(targetContainer, markup) {
    this._parentElement = targetContainer;
    this._clearParent();
    let htmlObject = document.createElement("div");
    htmlObject.innerHTML = markup;
    this._parentElement.insertAdjacentElement(
      "afterbegin",
      htmlObject.firstChild
    );
    return true;
  }
  renderSpinner(container = this._parentElement) {
    // const spinnerMarkup = `<div class="spinner">
    //                         <svg>
    //                             <use href="${icons}#icon-loader"></use>
    //                         </svg>
    //                         </div>`;
    // container.innerHTML = spinnerMarkup;
  }
  _clearParent() {
    this._parentElement.innerHTML = "";
  }
}

module.exports = View;
