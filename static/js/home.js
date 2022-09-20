let home = function (ctrl) {
  this.controller = ctrl;
  this.init();
};
home.prototype = {
  init: function () {
    this.bannercontainer = dom.createEl(
      "div",
      this.controller.contentcontainer,
      { className: "-flex -banners" }
    );
    this.categoriescontainer = dom.createEl(
      "ul",
      this.controller.contentcontainer,
      { className: "-flex -categories -top-to-bottom" }
    );
    const url1 = "http://localhost:5000/banners";
    ajax.get(url1).then(
      function (xhr) {
        let data = JSON.parse(xhr.responseText);
        this.drawBanners(data);
      }.bind(this)
    );
    const url2 = "http://localhost:5000/categories";
    ajax.get(url2).then(
      function (xhr) {
        let data = JSON.parse(xhr.responseText);
        this.drawCategories(data);
      }.bind(this)
    );
  },
  drawBanners: function (data) {
    let _banner_container = this.bannercontainer;
    let _banner_container_inner = dom.createEl("div", _banner_container, {
      className: "-flex -banners-inner -left-to-right",
    });
    let _left_nav = dom.createEl("button", _banner_container, {
      className: "-left-nav-button -carousel-nav-button",
      innerText: "PREV",
    });
    let _right_nav = dom.createEl("button", _banner_container, {
      className: "-right-nav-button -carousel-nav-button",
      innerText: "NEXT",
    });
    let _carousel_dots = dom.createEl("div", _banner_container, {
      className: "-carousel-dots",
    });
    data.forEach((el, idx) => {
      let _image_container = dom.createEl("div", _banner_container_inner, {
        className: "-image-container",
      });
      let _elem = dom.createEl("img", _image_container, {
        className: "-banner-img",
        src: "." + el.bannerImageUrl,
        alt: el.bannerImageAlt,
      });
      let _carousel_dot = dom.createEl("button", _carousel_dots, {
        className: "-carousel-dot",
      });
      if (idx == 0) {
        _image_container.classList.add("-active");
        _carousel_dot.classList.add("-active");
      }
    });
    _left_nav.addEventListener(
      "click",
      this.handleNavClick.bind(this, { type: "Prev" })
    );
    _right_nav.addEventListener(
      "click",
      this.handleNavClick.bind(this, { type: "Next" })
    );
  },
  handleNavClick: function (o, e) {
    const _active_item = dom.getElsByClass(
      "-image-container -active",
      this.bannercontainer
    )[0];
    if (!_active_item) return false;
    const _active_item_dot = dom.getElsByClass(
      "-carousel-dot -active",
      this.bannercontainer
    )[0];
    const _next_sibling = dom.nextSiblingEl(_active_item);
    const _prev_sibling = dom.previousSiblingEl(_active_item);
    const _next_sibling_dot = dom.nextSiblingEl(_active_item_dot);
    const _prev_sibling_dot = dom.previousSiblingEl(_active_item_dot);
    const _first_item = dom.getElsByClass(
      "-image-container",
      this.bannercontainer
    )[0];
    const _first_item_dot = dom.getElsByClass(
      "-carousel-dot",
      this.bannercontainer
    )[0];
    const _last_item = dom.getElsByClass(
      "-image-container",
      this.bannercontainer
    )[
      Array.from(dom.getElsByClass("-image-container", this.bannercontainer))
        .length - 1
    ];
    const _last_item_dot = dom.getElsByClass(
      "-carousel-dot",
      this.bannercontainer
    )[
      Array.from(dom.getElsByClass("-carousel-dot", this.bannercontainer))
        .length - 1
    ];
    let _type = o && o.type ? o.type : "Next";
    _active_item.classList.remove("-active");
    _active_item_dot.classList.remove("-active");
    if (_type == "Next") {
      if (_next_sibling) {
        _next_sibling.classList.add("-active");
        _next_sibling_dot.classList.add("-active");
      } else {
        _first_item.classList.add("-active");
        _first_item_dot.classList.add("-active");
      }
    } else {
      if (_prev_sibling) {
        _prev_sibling.classList.add("-active");
        _prev_sibling_dot.classList.add("-active");
      } else {
        _last_item.classList.add("-active");
        _last_item_dot.classList.add("-active");
      }
    }
  },
  drawCategories: function (data) {
    let _categories_container = this.categoriescontainer;

    data.forEach((el, idx) => {
      let _item_container = dom.createEl("li", _categories_container, {
        className: "-item-container -flex -nowrap",
      });
      let _category_link = dom.createEl("a", _item_container, {
        className:
          "-flex -left-to-right -nowrap -padding-one -resize -flex-row",
        href: "javascript:void(0);",
      });
      let _image_container = dom.createEl("div", _category_link, {
        className: "-flex-column -item-image-container -flex -middle-aligned",
      });
      let _image_container_inner = dom.createEl("div", _image_container);
      let _elem = dom.createEl("img", _image_container_inner, {
        className: "-item-img",
        src: "." + (el.imageUrl || "/static/images/No_Image_Available.jpg"),
        alt: el.description || el.name,
        "tab-index": 0,
      });
      let _details_container = dom.createEl("div", _category_link, {
        className:
          "-flex-column -flex -top-to-bottom -resize -item-details -middle-aligned",
      });
      let _name = dom.createEl("h3", _details_container, {
        className: "-item-name",
        innerText: el.name || "",
      });
      let _desc = dom.createEl("div", _details_container, {
        className: "-item-desc",
        innerText: el.description || "",
      });
      let _button = dom.createEl("button", _details_container, {
        className: "primary-button",
        innerText: "Explore " + el.key,
        "tab-index": 0,
      });
      if (idx % 2 == 0) {
        _category_link.classList.add("-item-even");
      } else {
        _category_link.classList.add("-item-odd");
      }
    });
  },
};
