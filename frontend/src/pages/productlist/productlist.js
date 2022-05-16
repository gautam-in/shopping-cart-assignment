import "./productlist.scss";
import Button from "../../components/button/button";
import kiwi from "../../../static/images/products/fruit-n-veg/kiwi-green.jpg";

const pList = [
  {
    price: 100,
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
    imageURL: kiwi,
    name: "ASDasd",
  },
  {
    price: 100,
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
    imageURL: kiwi,
    name: "ASDasd",
  },
  {
    price: 100,
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
    imageURL: kiwi,
    name: "ASDasd",
  },
  {
    price: 100,
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
    imageURL: kiwi,
    name: "ASDasd",
  },
  {
    price: 100,
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
    imageURL: kiwi,
    name: "ASDasd",
  },
  {
    price: 100,
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
    imageURL: kiwi,
    name: "ASDasd",
  },
  {
    price: 100,
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
    imageURL: kiwi,
    name: "ASDasd",
  },
  {
    price: 100,
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
    imageURL: kiwi,
    name: "ASDasd",
  },
  {
    price: 100,
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
    imageURL: kiwi,
    name: "ASDasd",
  },
  {
    price: 100,
    description:
      "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny. edible black seeds.",
    imageURL: kiwi,
    name: "ASDasd",
  },
];

const sList = [
  {
    label: "Fruits & Vegetables",
  },
  {
    label: "Bakery Cakes and Dairy",
  },
  {
    label: "Beverages",
  },
  {
    label: "Beauty and Hygiene",
  },
  {
    label: "Baby Care",
  },
];

const ProductList = () => {
  const renderSideList = ({ label }) => {
    return `<li class='item' tabindex=0>${label}</li>`;
  };

  const renderSidebar = () => {
    let ele = [];
    sList.forEach((list) => ele.push(renderSideList(list)));
    return `
    <aside class="product-list-aside">
          <select id="dropdown__list" class='dropdown-list' onchange="">
            <option value="">Beverages</option>
            <option value="">Bakery Cakes and Dairy</option>
            <option value="">Beauty and Hygiene</option>
            <option value="">Baby Care</option>
            <option value="">Fruits & Vegetables</option>
          </select>
      <ul class="list" tabindex="0">
        ${ele.join("")}
      </ul>
    </aside>
    `;
  };

  const renderProducts = () => {
    let ele = [];
    pList.forEach((list) => ele.push(renderProduct(list)));
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
          <h1 class="product-title" tabindex="0">Fresho Kiwi - Green, 3 pcs</h1>
          <div class='product-content'>
            <div class='product-image'>
              <img src='${imageURL}' alt=${name}' tabindex=0 /></div>
            <div class='product-details'>
              <div class="product-desc">
                <p tabindex="0">${description}</p>
              </div>
              <div class="product-footer">
                <span class="product-price" tabindex="0">
                  MRP ${getPrice()}
                </span>
                ${Button.render({
                  type: "button",
                  label: "Buy Now",
                  className: "buy-now-btn",
                })}
                 ${Button.render({
                   type: "button",
                   label: `Buy Now @ MRP ${getPrice()}`,
                   className: "buy-now-btn mobile-buy-now-btn",
                 })}
              </div>
            </div>
          </div>
          <div class='product-md-button'>
           ${Button.render({
             type: "button",
             label: `Buy Now @ ${getPrice()}`,
             className: "buy-now-btn",
           })}</div>
        </li>
    `;
  };

  const render = async () => {
    return `
    <div class='product-list-container'>
            <div class='product-category'>${renderSidebar()}</div>
            <ul class='product-card-container'>${renderProducts()}</ul>
    </div>`;
  };

  return render();
};

const ProductPage = {
  privateRoute: true,
  render: async () => ProductList(),
};

export default ProductPage;
