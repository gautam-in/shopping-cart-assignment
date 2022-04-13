import './Categories.scss';
import apiService from '../../Service/apiService.js';

export const LoadCategories = () => {
  apiService.fetchDeatils('categories', (response) => {
    if (response.length > 0) {
      CreateCategories(response);
    }
  });
};

const CreateCategories = (categories) => {
  let categorySection = document.createElement('section');
  categorySection.setAttribute('class', 'container sb-categories-section');
  categories = categories.sort((a, b) => a.order - b.order);

  for (const category of categories) {
    if (category.enabled) {
      let categoryCard = document.createElement('div');
      categoryCard.setAttribute(
        'class',
        'd-flex category-card curved-bottom-shadow'
      );

      let cardImage = document.createElement('img');
      cardImage.setAttribute('src', category.imageUrl);
      cardImage.setAttribute('alt', category.name);
      cardImage.setAttribute('class', 'category-image');

      let cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body d-flex fdir-col ');

      let cardTitle = document.createElement('h3');
      cardTitle.setAttribute('class', 'card-title');
      cardTitle.innerHTML = category.name;

      let cardDescription = document.createElement('p');
      cardDescription.setAttribute('class', 'card-description');
      cardDescription.innerHTML = category.description;

      let cardButton = document.createElement('button');
      cardButton.setAttribute('class', 'card-button');
      cardButton.innerHTML = `Explore ${category.key}`;
      cardButton.addEventListener('click', () => {
        window.location.href = `/products.html?categoryId=${category.id}`;
      });

      cardBody.append(cardTitle, cardDescription, cardButton);

      categoryCard.append(cardImage, cardBody);
      categorySection.append(categoryCard);
    }
  }

  const main = document.querySelector('#root');
  main.append(categorySection);
};
