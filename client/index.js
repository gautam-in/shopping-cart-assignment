const bannerWrap = document.querySelector("#banner");
const btnNext = document.querySelector("#bannernext");
const btnPrev = document.querySelector("#bannerprev");
const slides = document.querySelectorAll(".slide");

const bannerItem = (item) => {
  const { bannerImageUrl, bannerImageAlt } = item;
  const slide = document.createElement("div");
  slide.classList.add("slide");
  const bannerItem = document.createElement("img");
  (bannerItem.src = `${bannerImageUrl}`), (bannerItem.alt = bannerImageAlt);
  slide.append(bannerItem);
  return slide;
};

const banners = () => {
  let counter = 0;
  btnNext.addEventListener("click", function () {
    counter++;
    console.log(counter);
  });

  btnPrev.addEventListener("click", function () {
    counter--;
    //carousel();
    console.log(counter);
  });
  fetch("http://localhost:5000/banners")
    .then((response) => response.json())
    .then((data) => data.map((item) => bannerWrap.append(bannerItem(item))));
};

const homeCatgories = document.querySelector("#homeCatgories");
const catgoryItem = (item) => {
  const { description, name, imageUrl, key } = item;
  const catgoryItem = document.createElement("div");
  catgoryItem.classList.add("category__item");

  const catgoryItemleft = document.createElement("div");
  catgoryItemleft.classList.add("category__item-left");
  const catgoryItemImg = document.createElement("img");
  catgoryItemImg.src = imageUrl ? imageUrl: '/static/images/default-product-image.png';

  catgoryItemImg.classList.add("category__img");
  catgoryItemleft.appendChild(catgoryItemImg);

  const catgorydetail = document.createElement("div");
  catgorydetail.classList.add("category__item-right");

  const catgorytitle = document.createElement("h2");
  catgorytitle.classList.add("category__title");
  catgorytitle.innerText = name;

  const catgorydescription = document.createElement("p");
  catgorytitle.classList.add("category__desc");
  catgorydescription.innerText = description;

  const catgoryaction = document.createElement("button");
  catgoryaction.innerHTML = "Explore " + key;
  catgoryaction.classList.add("btn", "btn--primary");

  catgorydetail.appendChild(catgorytitle);
  catgorydetail.appendChild(catgorydescription);
  catgorydetail.appendChild(catgoryaction);
  catgoryItem.appendChild(catgoryItemleft);
  catgoryItem.appendChild(catgorydetail);

  return catgoryItem;
};

const getAllcat = () => {
  fetch("http://localhost:5000/categories")
    .then((response) => response.json())
    .then((data) =>
      data.map((item) => homeCatgories.append(catgoryItem(item)))
    );
};

document.addEventListener("DOMContentLoaded", function () {
  banners();
  getAllcat();
});
