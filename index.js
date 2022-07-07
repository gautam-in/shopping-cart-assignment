// Display Categories
fetch("categories.json")
  .then((res) => res.json())
  .then((categories) => {
    categories.sort((a, b) => a.order - b.order);
    const categories_list = categories.map(
      (category) => `
      <li class="catg-list-item">
        <div class="catg-image">
            <img src="${category.imageUrl}" alt="${category.name}" class="catg-img" />
        </div>
        <div class="catg-content">
            <h4 class="catg-header">${category.name}</h4>
            <p class="catg-desc">${category.description}</p>
            <button class="btn catg-action">Explore <span class="catg-type">${category.key}</span></button> 
        </div>
    </li>
    `
    );
    document.querySelector(".catg-list").innerHTML = categories_list;
  })
  .catch((err) => {
    console.log(err.message);
  });
