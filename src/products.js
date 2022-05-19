import "./styles/style.scss";
import axiosInstance from "./utils/axiosInstance";

class Products {
  products = [];
  categories = [];
  error = [];

  constructor() {
    this.loadData();
  }
//   Load the Products
  loadData = async () => {
    try {
      const resp = await Promise.allSettled([
        axiosInstance.get("products"),
        axiosInstance.get("categories"),
      ]);

      if (resp[0].status === "fulfilled") {
        this.products = resp[0].value;

        this.render();
      }
      if (resp[1].status === "fulfilled") {
        this.categories = resp[1].value;
        this.render();
      }
      if (resp[0].status === "rejected") {
        this.errors["products"] = "Products Data not available";
      }
      if (resp[1].status === "rejected") {
        this.errors["categories"] = "Categories Data not available";
      }
    } catch (error) {}
  };

  renderProducts() {
    let ele = [];
    this.products.data.forEach((list) => ele.push(this.renderProduct(list)));
    return ele.join("");
  }

  renderProduct = (product) => {
    const { price, description, name, imageURL } = product;
    const getPrice = () => {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
      }).format(price);
    };

    return `
    <ul class="product-list__display">
        <li class="product-list__card" tabindex="0">
            <p class="product-list__title" tabindex="0"><b>${name}</b></p>
            <div class="product-list__content">
                <div class="product-list__image">
                    <img src='${imageURL}' alt='${name}' tabindex='0'/>
                </div>
                <div class="product-list__details">
                    <div class="product-list__desc">
                        <p tabindex="0">${description}</p>
                    </div>
                    <div class="product-list__footer>
                      <span class="product-list__price" tabindex="0">
                        MRP ${getPrice()}
                      </span>
                      <button class="button-wrapper buy-now-btn" tabindex="0">Buy Now</button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    `;
  };
  renderSideList = ({ name }) => {
    return `<li class="item" tabindex="0">${name}</li>`;
  };
  renderSidebar = () => {
    let ele = [];
    this.categories.forEach((list) => ele.push(this.renderSideList(list)));
    return `
        <ul id="dropdown__list" class="product-list__dropdown" onchange="">
          <li value="">Fruits & vegitables</li><hr>
          <li value="">Bakery cakes and Dairy</li><hr>
          <li value="">Beverages</li><hr>
          <li value="">Beauty and hygiene</li><hr>
          <li value="">Baby Care</li><hr>
        </ul>
      <ul class="list" tabindex="0">
      ${ele.join("")}
      </ul>
      `;
  };
  render = () => {
    document.getElementById(
      "list-category"
    ).innerHTML = `<div class="product-list">
      <aside class="product-list__category">${this.renderSidebar()}</aside>                                                         
      <section class="product-list__container">${this.renderProducts()}</section>
      </div>`;
  };
}

export default new Products();
