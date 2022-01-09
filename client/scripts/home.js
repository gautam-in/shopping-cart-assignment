const BASE_URL = 'http://localhost:8000/';

updateCart();

const setCarousel = async () => {
  const offers = await axios.get(BASE_URL + 'offers').then(({ data }) => data);
  const carouselDiv = document.querySelector('.carousel-inner');
  const length = offers.length;
  for (let i = 0; i < length; i++) {
    const div = document.createElement('div');
    div.classList.add('carousel-item');
    if (i === 0) {
      div.classList.add('active');
    }
    const img = document.createElement('img');
    img.src = `./${offers[i].bannerImageUrl}`;
    img.alt = `${offers[i].bannerImageAlt}`;
    img.classList.add('d-block', 'w-100', 'h-100');
    div.appendChild(img);
    carouselDiv.appendChild(div);
  }
};

const setBanners = async () => {
  const banners = await axios(BASE_URL + 'categories').then(({ data }) =>
    data.sort((entity1, entity2) => (entity1.order > entity2.order ? 1 : -1))
  );
  const mainContent = document.querySelector('.main-content');
  const length = banners.length;
  const commonCardClasses = ['col', 'd-flex', 'justify-content-center'];
  for (let i = 1; i < length; i++) {
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('row', 'border', 'my-5', 'shadow');
    const cardCol1 = document.createElement('div');
    cardCol1.classList.add(
      ...commonCardClasses,
      'align-items-start',
      'max-h-40rem'
    );

    const img = document.createElement('img');
    img.src = `.${banners[i].imageUrl}`;
    img.alt = banners[i].description;
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
    categoryDescription.innerText = banners[i].description;
    categoryDescription.classList.add('category-description', 'text-center');

    const cardButton = document.createElement('button');
    cardButton.innerText = 'Explore ' + banners[i].key;
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

    if (i % 2 !== 0) {
      categoryCard.appendChild(cardCol1);
      categoryCard.appendChild(cardCol2);
    } else {
      categoryCard.appendChild(cardCol2);
      categoryCard.appendChild(cardCol1);
    }

    mainContent.appendChild(categoryCard);
  }
};

setCarousel();
setBanners();
