import apiService from '../../Service/apiService';
import './Banner.scss';
import { LoadCategories } from '../Categories/Categories.js';

export const LoadBanner = () => {
  apiService.fetchDeatils('banners', (response) => {
    if (response.length > 0) {
      CreateBanner(response);
      LoadCategories();
    }
  });
};

const CreateBanner = (banners) => {
  let container = document.createElement('section');
  container.setAttribute('class', 'container sb-banner curved-bottom-shadow');

  let slickSlider = document.createElement('div');
  slickSlider.setAttribute('class', 'splide');

  let sliderTrack = document.createElement('div');
  sliderTrack.setAttribute('class', 'splide__track');

  let sliderList = document.createElement('ul');
  sliderList.setAttribute('class', 'splide__list');

  for (const banner of banners) {
    let sliderItem = document.createElement('li');
    sliderItem.setAttribute('class', 'splide__slide');
    let bannerItem = document.createElement('img');
    // const imagePath = banner.bannerImageUrl.split('/').pop()
    // const bannerImage = require(`../../../static/images/offers/${imagePath}`)
    bannerItem.setAttribute('src', banner.bannerImageUrl);
    bannerItem.setAttribute('alt', banner.bannerImageAlt);
    sliderItem.append(bannerItem);
    sliderList.append(sliderItem);
  }
  sliderTrack.append(sliderList);
  slickSlider.append(sliderTrack);
  container.append(slickSlider);

  const main = document.querySelector('#root');
  main.appendChild(container);

  new Splide('.splide', {
    autoplay: true,
    type: 'loop',
    lazyLoad: 'nearby',
    classes: {
      pagination: 'splide__pagination sb-pagination',
    },
  }).mount();
};
