window.addEventListener("DOMContentLoaded", displayCategories);

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

  categoryNav(categories, products);
}

function categoryNav(categoriesArr, productsArr) {
    console.log('productsArr',productsArr)
  const categories = categoriesArr.sort((a, b) => (a.order > b.order ? 1 : -1));

  for (let i = 0; i < categories.length; i++) {
    if (categories[i].enabled) {
      let li = document.createElement("li");
      li.setAttribute("class", "li_item");
      li.innerHTML = categories[i].name;

      document.querySelector("#product_navigation").appendChild(li);
    }
  }

  for(let i=0;i<productsArr.length;i++){
    getProductDetail(productsArr[i]);
  }
}

function getProductDetail(product) {
    let cardContainer = document.createElement("div");
    cardContainer.setAttribute("class","card_product");

    let prodName = document.createElement("h3");
    prodName.setAttribute("class","product_name");
    prodName.innerHTML = product.name;

    let prodImg = document.createElement("img");
    prodImg.setAttribute("src",product.imageURL);
    prodImg.setAttribute("class","prod_img");

    let prodDesc = document.createElement("span");
    prodDesc.setAttribute("class","product_desc");
    prodDesc.innerHTML = product.description;

    let MRPDiv = document.createElement("div");
    MRPDiv.setAttribute("class","price_container");

    let price = document.createElement("span");
    price.setAttribute("class","price");
    price.innerHTML = `MRP Rs.${product.price}`;

    let buyButton = document.createElement("button");
    buyButton.setAttribute("class","buy_button");
    buyButton.innerHTML = `Buy Now`;

    MRPDiv.append(price);  
    MRPDiv.append(buyButton);
    cardContainer.append(prodName);
    cardContainer.append(prodImg);
    cardContainer.append(prodDesc);
    cardContainer.append(MRPDiv);

    document.querySelector("#product_container").appendChild(cardContainer);
}
