import { fetchItemsByUrl, getElementByProps, insertAdjacentElement } from './util';

const DOM_TEMPLATE_TYPE = {
  category: 'category',
  banner: 'banner',
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
    default:
      throw new Error('invalid template');
  }
  return template;
}

function getCategoryTemplate(entity, index) {
  if (entity.enabled) {
    return `<article id="${entity.id}" class="category__container 
    ${(index % 2 === 1) ? 'container__row--reverse' : ''}">
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

document.addEventListener('DOMContentLoaded', async () => {
  const banners = await getSortedItems('http://localhost:5000/banners');
  await insertElementToDom(banners, 'banner', '#carousel__viewport', 'afterbegin', getBannerSlides);
  await insertElementToDom(banners, DOM_TEMPLATE_TYPE.banner, '#carousel__navigation-list', 'afterbegin', getBannerControls);
  const categories = await getSortedItems('http://localhost:5000/categories');
  await insertElementToDom(categories, DOM_TEMPLATE_TYPE.category, '#category__wrapper-container', 'afterbegin', getCategoryTemplate);
});
