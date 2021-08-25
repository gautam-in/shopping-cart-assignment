let selectedCat = "";
const displayAllLists = document.querySelector("#displayAllLists");
const productsLeft = document.querySelector(".products__left-in");

function handleFilter(e) {
    var filterElement = e.target;
    const faqTitles = document.querySelectorAll('.products__left-button');
    faqTitles.forEach((faqTitle) => {
          faqTitle.classList.remove("selected-filter");
      });

  filterElement.classList.toggle("selected-filter");
  if (filterElement.classList.contains("selected-filter")) {
    selectedCat = filterElement.getAttribute("id");
  } else {
    selectedCat = selectedCat.filter(
      (item) => item !== filterElement.getAttribute("id")
    );
  }
  [...document.querySelectorAll(".products__item")].forEach((item) => {
    if (selectedCat.includes(item.getAttribute("data-catid"))) {
      item.style.display = "initial";
    } else {
      item.style.display = "none";
    }
  });
}

const productCard = (item) => {
  const { name, imageURL, description, price, category } = item;
  productItem = document.createElement("div");
  productItem.setAttribute("data-catid", category);
  productItem.classList.add("products__item");

  productItemWrap = document.createElement("div");
  productItemWrap.classList.add("products__item-wrap");
  productItem.tabIndex = 0;
  productName = document.createElement("h2");
  productName.innerText = name;
  productName.classList.add("products__title");
  productImgWrap = document.createElement("div");
  productImgWrap.classList.add("products__item__left");
  productContentBtn = document.createElement("div");
  productContentBtn.classList.add("products__item__right");
  productImg = document.createElement("img");
  productImg.src = imageURL;
  productImg.alt = name;
  productImg.height = "200";
  productImg.classList.add("products__img");
  productDescription = document.createElement("p");
  productDescription.classList.add("products__desc");
  productDescription.innerText = description;
  productActions = document.createElement("div");
  productActions.classList.add("products__bottom");
  productActions.innerHTML = `
     <div class="products__price">MRP Rs ${price} </div><button class="btn btn--primary btn--desktop">Buy Now</button>
     <button class="btn btn--primary btn--mob">Buy Now @ MRP Rs ${price}</button>
     
     `;

  productItemWrap.appendChild(productName);
  productImgWrap.appendChild(productImg);
  //productImgWrap.appendChild(productContentBtn)
  productItemWrap.appendChild(productImgWrap);
  productItemWrap.appendChild(productContentBtn);
  productContentBtn.appendChild(productDescription);
  productContentBtn.appendChild(productActions);

  productItem.appendChild(productItemWrap);

  console.log(productItem);
  return productItem;
};

const catgoryItem = (item) => {
  const { name, id } = item;
  const catgoryItem = document.createElement("button");
  catgoryItem.classList.add("products__left-button");
  catgoryItem.id = id;
  catgoryItem.innerText = name;
  catgoryItem.addEventListener("click", function (event) {
    console.log(event.target);
    // selectedCat.push(event.target.id);
    // console.log(selectedCat);

    handleFilter(event);
  });
  return catgoryItem;
};

const getAllcat = () => {
  fetch("http://localhost:5000/categories")
    .then((response) => response.json())
    .then((data) => data.map((item) => productsLeft.append(catgoryItem(item))));
};

const getList = () => {
  fetch("http://localhost:5000/products")
    .then((response) => response.json())
    .then((data) =>
      data.map((item) => displayAllLists.append(productCard(item)))
    );
};

document.addEventListener("DOMContentLoaded", function () {
  getAllcat();
  getList();
});
