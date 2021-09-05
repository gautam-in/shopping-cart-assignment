'use strict';

async function fetchProducts() {
  try {
    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();
    createProductGrid(data);
    console.log('data from products', data);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();

const createProductGrid = (products) => {
  const productSection = document.getElementById('products');

  products.map((product, index) => {
    const { name, imageURL, description, price } = product;

    const cardDiv = document.createElement('div');
    cardDiv.classList = 'card';

    const h2 = document.createElement('h2');
    h2.innerText = name;

    const cardImg = document.createElement('img');
    cardImg.src = imageURL;
    cardImg.alt = name;
    cardImg.classList = 'img-cat';

    const cardSubtitle = document.createElement('p');
    cardSubtitle.classList = 'card__subtitle';
    cardSubtitle.innerText = description;

    const ctaDiv = document.createElement('div');
    ctaDiv.classList = 'products-container__cta';

    const spanMrp = document.createElement('span');
    spanMrp.classList = 'desktop-show';
    spanMrp.innerText = `MRP Rs.${price}`;

    const ctaBtn = document.createElement('button');
    ctaBtn.type = 'button';
    ctaBtn.classList = 'button-primary';
    ctaBtn.innerHTML = `Buy Now <span class="mobile-show">@ MRP Rs.${price} </span>`;

    ctaDiv.appendChild(spanMrp);
    ctaDiv.appendChild(ctaBtn);

    cardDiv.appendChild(h2);
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardSubtitle);
    cardDiv.appendChild(ctaDiv);

    productSection.appendChild(cardDiv);
  });
};
