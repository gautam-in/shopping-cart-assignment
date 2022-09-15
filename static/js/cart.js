let cart = function (ctrl) {
  this.controller = ctrl;
  this.cart = this.controller.cart || null;
  this.cartoverlay = this.controller.cartoverlay || null;
  this.init();
};
cart.prototype = {
  init: function () {
    if (this.cart) {
      this.toggleCart();
    } else {
      this.drawCart();
    }
  },
  toggleCart: function () {
    if (this.cart.classList.contains("-expanded")) {
      this.cart.classList.remove("-expanded");
      this.controller.maincontainer.tabIndex = "";
      this.cart.tabIndex = "0";
      setTimeout(() => {
        this.cartoverlay.classList.remove("-expanded");
      }, 100);
    } else {
      this.cart.classList.add("-expanded");
      this.cartoverlay.classList.add("-expanded");
      this.controller.maincontainer.tabIndex = "-1";
      this.cart.tabIndex = "-1";
    }
  },
  drawCart: function () {
    let _overlay =
      (this.controller.cartoverlay =
      this.cartoverlay =
        dom.createEl("div", this.controller.contentcontainer, {
          className: "-cart-overlay",
          "aria-label": "Cart overlay",
        }));
    _overlay.tabIndex = 0;

    let _cart =
      (this.cart =
      this.controller.cart =
        dom.createEl("div", this.controller.contentcontainer, {
          className: "-cart -flex -top-to-bottom -nowrap -transform-all-500ms",
          "aria-label": "My Cart",
        }));
    _cart.tabIndex = 0;

    let _cart_header = dom.createEl("div", _cart, {
      className: "-flex-row -flex -left-to-right -cart-header",
    });
    let _cart_header_title = dom.createEl("header", _cart_header, {
      className: "-flex-column -flex -middle-aligned",
      innerText: "My Cart",
    });
    let _cart_close_button = dom.createEl("button", _cart_header, {
      className: "-flex-column -flex -middle-aligned -cart-close",
      innerText: "X",
      "aria-label": "Close the cart",
    });
    _cart_close_button.tabIndex = 0;
    let _cart_main_content = dom.createEl("div", _cart, {
      className: "-flex-row -resize -middle-aligned -flex -top-to-bottom",
      innerHTML:
        "<b>No Items in your cart</b>Your favorite items are just a click away",
      "area-label": "No items in your cart",
    });
    _cart_main_content.tabIndex = 0;
    let _cart_footer = dom.createEl("footer", _cart, {
      className: "-flex-column -cart-footer",
    });
    _cart_close_button.addEventListener("click", this.toggleCart.bind(this));
    _overlay.addEventListener("click", this.toggleCart.bind(this));
    setTimeout(() => {
      _cart.classList.add("-expanded");
      _overlay.classList.add("-expanded");
    }, 100);
  },
};
