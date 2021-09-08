'use strict';


async function fetchBanners() {
  const bannersArray = await makeRequest('http://localhost:5000/banners');
  createSlider(bannersArray);
}

async function fetchCategories() {
  const catArray = await makeRequest('http://localhost:5000/categories');
  createCategoriesSection(catArray);
}

fetchBanners();
fetchCategories();

const createSlider = (banners) => {
  var slider = document.getElementById('banners');

  // Create image sliders from banners Array
  banners.map((banner, index) => {
    const { bannerImageAlt, bannerImageUrl, id } = banner;

    const bannerItem = document.createElement('div');
    bannerItem.classList = index === 0 ? `slider-item active` : `slider-item`;

    const bannerImg = document.createElement('img');
    bannerImg.classList = 'img-fluid';
    bannerImg.src = bannerImageUrl;
    bannerImg.alt = bannerImageAlt;

    bannerItem.appendChild(bannerImg);
    slider.appendChild(bannerItem);
  });

  // Create dots of slider
  var dotsElm = document.createElement('ul');
  dotsElm.id = 'dots';
  dotsElm.classList = 'list-inline dots';
  slider.appendChild(dotsElm);

  var sliderItem = slider.getElementsByTagName('div');
  var dots = document.getElementById('dots');
  var carouselCTA = document.getElementById('dots').getElementsByTagName('li');
  for (let i = 0; i < sliderItem.length; i++) {
    dots.appendChild(document.createElement('li'));
    carouselCTA[i].classList.add('list-inline-item');
    carouselCTA[i].setAttribute('id', i);
    carouselCTA[i].innerHTML = i;
    carouselCTA[0].classList.add('active');
    carouselCTA[i].addEventListener('click', runSlider);
  }
  function runSlider() {
    var dnum = this.getAttribute('id');
    for (let i = 0; i < sliderItem.length; i++) {
      sliderItem[i].classList.remove('active');
      sliderItem[dnum].classList.add('active');
      carouselCTA[i].classList.remove('active');
      carouselCTA[dnum].classList.add('active');
    }
  }
};

const createCategoriesSection = (categories) => {
  const categoriesSection = document.getElementById('categories');
  categories = categories.filter((item) => item.enabled);
  categories.map((category, index) => {
    const { description, imageUrl, name, key } = category;

    const article = document.createElement('article');
    if (index % 2 === 0) {
      article.classList = 'flex flex-jc-sa category curved';
    } else
      article.classList = 'flex flex-row-reverse flex-jc-sa category curved';

    const categoryImg = document.createElement('img');
    categoryImg.classList = 'img-cat';
    categoryImg.src = imageUrl;
    categoryImg.alt = name;

    article.appendChild(categoryImg);

    const categoryInfo = document.createElement('div');
    categoryInfo.classList = 'category-info';

    const h2 = document.createElement('h2');
    h2.innerText = name;

    const p = document.createElement('p');
    p.innerText = description;

    const button = document.createElement('button');
    button.type = 'button';
    button.classList = 'button-primary';
    button.innerText = `Explore ${key}`;

    categoryInfo.appendChild(h2);
    categoryInfo.appendChild(p);
    categoryInfo.appendChild(button);
    article.appendChild(categoryInfo);
    categoriesSection.appendChild(article);
  });
};
