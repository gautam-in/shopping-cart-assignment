let home = function (ctrl) {
  this.controller = ctrl;
  this.controller.contentcontainer.setAttribute("data-page", "Home");
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
      className: "-flex -banners -left-to-right",
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
      if (idx != 0) {
        _elem.classList.add("-hidden");
      }
    });
  },
  drawCategories: function (data) {
    let _categories_container = this.categoriescontainer;

    data.forEach((el, idx) => {
      let _item_container = dom.createEl("li", _categories_container, {
        className:
          "-item-container -flex -left-to-right -nowrap -padding-one -margin-half-horizontal",
      });
      let _image_container = dom.createEl("div", _item_container, {
        className: "-flex-column -item-image-container -flex",
      });
      let _elem = dom.createEl("img", _image_container, {
        className: "-item-img",
        src: "." + el.imageUrl,
        alt: el.description || el.name,
        "tab-index": 0,
      });
      let _details_container = dom.createEl("div", _item_container, {
        className:
          "-flex-column -flex -top-to-bottom -resize -item-details -middle-aligned",
      });
      let _name = dom.createEl("div", _details_container, {
        className: "-item-name -margin-two-bottom",
        innerText: el.name || "",
      });
      let _desc = dom.createEl("div", _details_container, {
        className: "-item-desc -margin-two-bottom",
        innerText: el.description || "",
      });
      let _button = dom.createEl("button", _details_container, {
        className: "primary-button",
        innerText: "Explore " + el.key,
        "tab-index": 0,
      });
      if (idx % 2 == 0) {
        _item_container.classList.add("-item-even");
      } else {
        _item_container.classList.add("-item-odd");
      }
    });
  },
};
