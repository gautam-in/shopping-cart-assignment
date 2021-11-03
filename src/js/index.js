import { addProductToCart } from './cart.js';
import {
  createElementHelper, fetchItemsByUrl,
  getElementByProps,
  insertAdjacentElement
} from './utility.js';

const DOM_TEMPLATE_TYPE = {
  category: 'category',
  banner: 'banner',
  product: 'product',
};

async function getSortedItems(url) {
  const itemResponse = await fetchItemsByUrl(url);
  return itemResponse.sort((a, b) => a.order - b.order);
}

async function insertElementToDom(elements, domType, parentElement, position, getTemplate) {
  const itemContent = elements.map((item, index) => getDomTemplate(domType, item, index, elements.length, getTemplate)).join('');
  const itemTarget = getElementByProps(parentElement);
  insertAdjacentElement(itemTarget, position, itemContent);
  return true;
}

function getDomTemplate(type, entity, indexOfEntity, entityLength, getTemplate) {
  let template = '';
  switch (type) {
    case 'category':
      template = getTemplate(entity, indexOfEntity);
      break;
    case 'banner':
      template = getTemplate(entity, indexOfEntity, entityLength);
      break;
    case 'product':
      template = getTemplate(entity, indexOfEntity, entityLength);
      break;
    default:
      throw new Error('invalid template');
  }
  return template;
}

function getCategoryTemplate(entity, index) {
  if (entity.enabled) {
    return `<article id="${entity.id}" class="category__container 
    ${(index % 2 === 0) ? 'container__row--reverse' : ''}">
  <img class="category__image" src="${entity.imageUrl}" alt="fruit category">
  <div class="category-text__wrapper">
    <div class="category__title">${entity.name}</div>
    <div class="category__description">${entity.description}</div>
    <button class="category__button btn">Explore ${entity.key}</button>
  </div>
</article>`;
  }
  return '';
}

function getBannerSlides(banner, index, bannerLength) {
  const currentSlideNo = index + 1;
  let prevSlide = '';
  let nextSlide = currentSlideNo;

  if (currentSlideNo === 1) {
    prevSlide = bannerLength;
    nextSlide++;
  } else if (currentSlideNo === bannerLength) {
    nextSlide = 1;
    prevSlide = currentSlideNo - 1;
  } else {
    nextSlide = currentSlideNo + 1;
    prevSlide = currentSlideNo - 1;
  }
  return `<li id="carousel__slide${currentSlideNo}" tabindex="0" class="carousel__slide">
         <img class="carousel__image" src="${banner.bannerImageUrl}" alt="${banner.bannerImageAlt}">
    <div class="carousel__snapper">
      <a href="#carousel__slide${prevSlide}"
         class="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide${nextSlide}"
         class="carousel__next">Go to next slide</a>
    </div>
  </li>`;
}

function getBannerControls(banner, index) {
  index++;
  return `<li class="carousel__navigation-item">
    <a href="#carousel__slide${index}"
      class="carousel__navigation-button">Go to slide ${index}</a>
  </li>`;
}

// function getProductTemplate(product, index) {
//   return `<div id="${index}" class="card">
//             <h2>${product.name} </h2>
//             <img class="img-cat" src="${product.imageURL}"
//             alt="${product.name}">
//             <p class="card__subtitle">
//             ${product.description}
//             </p>
//             <div class="products-container__cta">
//               <span class="desktop-show">MRP Rs.${product.price}</span>
//               <button class="btn button-primary add-product" type="button">Buy Now
//                 <span class="mobile-show">@ MRP Rs.${product.price} </span>
//               </button>
//             </div>
//           </div>`;
// }

function getProductTemplate(products) {
  const productSection = getElementByProps('#products');

  products.forEach((product, index) => {
    const {
      name, imageURL, description, price,
    } = product;    

    const cardElement = createElementHelper('div', 'card');
    const h2 = createElementHelper('h2', '', name);
    const cardImg = createElementHelper('img', 'img-cat');
    cardImg.src = imageURL;
    cardImg.alt = name;

    const cardSubtitle = createElementHelper(
      'p',
      'card__subtitle',
      description,
    );
    const ctaDiv = createElementHelper('div', 'products__container__cta');
    const spanMrp = createElementHelper(
      'span',
      'desktop-show',
      `MRP Rs.${price}`,
    );

    const ctaBtn = createElementHelper(
      'button',
      'button--primary btn',
      undefined,
      `Buy Now <span class="mobile-show">@ MRP Rs.${price} </span>`,
    );
    ctaBtn.type = 'button';
    ctaBtn.addEventListener('click', () => addProductToCart(product));

    ctaDiv.appendChild(spanMrp);
    ctaDiv.appendChild(ctaBtn);

    cardElement.appendChild(h2);
    cardElement.appendChild(cardImg);
    cardElement.appendChild(cardSubtitle);
    cardElement.appendChild(ctaDiv);

    productSection.appendChild(cardElement);
  });
}

async function loadHome() {
  const banners = await getSortedItems('http://localhost:5501/server/banners/index.get.json');
  await insertElementToDom(banners, 'banner', '#carousel__viewport', 'afterbegin', getBannerSlides);
  await insertElementToDom(banners, DOM_TEMPLATE_TYPE.banner, '#carousel__navigation-list', 'afterbegin', getBannerControls);
  const categories = await getSortedItems('http://localhost:5501/server/categories/index.get.json');
  await insertElementToDom(categories, DOM_TEMPLATE_TYPE.category, '#category__wrapper-container', 'afterbegin', getCategoryTemplate);
}

async function loadProducts() {
  const products = await fetchItemsByUrl('http://localhost:5501/server/products/index.get.json');
  getProductTemplate(products);
}
document.addEventListener('DOMContentLoaded', async () => {
  switch (document.title) {
    case 'Sabka Bazar':
      loadHome();
      break;
    case 'Products':
      loadProducts();
      break;
    default:
      console.log('loaded');
  }
});