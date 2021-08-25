export const CategorySection = (image, alt, title, desc, id) => {
  return `<section class="category box">
    <div class="wrapper">
      <div class="home-container">
        <div class="cat_img">
          <img
            width="100%"
            src="${image}"
            alt="${alt}"
          />
        </div>
        <div class="cat_info">
          <h1 class="cat_title">${title}</h1>
          <p class="cat_decs">${desc}</p>
          <a href="/products.html" class="cat_explore" data-category-id="${id}">Explore ${title}</a>
        </div>
      </div>
    </div>
  </section>`;
};
