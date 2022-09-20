let cart = function (ctrl) {
  this.controller = ctrl;
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
        this.controller.contentcontainer.removeChild(this.cart);
        this.controller.contentcontainer.removeChild(this.cartoverlay);
        this.cart = null;
        this.cartoverlay = null;
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
    _cart.style.right =
      window.innerWidth -
      this.controller.cartbutton.getBoundingClientRect().right -
      16 +
      "px";

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
      className:
        "-flex-row -resize -middle-aligned -flex -top-to-bottom -cart-content",
    });
    _cart_main_content.tabIndex = 0;
    let _cart_footer = dom.createEl("footer", _cart, {
      className: "-flex-column -cart-footer",
    });
    _cart_close_button.addEventListener("click", this.toggleCart.bind(this));
    _overlay.addEventListener("click", this.toggleCart.bind(this));
    let totalAmount = 0;
    if (this.controller.cartItems) {
      this.controller.cartItems.forEach((cartitemdata) => {
        let _cart_item = this.cretaeCartItem(cartitemdata);
        _cart_main_content.appendChild(_cart_item);
      });
      _cart_main_content.classList.remove("-middle-aligned");
      _cart_main_content.classList.add("-has-items");
      _cart_main_content.classList.add("-nowrap");
      let _offer_div = dom.createEl("div", _cart_main_content, {
          className: "-flex -left-to-right -nowrap -offer-item",
        }),
        _offer_img = dom.createEl("img", _offer_div, {
          className: "-flex-column -offer-img",
          src: "./static/images/lowest-price.png",
        }),
        _offer_text = dom.createEl("div", _offer_div, {
          className: "-flex-column -offer-text -flex -middle-aligned",
          innerText: "You won't find it cheaper anywhere",
        });
      let _footer_content = dom.createEl("div", _cart_footer, {
          className: "-flex-row -footer-text",
          innerText: "Promo code can be applied on payment page",
        }),
        _footer_button = dom.createEl("button", _cart_footer, {
          className:
            "-flex-row -checkout-button primary-button -flex -left-to-right",
        }),
        _footer_button_text = dom.createEl("div", _footer_button, {
          className: "-flex-column -resize",
          innerText: "Proceed to checkout",
        }),
        _footer_total_amount = dom.createEl("div", _footer_button, {
          className: "-flex-column",
          innerText: "Rs." + totalAmount,
        });
    } else {
      _cart_main_content.innerHTML =
        "<b>No Items in your cart</b>Your favorite items are just a click away";
      _cart_main_content.setAttribute("area-label", "No items in your cart");
    }
    setTimeout(() => {
      _cart.classList.add("-expanded");
      _overlay.classList.add("-expanded");
    }, 100);
  },
  cretaeCartItem: (data) => {
    let _container = dom.createEl("div", null, {
        className: "-flex -left-to-right -nowrap -cart-item",
      }),
      _img_div = dom.createEl("div", _container, {
        className: "-flex-column -img-div",
      }),
      _img = dom.createEl("img", _img_div, {
        className: "-img",
        src: "." + (data.imageURL || "static/images/No_Image_Available.jpg"),
      }),
      _details = dom.createEl("div", _container, {
        className: "-flex-column -resize -flex -top-to-bottom -nowrap",
      }),
      _name = dom.createEl("div", _details, {
        className: "-flex-row -resize -name",
        innerText: data.name,
      }),
      _quantity_and_price = dom.createEl("div", _details, {
        className: "-flex-row -quantity-and-price -resize -left-to-right -flex",
      }),
      _quantity = dom.createEl("div", _quantity_and_price, {
        className: "-flex-column -flex -left-to-right -middle-aligned",
      }),
      _quantity_minus = dom.createEl("button", _quantity, {
        className: "-flex-column -quantity-minus -quantity-button",
        innerText: "-",
        "aria-label": "Substract quantity",
      }),
      _quantity_value = dom.createEl("div", _quantity, {
        className: "-flex-column -quantity-value",
        innerText: data.quantity,
      }),
      _quantity_plus = dom.createEl("button", _quantity, {
        className: "-flex-column -quantity-plus -quantity-button",
        innerText: "+",
        "aria-label": "Add quantity",
      }),
      _quantity_price = dom.createEl("div", _quantity_and_price, {
        className: "-flex-column -price -middle-aligned -flex",
        innerText: "  X  Rs." + data.price,
      }),
      _total_amount = dom.createEl("div", _container, {
        className: "-flex-column -total-item-amount -middle-aligned -flex",
        innerText: "Rs." + data.quantity * data.price,
      });
    return _container;
  },
};
