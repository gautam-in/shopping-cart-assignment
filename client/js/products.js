function fetchDataFromApi(url) {
  return fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Something went wrong !");
    }
  });
}

async function DisplayProductsData() {
  let allProductsData = await fetchDataFromApi(
    "./../server/products/index.get.json"
  );
  console.log("products: ", allProductsData);
  for (let i = 0; i < allProductsData.length; i++) {
    createProducts(allProductsData[i]);
  }
}

async function addToCart(val) {
  let product = val.currentTarget.data;

  let addedToCart = await fetchDataFromApi(
    "./../server/addToCart/index.post.json"
  );
  let cartItems = JSON.parse(localStorage.getItem("cartValue"));
  if (cartItems == null || cartItems == undefined) {
    cartItems = [];
  }
  let uniqueArr = cartItems.find((e) => e.id == product.id);
  if (!uniqueArr) {
    cartItems.push(product);
    document.dispatchEvent(
      new CustomEvent("NewData", {
        detail: product,
      })
    );
  }
  localStorage.setItem("cartValue", JSON.stringify(cartItems));
}

window.addEventListener("DOMContentLoaded", DisplayProductsData);

function createProducts(product) {
  let productContainer = document.createElement("section");
  productContainer.setAttribute("class", "component-container");

  let productHeading = document.createElement("h3");
  productHeading.innerHTML = product.name;

  let imageAndData = document.createElement("div");
  imageAndData.setAttribute("class", "imageAndData");

  let imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "imageContainer");

  imageAndData.appendChild(imageContainer);

  let productImage = document.createElement("img");
  productImage.setAttribute("src", product.imageURL);
  productImage.setAttribute("alt", product.name);

  imageContainer.appendChild(productImage);

  let descriptionAndButton = document.createElement("div");
  descriptionAndButton.setAttribute("class", "descriptionAndButton");

  let description = document.createElement("p");
  description.setAttribute("class", "productsDescription");
  description.innerHTML = product.description;

  let buyListS = document.createElement("div");
  buyListS.setAttribute("class", "buyListS");

  let priceButtonS = document.createElement("button");
  priceButtonS.setAttribute("type", "button");
  priceButtonS.setAttribute("class", "btn btn-primary");
  priceButtonS.innerHTML = `Buy Now @Rs${product.price}`;
  priceButtonS.addEventListener("click", addToCart.bind(product));
  priceButtonS.data = product;

  buyListS.appendChild(priceButtonS);

  descriptionAndButton.appendChild(description);
  descriptionAndButton.appendChild(buyListS);

  imageAndData.appendChild(descriptionAndButton);

  productContainer.append(productHeading);
  productContainer.append(imageAndData);

  let buyList = document.createElement("div");
  buyList.setAttribute("class", "buyList");
  let desc = document.createElement("p");
  desc.setAttribute("class", "mrp");
  desc.innerHTML = `MRP Rs${product.price}`;
  let priceButton = document.createElement("button");
  priceButton.setAttribute("type", "button");
  priceButton.setAttribute("class", "btn btn-primary");
  priceButton.innerHTML = "Buy Now";
  priceButton.addEventListener("click", addToCart.bind(product));
  priceButton.data = product;

  buyList.appendChild(desc);
  buyList.appendChild(priceButton);
  productContainer.appendChild(buyList);

  let buyListT = document.createElement("div");
  buyListT.setAttribute("class", "buyListT");
  let priceButtonT = document.createElement("button");
  priceButtonT.setAttribute("type", "button");
  priceButtonT.setAttribute("class", "btn btn-primary");
  priceButtonT.setAttribute("id", product.id);
  priceButtonT.innerHTML = `Buy Now @Rs${product.price}`;
  priceButtonT.addEventListener("click", addToCart.bind(product));
  priceButtonT.data = product;

  buyListT.appendChild(priceButtonT);
  productContainer.appendChild(buyListT);

  let parentElement = document.querySelector(".products");
  parentElement.appendChild(productContainer);
  // let parentElement = document.querySelector(".products");
  // InsertAfter(parentElement, productContainer);
}

// function InsertAfter(referenceNode, newNode) {
//   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }
