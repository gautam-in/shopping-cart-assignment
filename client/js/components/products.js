export const Products = (prods, categories) => {
  const categoryId = localStorage.getItem("currentCategoryId");
  let prodsList = "";
  let categoryList = "";

  if (categoryId) {
    prods = prods.filter((prod) => prod.category === categoryId);
  }

  prods.forEach((prod) => {
    prodsList += `<section class="prod-wrapper">
      <div class="prod-title">
        <h1>${prod.name}</h1>
      </div>
      <div>
      <div class="prod-img">
        <img
          src="${prod.imageURL}"
          alt="${prod.name}"
        />
      </div>
      <div class="prod-info">
        <p>
            ${prod.description}
        </p>
      </div>
      <div class="prod-price-container">
        <a href="#" class="buy-now">
          Buy Now
          <span class="price">${prod.price}</span>
        </a>
      </div>
      </div>
    </section>`;
  });

  categories.forEach((category) => {
    if (category.order > 0) {
      categoryList += `<li id="category-item" class="${
        categoryId === category.id ? "category-item__active" : ""
      }" data-category-id="${category.id}">${category.name}</li>`;
    }
  });
  return `<div class="wrapper">
    <section class="plp-container">
      <aside class="plp-cat">
        <nav class="left-sidebar">
          <ul>
            ${categoryList}
          </ul>
        </nav>
      </aside>
      <div class="plp-wrapper">
        <div class="plp-list-row">
            ${prodsList}
        </div>
      </div>
    </section>
  </div>`;
};
