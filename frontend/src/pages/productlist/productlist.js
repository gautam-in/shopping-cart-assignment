import Button from "../../components/button/button";
import APIConfig from "../../api/api";
import { useCategoriesParsed } from "../../../helpers";
import "./productlist.scss";
import { forceComponentRender, parseRequestUrl } from "../../components/util";

export const ProductList = (listData) => {
  const { eCategories = [], eProducts = [] } = listData;

  const renderSidebar = async () => {
    let ele = [],
      eleMobile = [];
    eCategories.forEach(({ id, name }) => {
      eleMobile.push(
        `<option id='select_option_${id}' value="${id}">${name}</option>`
      );
      ele.push(`<li id='${id}' class='item' tabindex=0>${name}</li>`);
    });
    return `
    <aside class="product-list-aside">
          <select id="dropdown__list" class='dropdown-list' >
           ${eleMobile.join("")}
          </select>
        <ul id='sidebar-list-container' class="list" tabindex="0">
            ${ele.join("")}
        </ul>
    </aside>
    `;
  };

  const renderProducts = async () => {
    let ele = [];
    eProducts.forEach((list) => ele.push(renderProduct(list)));
    return ele.join("");
  };

  const renderProduct = (product) => {
    const { price, description, name, imageURL } = product;

    const getPrice = () => {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(price);
    };

    return `
        <li class="product-card" tabindex="0">
          <h1 class="product-title" tabindex="0">${name}</h1>
          <div class='product-card-content'>
          <div class='product-content'>
            <div class='product-image'>
              <img src='${imageURL}' alt=${name}' tabindex=0 /></div>
            <div class='product-details'>
              <div class="product-desc">
                <p tabindex="0">${description}</p>
              </div>
              <div class="product-footer" id='product-footer'>
                <span class="product-price" tabindex="0">
                  MRP ${getPrice()}
                </span>
                ${Button.render({
                  type: "button",
                  label: "Buy Now",
                  className: "buy-now-btn",
                  dataAtt: price,
                })}
                 ${Button.render({
                   type: "button",
                   label: `Buy Now @ MRP ${getPrice()}`,
                   className: "buy-now-btn mobile-buy-now-btn",
                   dataAtt: price,
                 })}
              </div>
            </div>
          </div>
          <div class='product-md-button'>
           ${Button.render({
             type: "button",
             label: `Buy Now @ ${getPrice()}`,
             className: "buy-now-btn",
             dataAtt: price,
           })}</div>
           </div>
        </li>
    `;
  };

  const render = async () => {
    return `
    <div class='product-list-container'>
            <div class='product-category'>${await renderSidebar()}</div>
            <ul class='product-card-container'>${await renderProducts()}</ul>
    </div>`;
  };

  return render();
};

class ProductPage extends APIConfig {
  constructor() {
    super();
    this.eCategories = [];
    this.eProducts = [];
    this.filteredProducts = [];
    this.BROWSER_URL = parseRequestUrl();
  }

  render = async () => {
    this.eCategories = useCategoriesParsed(await this.loadCategoriesAsync());
    const response = await this.loadProductsAsync();
    if (response.data) this.eProducts = response.data;
    if (this.BROWSER_URL.id) {
      await this.handleFilteredCategories(this.BROWSER_URL.id);
    } else {
      return ProductList({
        eProducts: this.eProducts,
        eCategories: this.eCategories,
      });
    }
  };

  markSelectedItem = async (liId) => {
    const liList = document.querySelectorAll("#sidebar-list-container > li");
    for (const i of liList) {
      i.classList.remove("selected");
    }
    if (liId) document.getElementById(liId).classList.add("selected");
  };

  handleFilteredCategories = async (selectedId) => {
    let eFiltered = [];

    if (selectedId)
      eFiltered = this.eProducts.filter(
        (value) => value.category === selectedId
      );

    const component = ProductList({
      eProducts: selectedId ? eFiltered : this.eProducts,
      eCategories: this.eCategories,
    });

    await forceComponentRender(component);
    this.markSelectedItem(selectedId);
    await this.reRender();
  };

  onBuyNowClick = (e) => {
    console.log("onBuyNowClick", e.target.getAttribute("data-label"));
  };

  reRender = async () => {
    const self = this;

    const allBuyBtn = document.querySelectorAll("#product-footer > button");
    for (const btn of allBuyBtn) {
      btn.addEventListener("click", (e) => this.onBuyNowClick(e));
    }

    const onSelectItem = async (e) => {
      const selectedId = self.BROWSER_URL.id;
      const allPath = window.location.hash.split("/");
      const [, PATH] = allPath;
      self.BROWSER_URL = parseRequestUrl();
      let URL = null;
      if (selectedId === e.target.id) {
        await self.handleFilteredCategories(null);
        URL = `${window.location.origin}/#/${PATH}`;
      } else {
        await self.handleFilteredCategories(e.target.id);
        URL = `${window.location.origin}/#/${PATH}/${e.target.id}`;
      }
      window.history.pushState({}, "", URL);
    };

    document
      .getElementById("dropdown__list")
      .addEventListener("change", async function (e) {
        const selectId = e.target.value;
        await onSelectItem({ target: { id: selectId } });
      });

    document
      .getElementById("sidebar-list-container")
      .addEventListener("click", async function (e) {
        if (e.target && e.target.matches("li.item")) {
          await onSelectItem(e);
        }
      });
  };
}

export default new ProductPage();
