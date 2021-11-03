import { createElementHelper, getElementByProps } from './utility.js';

let CART_ITEMS = [];

function addProductToCart (product) {
  // check if product already exists in cart
  const productAlreadyExist = CART_ITEMS.filter((item) => item.id === product.id).length > 0;

  if (!productAlreadyExist) {
    product.quantity = 1;
    CART_ITEMS = [...CART_ITEMS, product];

    // Update cart items number
    const cartElm = getElementByProps('.cart__btn--click');
    cartElm.innerHTML = `<i class="fas fa-shopping-cart"></i> ${CART_ITEMS.length} items`;
  }
}

function openCart(e) {
  if (e) {
    e.preventDefault();
  }

  const modal = getElementByProps('#myModal');
  const body = getElementByProps('body');
  let span = getElementByProps('.close');
  span.onclick = function () {
    modal.style.display = 'none';
    body.style.overflow = "auto";
  };
  let cartTotalPrice = 0;

  modal.style.display = 'block';
  body.style.overflow = "hidden";
  const modalBody = getElementByProps('.modal__body');
  const modalFooter = getElementByProps('.modal__footer');

  if (CART_ITEMS.length === 0) {
    // Show Empty cart
    modalBody.innerHTML = '';
    modalFooter.innerHTML = '';

    const buttonCta = createElementHelper('button', 'btn btn-primary', 'Start Shopping');
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
      `<h2>No items in your cart</h2>
        <p class="m-t-1">Your favorite items are just a click away</p>`,
    );
    div.style.marginTop = '30%';
    modalBody.appendChild(div);
    modalBody.style.background = 'white';
  } else {
    // Build cart
    const cartHeader = document.getElementById('cartHeader');
    cartHeader.innerHTML = `My Cart <span> (${CART_ITEMS.length} items) </span>`;
    modalBody.innerHTML = '';
    modalFooter.innerHTML = `<p>Promo code can be applied on payment page</p>
                <button type="button" class="btn flex flex-jc-sb">
                  Proceed to Checkout <span>Rs.187</span>
                </button>`;
    modalFooter.style.marginTop = '5px';
    modalFooter.onclick = function () {
      modal.style.display = 'none';
    };
    CART_ITEMS.map((product) => {
      const {
        name, imageURL, price, quantity,
      } = product;

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
      minusIcon.addEventListener('click', () => decreaseQuantity(product));

      const plusIcon = createElementHelper('i', 'fas fa-plus-circle');
      plusIcon.addEventListener('click', () => addQuantity(product));

      const multiplier = createElementHelper('span', '', quantity);
      controlButtonDiv.appendChild(minusIcon);
      controlButtonDiv.appendChild(multiplier);
      controlButtonDiv.appendChild(plusIcon);

      const spanCross = createElementHelper('span', 'multiplier', 'x');
      cartInfoDiv.appendChild(spanCross);

      const totalPrice = price * quantity;
      cartTotalPrice += totalPrice;

      const spanPrice = createElementHelper('span', '', `Rs.${totalPrice}`);
      cartInfoDiv.appendChild(spanPrice);

      const divPrice = createElementHelper('div', 'price');
      const spanPrice2 = createElementHelper('span', '', `Rs.${totalPrice}`);
      row.appendChild(divPrice);
      divPrice.appendChild(spanPrice2);
    });

    // Append offer div
    const divOffer = createElementHelper('div', 'offer');
    modalBody.appendChild(divOffer);

    const offerImg = createElementHelper('img');
    offerImg.src = './static/images/lowest-price.png';
    offerImg.alt = 'Offer Image';

    span = createElementHelper(
      'span',
      '',
      "You won't find it cheaper anywhere",
    );
    divOffer.appendChild(offerImg);
    divOffer.appendChild(span);

    // Update price on checkout button
    const checkOutPriceElm = document.querySelector(
      '.modal__footer button span',
    );
    checkOutPriceElm.innerText = `Rs.${cartTotalPrice}`;
  }
}

function addQuantity(product) {
  console.log({ product: product });
  CART_ITEMS.forEach((item) => {
    if (item.id === product.id) {
      item.quantity += 1;
    }
  });
  openCart();
}

function decreaseQuantity (product) {
  CART_ITEMS.forEach((item) => {
    if (item.id === product.id && item.quantity > 1) {
      item.quantity -= 1;
    }
    else if(item.id === product.id && item.quantity == 1){
      CART_ITEMS = CART_ITEMS.filter(function(itemName) {
        return itemName !== product
    })
    }
  });
  cartHeader.innerHTML = `My Cart <span> (${CART_ITEMS.length} items) </span>`;
  const cartElm = getElementByProps('.cart__btn--click');
    cartElm.innerHTML = `<i class="fas fa-shopping-cart"></i> ${CART_ITEMS.length} items`;
  openCart();
}

document.querySelector('body').addEventListener('click', function(event) {
  if (event.target.className.split(' ').includes('cart__btn--click')) {
    // do your action on your 'li' or whatever it is you're listening for
    openCart(event);
  }
});

export { addProductToCart, openCart };
