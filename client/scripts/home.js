import { BASE_URL } from './constants.js';

const setCarousel = async () => {
  const offers = await axios.get(BASE_URL + 'offers').then(({ data }) => data);
  const carouselDiv = document.querySelector('.carousel-inner');
  offers.forEach((offer, index) => {
    const div = document.createElement('div');
    div.classList.add('carousel-item');
    if (index === 0) {
      div.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = `./${offer.bannerImageUrl}`;
    img.alt = `${offer.bannerImageAlt}`;
    img.classList.add('d-block', 'w-100', 'h-100');
    div.appendChild(img);
    carouselDiv.appendChild(div);
  });
};

const setBanners = async () => {
  const banners = await axios(BASE_URL + 'categories').then(({ data }) =>
    data.sort((entity1, entity2) => (entity1.order > entity2.order ? 1 : -1))
  );
  const mainContent = document.querySelector('.main-content');
  const commonCardClasses = ['col', 'd-flex', 'justify-content-center'];
  banners.shift();
  banners.forEach((banner, index) => {
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('row', 'border', 'my-5', 'shadow');
    const cardCol1 = document.createElement('div');
    cardCol1.classList.add(
      ...commonCardClasses,
      'align-items-start',
      'max-h-40rem'
    );

    const img = document.createElement('img');
    img.src = `.${banner.imageUrl}`;
    img.alt = banner.description;
    img.classList.add('category-img');
    cardCol1.appendChild(img);
    categoryCard.appendChild(cardCol1);

    const cardCol2 = document.createElement('div');
    cardCol2.classList.add(
      ...commonCardClasses,
      'flex-column',
      'gap-5',
      'align-items-center'
    );

    const categoryDescription = document.createElement('p');
    categoryDescription.innerText = banner.description;
    categoryDescription.classList.add('category-description', 'text-center');

    const cardButton = document.createElement('button');
    cardButton.innerText = 'Explore ' + banner.key;
    cardButton.classList.add(
      'category-action',
      'action',
      'px-4',
      'py-2',
      'border-0',
      'bg-theme'
    );
    cardCol2.appendChild(categoryDescription);
    cardCol2.appendChild(cardButton);

    if (index % 2 !== 0) {
      categoryCard.appendChild(cardCol1);
      categoryCard.appendChild(cardCol2);
    } else {
      categoryCard.appendChild(cardCol2);
      categoryCard.appendChild(cardCol1);
    }

    mainContent.appendChild(categoryCard);
  });
};

setCarousel();
setBanners();
