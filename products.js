// Side Menu for larger screen
fetch("categories.json")
  .then((res) => res.json())
  .then((categories) => {
    categories.sort((a, b) => a.order - b.order);
    const categories_list = categories
      .map((category) => `<li><a href="#">${category.name}</a></li>`)
      .join("");
    document.querySelector(".prod-menu-items").innerHTML = categories_list;
  })
  .catch((err) => {
    console.log(err.message);
  });

// Side Menu for smaller screen
fetch("categories.json")
  .then((res) => res.json())
  .then((categories) => {
    categories.sort((a, b) => a.order - b.order);
    const categories_list = categories
      .map(
        (category) =>
          `<option value="${category.name}">${category.name}</option>`
      )
      .join("");
    document.querySelector("#categories").innerHTML = categories_list;
  })
  .catch((err) => {
    console.log(err.message);
  });

// Display products
fetch("products.json")
  .then((res) => res.json())
  .then((products) => {
    const products_list = products
      .map(
        (product) => `<li class="cards-item">
    <h4 class="card-header">${product.name}</h4>
    <div class="card">
      <div class="card-top">
        <div class="card-image"><img src="${product.imageURL}" alt="${product.name}" class="card-img"></div>
      </div>
      <div class="card-content">
        <p class="card-text">${product.description}</p>
        <div class="card-footer">
          <p class="card-footer-left">MRP Rs.<span class="prod-price">${product.price}</span></p>
          <button class="btn card-btn" onclick="addToCart('${product.id}')">Buy Now</button>
          <button class="btn card-btn-sm" onclick="addToCart('${product.id}')">Buy Now @ Rs.${product.price}</button>
        </div>
      </div>
    </div>
    <button class="btn card-btn-md" onclick="addToCart('${product.id}')">Buy Now @ Rs.${product.price}</button>
  </li>`
      )
      .join("");
    document.querySelector(".cards").innerHTML = products_list;
  })
  .catch((err) => {
    console.log(err.message);
  });
