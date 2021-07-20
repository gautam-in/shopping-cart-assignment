const cartTemplate = require("../template/cartTemplate");
const config = require("../config");
const View = require("./View");
const $ = require("jquery");
/* eslint-disable quotes */
class HeaderView extends View {
  _parentElement = document.querySelector(".header-container");
  _cartCount = document.querySelector(".header__cart--count");
  _overlay = document.querySelector(".overlay");
  _cartIcon = document.querySelector(".header__cart__box");
  _body = document.querySelector("body");
  _cart; //cart added to the dom only after instantiation of the  header View.
  _timerId;

  async renderDOM(state) {
    const markup = cartTemplate.generateMarkup(state);
    await this.render(this._overlay, markup);
    this.addCollapseHandler();
  }
  /**
   *   Event Handler Registration
   */
  addCollapseHandler() {
    this._closeIcon = document.querySelector(".cart__header--close");
    this._closeIcon.addEventListener("click", (event) => {
      this._overlay.classList.add("hide");
      this._body.classList.remove("scroll-freeze");
    });
  }

  addExpandCartHandler(handler) {
    this._cartIcon.addEventListener("click", (event) => {
      handler();
    });
  }
  // Handling user action to Increase or Decrease the cart item
  addUpdateCartHandler(handler) {
    this._cart = document.querySelector(".cart");
    this._cart.addEventListener("click", (event) => {
      const targetElem = event.target;
      // Handle click action to Decrease the item count
      if (targetElem.classList.contains("decrease-count")) {
        this._throttle(
          handler,
          [targetElem.dataset.productId, -1],
          config.CARTUPDATE_DELAY
        );
      }
      // Handle click action to Increase the item count
      if (targetElem.classList.contains("increase-count")) {
        this._throttle(
          handler,
          [targetElem.dataset.productId, 1],
          config.CARTUPDATE_DELAY
        );
      }
    });
  }
  /**
   *    User Actions
   */

  expandCart() {
    this._overlay.classList.remove("hide");
    this._body.classList.add("scroll-freeze");
    $(".cart__header--title").focus();
    this.addCollapseHandler();
    this._manageModalFocus();
  }

  _manageModalFocus() {
    const focusElemBeforeModal = document.activeElement;
    const modal = $(".cart")[0];
    const modalOverlay = $(".overlay")[0];
    modal.addEventListener("keydown", trapTabKey);
    modalOverlay.addEventListener("click", (event) => {
      if (event.target.closest(".cart")) {
        event.preventDefault();
        return;
      }
      modalOverlay.classList.add("hide");
      focusElemBeforeModal.focus();
      $("body")[0].classList.remove("scroll-freeze");
    });

    let focusableElementsString =
      "a[href],input:not([disabled]),select:not([disabled]),button:not(disabled),[tab-index='0']";

    let focusableElements = modal.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    let firstTabStop = focusableElements[0];
    let lastTabStop = focusableElements[focusableElements.length - 1];
    firstTabStop.focus();

    function trapTabKey(e) {
      if (e.keyCode === 9) {
        if (e.shiftKey) {
          if (document.activeElement === firstTabStop) {
            e.preventDefault();

            lastTabStop.focus();
          }
        } else {
          if (document.activeElement === lastTabStop) {
            e.preventDefault();
            console.log(firstTabStop);
            firstTabStop.focus();
          }
        }
      }
      //escape button
      if (e.keyCode === 27) {
        modalOverlay.classList.add("hide");
        $("body")[0].classList.remove("scroll-freeze");
        focusElemBeforeModal.focus();
      }
    }
  }

  updateCart(data) {
    // Updating Total Quantity beside Header Cart Icon
    let totalQuantity = 0;
    for (let key in data.cart) {
      totalQuantity += data.cart[key]["quantity"];
    }
    this._cartCount.innerHTML = totalQuantity;
    // Re-rendering the Cart modal with updated quantity
    this.renderDOM(data);
  }

  // Throttling to limi
  _throttle(func, param, delay) {
    console.log("invoking throttling");
    if (this._timerId) {
      console.log("cancelling throttling");
      return;
    }
    this._timerId = setTimeout(() => {
      func(...param);
      this._timerId = undefined;
    }, delay);
  }
}
module.exports = new HeaderView();
