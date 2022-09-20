let products = function (ctrl) {
  this.controller = ctrl;
  this.init();
};
products.prototype = {
  init: function () {
    let _main_products_container = dom.createEl(
      "div",
      this.controller.contentcontainer,
      {
        className: "-flex -left-to-right -nowrap -main-products-page",
      }
    );
    let _categories = (this.categoriesContainer = dom.createEl(
      "div",
      _main_products_container,
      {
        className: "-flex-column -categories",
      }
    ));
    let _products = (this.productsContainer = dom.createEl(
      "div",
      _main_products_container,
      {
        className: "-flex-column -products -resize",
      }
    ));
    this.initCategories();
    this.initProducts();
    window.removeEventListener("resize", this.setCards.bind(this));
    window.addEventListener("resize", this.setCards.bind(this));
  },
  initCategories: function () {
    const url = "http://localhost:5000/categories";
    ajax.get(url).then(
      function (xhr) {
        var data = JSON.parse(xhr.responseText);
        this.drawCategories(data);
      }.bind(this)
    );
  },
  initProducts: function () {
    const url = "http://localhost:5000/products";
    ajax.get(url).then(
      function (xhr) {
        var data = (this.produtsdata = JSON.parse(xhr.responseText));
        this.drawProducts(data);
      }.bind(this)
    );
  },
  drawCategories: function (data) {
    let _ul = dom.createEl("ul", this.categoriesContainer, {
      className: "-flex-column -flex- -top-to-bottom -categories-list",
      "area-label": "Categories",
    });
    data.forEach((el) => {
      let _li = dom.createEl("li", _ul, {
        className: "-categories-list-item -flex-row",
      });
      let _link = dom.createEl("a", _li, {
        className: "-categories-list-item-link",
        innerText: el.name,
        href: "javascript:void(0);",
      });
    });
  },
  drawProducts: function (data) {
    let _container = dom.createEl("div", this.productsContainer, {
      className: "-flex -left-to-right -container",
    });
    data.forEach((el) => {
      let _card = this.createCard(el);
      _container.appendChild(_card);
    });
    this.setCards();
  },
  createCard: function (o) {
    let el = o;
    let _card = dom.createEl("div", null, {
      className: "-flex-column  -card -resize",
    });
    let _card_link = dom.createEl("a", _card, {
      className: "-flex -top-to-bottom -nowrap",
      href: "javascript:void(0);",
    });
    let _name = dom.createEl("div", _card_link, {
      className: "-flex-row -card-name",
      innerText: el.name,
    });
    let _card_inner = dom.createEl("div", _card_link, {
      className: "-flex-row -top-to-bottom -nowrap -flex -card-inner",
    });
    let _image_div = dom.createEl("div", _card_inner, {
      className: "-flex-row -card-image-container",
    });
    let _image = dom.createEl("img", _image_div, {
      className: "-card-image",
      src: "." + (el.imageURL || "static/images/No_Image_Available.jpg"),
      alt: el.description || el.name,
      loading: "lazy",
    });
    let _card_inner_inner = dom.createEl("div", _card_inner, {
      className: "-flex-row -top-to-bottom -nowrap -flex -card-inner-inner",
    });
    let _desc = dom.createEl("div", _card_inner_inner, {
      className: "-flex-row -card-desc",
      innerText: el.description,
    });
    let _card_footer = dom.createEl("div", _card_inner_inner, {
      className: "-flex-row -card-footer -flex -resize -middle-aligned",
    });
    let _card_footer_inner = dom.createEl("div", _card_footer, {
      className: "-card-footer-inner -flex -left-to-right",
    });
    let _card_footer_price = dom.createEl("div", _card_footer_inner, {
      className: "-flex-column -card-footer-price -flex -middle-aligned",
      innerText: "MRP RS." + el.price,
    });
    let _card_footer_button_container = dom.createEl(
      "div",
      _card_footer_inner,
      {
        className:
          "-flex-column -flex -right-aligned -card-footer-button-container -resize",
      }
    );
    let _card_footer_button = dom.createEl(
      "button",
      _card_footer_button_container,
      {
        className: "-card-footer-button primary-button",
        innerHTML:
          'Buy Now<span class="-button-price"> @ MRP RS.' +
          el.price +
          "</span>",
        "data-itemid": el.id,
      }
    );
    _card_footer_button.addEventListener("click", this.addToCart.bind(this));
    return _card;
  },
  addToCart: function (e) {
    let _target = e.target;
    let _item_id = _target.getAttribute("data-itemid");
    let _cart_items = localStorage.getItem("CartItems")
      ? JSON.parse(localStorage.getItem("CartItems"))
      : [];

    const url = "http://localhost:5000/addToCart";
    ajax.post(url, JSON.stringify({ item: _item_id })).then(
      function (xhr) {
        var data = JSON.parse(xhr.responseText);
        if (data && data.response) {
          this.controller.cartbutton.classList.add("-added-item");
          setTimeout(() => {
            this.controller.cartbutton.classList.remove("-added-item");
            alert(data.responseMessage);
          }, 200);
          let _item = this.produtsdata.find((el) => {
            return el.id == _item_id;
          });
          _item = _item ? _item : null;
          if (_item) {
            let _cart_item = _cart_items.find((el) => {
              return el.id == _item_id;
            });
            if (_cart_item) {
              _cart_items[_cart_items.indexOf(_cart_item)].quantity =
                _cart_items[_cart_items.indexOf(_cart_item)].quantity + 1;
            } else {
              _item.quantity = 1;
              _cart_items.push(_item);
            }
            localStorage.setItem("CartItems", JSON.stringify(_cart_items));
            this.controller.handleCartCount();
          }
        } else {
          alert("Something went wrong");
        }
      }.bind(this)
    );
  },
  setCards: function () {
    let _cards = Array.from(
      dom.getElsByClass("-card", this.controller.contentcontainer)
    );
    let _first_card = dom.getElsByClass(
      "-card",
      this.controller.contentcontainer
    )[0];
    if (_cards.length > 0) {
      _cards.forEach((el) => {
        el.style.maxWidth = "";
      });
      if (_first_card) {
        const _first_card_width = _first_card.getBoundingClientRect().width;
        if (_cards && _cards.length > 4) {
          _cards.forEach((el) => {
            if (el.getBoundingClientRect().width > _first_card_width) {
              el.style.maxWidth = _first_card_width + "px";
            }
          });
        } else {
          el.style.maxWidth = "200px";
        }
      }
    }
  },
};
