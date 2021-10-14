window.addEventListener("DOMContentLoaded", displayCategories);
const mql = window.matchMedia("(max-width: 500px)");
const mobileView = mql.matches;

async function getCategories() {
  try {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getProducts() {
  try {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function displayCategories() {
  let categories = await getCategories();
  let products = await getProducts();

  if (!JSON.parse(localStorage.getItem("productList"))) {
    localStorage.setItem("productList", JSON.stringify(products));
  }

  categoryNav(categories, products);
}

function categoryNav(categoriesArr, productsArr) {
  const categories = categoriesArr.sort((a, b) => (a.order > b.order ? 1 : -1));

  for (let i = 0; i < categories.length; i++) {
    if (categories[i].enabled) {
      let li = document.createElement("li");
      li.setAttribute("class", "li_item");
      li.setAttribute("id", categories[i].id);
      if(mobileView){
        let span = document.createElement("span");
        span.innerHTML = '▼';
        span.setAttribute('style','float:right;font-size:smaller;')

        li.innerHTML = `${categories[i].name}`;
        li.append(span);
        if(i == 1){
          li.classList.toggle('active');
        }
      }
      else{
        li.innerHTML = categories[i].name;
      }
      

      document.querySelector("#product_navigation").appendChild(li);

      if (mobileView) {
        let products = productsArr.filter(
          (product) => product.category === categories[i].id
        );

        let divProductMobile = document.createElement("div");
        divProductMobile.setAttribute("class", "divProductMobile");
        divProductMobile.setAttribute("id", `mobile_${categories[i].id}`);
        document
          .querySelector("#product_navigation")
          .appendChild(divProductMobile);

        products.forEach(product => {
          getProductDetail(product, categories[i].id);
        });
      }
    }
  }

  if (!mobileView) {
    for (let i = 0; i < productsArr.length; i++) {
      getProductDetail(productsArr[i]);
    }
  }
}

function getProductDetail(product, categoryID) {
  let cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "card_product");

  let prodName = document.createElement("h3");
  prodName.setAttribute("class", "product_name");
  prodName.innerHTML = product.name;

  let prod_div = document.createElement("div");
  prod_div.setAttribute("class", "prod_div");

  let prodImg = document.createElement("img");
  prodImg.setAttribute("src", product.imageURL);
  prodImg.setAttribute("alt", product.name);
  prodImg.setAttribute("class", "prod_img");

  let prodDesc = document.createElement("span");
  prodDesc.setAttribute("class", "product_desc");
  prodDesc.innerHTML = product.description;

  let mobile_div_desc = document.createElement("div");
  mobile_div_desc.setAttribute("class", "mobile_div_desc");

  let mobile_container = document.createElement("div");
  mobile_container.setAttribute("class", "mobile_container");

  let MRPDiv = document.createElement("div");
  MRPDiv.setAttribute("class", "price_container");

  let price = document.createElement("span");
  price.setAttribute("class", "price");
  price.innerHTML = `MRP Rs.${product.price}`;

  let buyButton = document.createElement("button");
  buyButton.setAttribute("class", "buy_button");
  buyButton.setAttribute("id", product.id);
  buyButton.setAttribute("name", `Buy ${product.name}`);
  if (mobileView) {
    buyButton.innerHTML = `Buy Now @${product.price}`;
  } else {
    buyButton.innerHTML = `Buy Now`;
  }

  MRPDiv.append(price);
  MRPDiv.append(buyButton);
  cardContainer.append(prodName);

  if (mobileView) {
    mobile_div_desc.append(prodDesc);
    mobile_div_desc.append(MRPDiv);
    mobile_container.append(prodImg);
    mobile_container.append(mobile_div_desc);
    cardContainer.append(mobile_container);
  } else {
    prod_div.append(prodImg);
    prod_div.append(prodDesc);
    cardContainer.append(prod_div);
    cardContainer.append(MRPDiv);
  }

  if (mobileView) {
    document.querySelector(`#mobile_${categoryID}`).appendChild(cardContainer);
  } else {
    document.querySelector("#product_container").appendChild(cardContainer);
  }
}

async function getCategoryProducts(e) {
  if (e.target && e.target.nodeName == "LI") {
    if (mobileView) {
      e.target.classList.toggle("active");
    } else {
      let products = await getProducts();
      products = products.filter((product) => product.category === e.target.id);

      const ul = document.getElementById("product_container");
      ul.textContent = "";

      for (let i = 0; i < products.length; i++) {
        getProductDetail(products[i], e.target.id);
      }
    }
  }
  if (e.target && e.target.nodeName == "BUTTON") {
    addProductToCart(e);
  }
}

function addProductToCart(e) {
  if (e.target && e.target.nodeName == "BUTTON") {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const products = JSON.parse(localStorage.getItem("productList"));
    const product = products.filter((product) => product.id === e.target.id)[0];
    let alreadyPresent = cart.filter((item) => item.id === e.target.id);

    if (alreadyPresent.length) {
      cart = cart.map((item) => {
        if (item.id === e.target.id) {
          item.quantity += 1;
          item.totalPrice += item.price;
        }
        return item;
      });
    } else {
      cart.push({
        name: product.name,
        price: product.price,
        imgURL: product.imageURL,
        id: product.id,
        quantity: 1,
        totalPrice: product.price,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("total_count").innerHTML = `${cart.length} items)`;
  }
}

document
  .getElementById("product_navigation")
  .addEventListener("click", getCategoryProducts);
document
  .getElementById("product_container")
  .addEventListener("click", addProductToCart);
