'use strict';

let cart = [];

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

    const cardDiv = createElementHelper('div', 'card');
    const h2 = createElementHelper('h2', '', name);
    const cardImg = createElementHelper('img', 'img-cat');
    cardImg.src = imageURL;
    cardImg.alt = name;

    const cardSubtitle = createElementHelper(
      'p',
      'card__subtitle',
      description
    );
    const ctaDiv = createElementHelper('div', 'products-container__cta');
    const spanMrp = createElementHelper(
      'span',
      'desktop-show',
      `MRP Rs.${price}`
    );

    const ctaBtn = createElementHelper(
      'button',
      'button-primary',
      undefined,
      `Buy Now <span class="mobile-show">@ MRP Rs.${price} </span>`
    );
    ctaBtn.type = 'button';
    ctaBtn.addEventListener('click', () => addProductToCart(product));

    ctaDiv.appendChild(spanMrp);
    ctaDiv.appendChild(ctaBtn);

    cardDiv.appendChild(h2);
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardSubtitle);
    cardDiv.appendChild(ctaDiv);

    productSection.appendChild(cardDiv);
  });
};

const addProductToCart = (product) => {
  // check if product already exists in cart
  const productAlreadyExist =
    cart.filter((item) => item.id === product.id).length > 0;

  if (!productAlreadyExist) {
    cart = [...cart, product];

    // Update cart items number
    const cartElm = document.querySelector('.cart-button');
    cartElm.innerHTML = `<i class="fas fa-shopping-cart"></i> ${cart.length} items`;
  }
};

const openCart = (e) => {
  e.preventDefault();
  var modal = document.getElementById('myModal');
  var span = document.querySelector('.close');

  //Toggle modal functionality
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
    return;
  }

  let cartTotalPrice = 0;

  modal.style.display = 'block';

  const modalBody = document.querySelector('.modal-body');
  const modalFooter = document.querySelector('.modal-footer');

  if (cart.length === 0) {
    // Show Empty cart
    modalBody.innerHTML = '';
    modalFooter.innerHTML = '';

    const buttonCta = createElementHelper('button', null, 'Start Shopping');
    buttonCta.type = 'button';
    buttonCta.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    modalFooter.appendChild(buttonCta);
    modalFooter.style.margin = 0;

    const div = createElementHelper(
      'div',
      'flex-column flex-jc-c flex-ai-c',
      null,
      ` <h2>No items in your cart</h2>
      <p>Your favorite items are just a click away</p>`
    );
    div.style.marginTop = '30%';
    modalBody.appendChild(div);
    modalBody.style.background = 'white';
  } else {
    // Build cart
    const cartHeader = document.getElementById('cartHeader');
    cartHeader.innerHTML = `My Cart <span> (${cart.length} items) </span>`;
    modalBody.innerHTML = '';
    modalFooter.innerHTML = `
    <p>Promo code can be applied on payment page</p>
              <button type="button" class="flex flex-jc-sb">
                Proceed to Checkout <span>Rs.187</span>
              </button>
    `;
    modalFooter.style.marginTop = '5px';
    cart.map((product) => {
      const { name, imageURL, price } = product;

      cartTotalPrice += price;

      const row = createElementHelper('div', 'row');
      modalBody.appendChild(row);

      const img = createElementHelper('img', 'img-modal');
      img.src = imageURL;
      img.alt = name;
      row.appendChild(img);

      const cartInfoDiv = createElementHelper('div', 'cart-info');
      row.appendChild(cartInfoDiv);

      const h2 = createElementHelper('h2', '', name);
      cartInfoDiv.appendChild(h2);

      const controlButtonDiv = createElementHelper('div', 'control-buttons');
      cartInfoDiv.appendChild(controlButtonDiv);

      const minusIcon = createElementHelper('i', 'fas fa-minus-circle');
      const plusIcon = createElementHelper('i', 'fas fa-plus-circle');
      const multiplier = createElementHelper('span', '', '1');
      controlButtonDiv.appendChild(minusIcon);
      controlButtonDiv.appendChild(multiplier);
      controlButtonDiv.appendChild(plusIcon);

      const spanCross = createElementHelper('span', 'multiplier', 'x');
      cartInfoDiv.appendChild(spanCross);

      const spanPrice = createElementHelper('span', '', `Rs.${price}`);
      cartInfoDiv.appendChild(spanPrice);

      const divPrice = createElementHelper('div', 'price');
      const spanPrice2 = createElementHelper('span', '', `Rs.${price}`);
      row.appendChild(divPrice);
      divPrice.appendChild(spanPrice2);
    });

    // Append offer div
    const divOffer = createElementHelper('div', 'offer');
    modalBody.appendChild(divOffer);

    const offerImg = createElementHelper('img');
    offerImg.src = '../static/images/lowest-price.png';
    offerImg.alt = 'Offer Image';

    const span = createElementHelper(
      'span',
      '',
      "You won't find it cheaper anywhere"
    );
    divOffer.appendChild(offerImg);
    divOffer.appendChild(span);

    // Update price on checkout button
    const checkOutPriceElm = document.querySelector(
      '.modal-footer button span'
    );
    checkOutPriceElm.innerText = `Rs.${cartTotalPrice}`;
  }

  span.onclick = function () {
    modal.style.display = 'none';
  };
};
