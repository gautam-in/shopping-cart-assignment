const baseUrl = "../../../";

function getProductsList() {
  const bannerPromise = fetch("http://localhost:5000/banners").then((res) =>
    res.ok ? res.json() : ""
  );
  const categoriesPromise = fetch("http://localhost:5000/categories").then(
    (res) => (res.ok ? res.json() : "")
  );
  Promise.all([bannerPromise, categoriesPromise])
    .then((response) => {
      showCategoriesList(response[1]);
      console.log(response);
    })
    .catch((error) => {
      console.log("Unexpected Error");
    });
}

function showCategoriesList(categories) {
  const container = document.querySelector("#banners-container");
  categories.forEach((category, index) => {
    container.appendChild(
      showCategoryData(category, index % 2 === 0 ? "imageRight" : "imageLeft")
    );
  });
}

function showCategoryData(category, imageAlignment) {
  let categoryCard = document.createElement("div");
  categoryCard.classList.add("category-card");

  // image
  let categoryImage;
  if (category.imageUrl) {
    categoryImageDiv = document.createElement("div");
    categoryImageDiv.classList.add("image-section");
    categoryImage = document.createElement("img");
    categoryImage.setAttribute("src", `${baseUrl}${category.imageUrl}`);
    categoryImage.setAttribute("alt", category.name);
    categoryImageDiv.append(categoryImage);
  } else {
    categoryImage = document.createElement("div");
  }

  // details section
  let categoryDetails = document.createElement("div");
  categoryDetails.classList.add("category-details");

  // name
  let categoryName = document.createElement("h3");
  categoryName.classList.add("category-name");
  categoryName.innerHTML = category.name;

  // description
  let categoryDescription = document.createElement("div");
  categoryDescription.classList.add("category-des");
  categoryDescription.innerHTML = category.description;

  // Button
  let categoryBtn = document.createElement("button");
  categoryBtn.classList.add("category-btn");
  categoryBtn.innerHTML = `Explore ${category.key}`;
  categoryBtn.addEventListener("click", () => goToCategorySection(category.id));

  categoryDetails.append(categoryName);
  categoryDetails.append(categoryDescription);
  categoryDetails.append(categoryBtn);

  if (imageAlignment === "imageLeft") {
    categoryCard.append(categoryImageDiv);
    categoryCard.append(categoryDetails);
  } else {
    categoryCard.append(categoryDetails);
    categoryCard.append(categoryImageDiv);
  }

  return categoryCard;
}

function goToCategorySection(categoryId) {
  location.href = `${baseUrl}/client/pages/products/products.html?id=${categoryId}`;
}

getProductsList();
