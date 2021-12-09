async function getBanners() {
  const response = await fetch("http://localhost:5000/banners");
  const data = await response.json();
  return data;
}

async function displayBanners() {
  const banners = await getBanners();

  let banner = document.createElement("div");
  banner.setAttribute("class", "carousel slide");
  banner.setAttribute("id", "myCarousel");
  banner.setAttribute("data-bs-ride", "carousel");

  let ol = document.createElement("ol");
  ol.setAttribute("class", "carousel-indicators");

  for (let i = 0; i < banners.length; i++) {
    let li = document.createElement("li");
    li.className = "li-indicators";
    li.setAttribute("data-bs-target", "#myCarousel");
    li.setAttribute("data-bs-slide-to", i);
    if (i == 0) {
      li.setAttribute("class", "active");
    }

    ol.append(li);
  }

  banner.append(ol);

  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "carousel-inner");

  for (let i = 0; i < banners.length; i++) {
    let banner_container = document.createElement("div");
    if (i == 0) {
      banner_container.setAttribute("class", "carousel-item active");
    } else {
      banner_container.setAttribute("class", "carousel-item");
    }

    let img = document.createElement("img");
    img.setAttribute("src", banners[i].bannerImageUrl);
    img.setAttribute("alt", banners[i].bannerImageAlt);
    img.setAttribute("style", "width:100%;height:100%;");

    banner_container.append(img);
    wrapper.append(banner_container);
  }

  banner.append(wrapper);

  let prev_button = document.createElement("button");
  prev_button.setAttribute("class", "left carousel-control-prev");
  prev_button.setAttribute("type", "button");
  prev_button.setAttribute("data-bs-target", "#myCarousel");
  prev_button.setAttribute("data-bs-slide", "prev");

  let prev_icon = document.createElement("span");
  prev_icon.setAttribute("class", "carousel-control-prev-icon");
  prev_icon.setAttribute("are-hidden", "true");
  let prevText = document.createElement("span");
  prevText.setAttribute("class", "visually-hidden");
  prevText.innerHTML = "Previous";

  prev_button.append(prev_icon);
  prev_button.append(prevText);

  banner.append(prev_button);
  let next_button = document.createElement("button");
  next_button.setAttribute("class", "left carousel-control-next");
  next_button.setAttribute("type", "button");
  next_button.setAttribute("data-bs-target", "#myCarousel");
  next_button.setAttribute("data-bs-slide", "next");

  let next_icon = document.createElement("span");
  next_icon.setAttribute("class", "carousel-control-next-icon");
  next_icon.setAttribute("are-hidden", "true");
  let next_text = document.createElement("span");
  next_text.setAttribute("class", "visually-hidden");
  next_text.innerHTML = "Next";

  next_button.append(next_icon);
  next_button.append(next_text);

  banner.append(next_button);

  document.querySelector(".banners").appendChild(banner);
}

displayBanners();

async function getCategories() {
  const response = await fetch("http://localhost:5000/categories");
  const data = await response.json();
  return data;
}

async function displayCategories() {
  const categoriesArr = await getCategories();
  const categories = categoriesArr.sort((a, b) => (a.order > b.order ? 1 : -1));
  console.log(categories);

  for (let i = 0; i < categories.length; i++) {
    if (categories[i].enabled) {
      let cardContainer = document.createElement("div");
      cardContainer.setAttribute("class", "categoryContainer");

      let imageContainer = document.createElement("div");
      imageContainer.setAttribute("class", "imgContainer");

      let img = document.createElement("img");
      img.setAttribute("src", categories[i].imageUrl);
      img.setAttribute("class", "categoryImage");
      img.setAttribute("alt", categories[i].name);

      imageContainer.append(img);

      let descContainer = document.createElement("div");
      descContainer.setAttribute("class", "desc");

      let categoryName = document.createElement("h4");
      categoryName.setAttribute("class", "desc h4");
      categoryName.innerHTML = categories[i].name;

      let categoryDesc = document.createElement("span");
      categoryDesc.setAttribute("class", "categoryDescription");
      categoryDesc.innerHTML = categories[i].description;

      let categoryButton = document.createElement("button");
      categoryButton.setAttribute("class", "categoryButton");
      categoryButton.setAttribute("id", categories[i].id);
      categoryButton.innerHTML = `Explore ${categories[i].key}`;

      descContainer.append(categoryName);
      descContainer.append(categoryDesc);
      descContainer.append(categoryButton);

      if (i % 2 === 0) {
        cardContainer.append(descContainer);
        cardContainer.append(imageContainer);
      } else {
        cardContainer.append(imageContainer);
        cardContainer.append(descContainer);
      }

      document.querySelector(".categories").appendChild(cardContainer);
    }
  }

  async function getCategoryProducts(e) {
    if (e.target && e.target.nodeName == "BUTTON") {
      window.location.href = "../products/products.html";
      document.getElementById(e.target.id).click();
    }
  }

  document
    .querySelector(".categories")
    .addEventListener("click", getCategoryProducts);
}
displayCategories();
