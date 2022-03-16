function goToProducts() {
  location.href = "../../../client/pages/products/products.html";
}

let totalAmount = 0;
const filtercartData = JSON.parse(localStorage.getItem("cartData"));
const cartData = filtercartData?.filter((e) => e.count > 0);

function updateData() {
  let count = +localStorage.getItem("count") || 0;
  if (count > 0) {
    document.querySelector("#no-item").classList.add("display-none");
    document.querySelector(".cart-container").classList.remove("display-none");
    document.querySelector(".cart-footer").classList.remove("display-none");
    updateCartCount(count);

    const cartDataDiv = document.querySelector(".cart-items");
    cartData.forEach((product, index) => {
      cartDataDiv.appendChild(addItemToDom(product, index));
    });
    document.querySelector("#total-amount").innerText = `Rs.${totalAmount} >`;
  } else {
    document.querySelector("#no-item")?.classList.remove("display-none");
    document.querySelector(".cart-footer")?.classList.add("display-none");
    document.querySelector(".cart-container")?.classList.add("display-none");
  }
}

function addItemToDom(product, index) {
  const item = document.createElement("div");
  item.classList.add("display-flex");
  item.classList.add("product-details");

  // left
  const left = document.createElement("div");
  left.classList.add("sub-flex");

  // image
  const img = document.createElement("img");
  img.src = `../../../${product.imageURL}`;
  left.appendChild(img);

  // name and count
  const contNameCount = document.createElement("div");
  contNameCount.classList.add("detailSection");
  const name = document.createElement("h4");
  name.innerText = product.name;
  contNameCount.appendChild(name);

  const countCont = document.createElement("div");
  const decreaseBtn = document.createElement("button");
  decreaseBtn.classList.add("roundButton");
  decreaseBtn.style.borderRadius = "5px";
  decreaseBtn.innerText = "-";
  decreaseBtn.addEventListener("click", () => decreaseCount(index));
  const countSpan = document.createElement("span");
  countSpan.innerText = product.count;
  countSpan.setAttribute("id", `count-${product.id}`);
  const increaseBtn = document.createElement("button");
  increaseBtn.classList.add("roundButton");
  increaseBtn.innerText = "+";
  increaseBtn.addEventListener("click", () => increaseCount(index));
  const amountSpan = document.createElement("span");
  amountSpan.innerText = ` X ${product.price}`;

  countCont.appendChild(decreaseBtn);
  countCont.appendChild(countSpan);
  countCont.appendChild(increaseBtn);
  countCont.appendChild(amountSpan);

  // amount
  const amountContainer = document.createElement("div");
  amountContainer.setAttribute("id", `amount-${product.id}`);
  totalAmount = totalAmount + product.price * product.count;
  amountContainer.innerText = `Rs.${product.price * product.count}`;
  ///////////////////////////////////////////--
  const countPrice = document.createElement("div");
  countPrice.classList.add("countPriceAlign");

  countPrice.appendChild(countCont);
  countPrice.appendChild(amountContainer);
  contNameCount.appendChild(countPrice);
  item.appendChild(left);
  left.appendChild(contNameCount);
  return item;
}

function updateCartCount(count) {
  document.querySelector(".cart-count").innerText = `(${count} ${
    count > 1 ? "items" : "item"
  })`;
}

function increaseCount(index) {
  cartData[index].count = cartData[index].count + 1;
  totalAmount = totalAmount + cartData[index].price;
  const totalCount = +localStorage.getItem("count") + 1;
  localStorage.setItem("count", totalCount);
  updateCartCount(totalCount);
  document.querySelector("custom-header").setAttribute("count", totalCount);
  updateCountAndAmount(
    cartData[index].id,
    cartData[index].count,
    cartData[index].price
  );
}

function decreaseCount(index) {
  if (cartData[index].count > 0) {
    cartData[index].count = cartData[index].count - 1;
    totalAmount = totalAmount - cartData[index].price;
    const totalCount = +localStorage.getItem("count") - 1;
    localStorage.setItem("count", totalCount);
    document.querySelector("custom-header").setAttribute("count", totalCount);
    updateCartCount(totalCount);
    updateCountAndAmount(
      cartData[index].id,
      cartData[index].count,
      cartData[index].price
    );
  }
}

function updateCountAndAmount(productId, count, price) {
  document.querySelector(`#count-${productId}`).innerText = count;
  document.querySelector(`#amount-${productId}`).innerText = `Rs. ${
    count * price
  }`;
  document.querySelector("#total-amount").innerText = `Rs. ${totalAmount}`;
  localStorage.setItem("cartData", JSON.stringify(cartData));
}

updateData();
