/* eslint-disable no-use-before-define */
/* eslint-disable arrow-parens */
import SessionStorageService from '../helpers/webStorage';

function getCartCount() {
  return sessionStorageService.getItem('cartCount');
}

function setCartCount(coefficient) {
  let cartCount = sessionStorageService.getItem('cartCount');
  if (!cartCount) {
    if (coefficient === 1) {
      sessionStorageService.setItem('cartCount', 1);
    }
  } else {
    cartCount = Number(cartCount) + coefficient;
    if (cartCount !== 0) {
      sessionStorageService.setItem('cartCount', cartCount);
    } else {
      sessionStorageService.removeItem('cartCount');
      sessionStorageService.removeItem('cartItems');
    }
  }
}

function renderCartQuantity() {
  const cartCount = Number(getCartCount());
  const cartQuantityElement = document.querySelector('.item-count');
  cartQuantityElement.textContent = cartCount;
}

function setCartItems(id, productsData = [], coefficient = 1) {
  let cartItems = sessionStorageService.getItem('cartItems');
  if (cartItems) {
    cartItems = JSON.parse(cartItems);
    if (cartItems[id]) {
      cartItems[id].inCart += coefficient;
      cartItems[id].totalPrice = cartItems[id].price * cartItems[id].inCart;
      if (cartItems[id].inCart === 0) {
        delete cartItems[id];
      }
      sessionStorageService.setItem('cartItems', cartItems, true);
    } else {
      cartItems = addItemCartSession(id, productsData, cartItems);
      sessionStorageService.setItem('cartItems', cartItems, true);
    }
  } else if (coefficient === 1) {
    cartItems = addItemCartSession(id, productsData, cartItems);
    sessionStorageService.setItem('cartItems', cartItems, true);
  }
}

function addItemCartSession(id, productsData, cartItems) {
  // let addedItem = productsData.find(x => x.id === id);
  const addedItem = productsData.filter(x => x.id === id)[0]; // IE doesn't support find
  addedItem.inCart = 1;
  addedItem.totalPrice = addedItem.price;
  const newObj = { [id]: addedItem };
  return { ...cartItems, ...newObj };
}

function openCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.style.display = 'block';
  cartModal.classList.add('cart-modal-view');

  const opacityElement = document.getElementById('cart-modal-backdrop');
  opacityElement.classList.add('black-opacity');

  const body = document.querySelector('.page-body');
  body.classList.add('body-container');
  renderCartView();
}

function closeCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.style.display = 'none';
  cartModal.classList.remove('cart-modal-view');

  const opacityElement = document.getElementById('cart-modal-backdrop');
  opacityElement.classList.remove('black-opacity');
  const body = document.querySelector('.page-body');

  body.classList.remove('body-container');
  const cartBody = document.querySelector('.cart-body');

  cartBody.innerHTML = '';
}

function renderCartView() {
  const cartCount = getCartCount();
  const cartBody = document.querySelector('.cart-body');
  cartBody.innerHTML = '';
  cartBody.classList.remove('flexbox-vertical-horizontal-center');
  const cartButtonContent = document.querySelector('.cart-button-content');
  const promoCode = document.querySelector('.promo-code');
  const totalInCart = document.querySelector('.total-in-cart');
  if (!cartCount) {
    totalInCart.textContent = '';

    cartBody.style.backgroundColor = '#fff';
    cartBody.style.height = '75%';
    cartBody.classList.add('flexbox-vertical-horizontal-center');

    const noItems = document.createElement('strong');
    noItems.textContent = 'No items in your cart';

    const favItems = document.createElement('p');
    favItems.textContent = 'Your favourite items are just a click away';

    cartBody.appendChild(noItems);
    cartBody.appendChild(favItems);

    promoCode.style.display = 'none';

    cartButtonContent.textContent = 'Start Shopping';
  } else {
    cartBody.style.backgroundColor = '#ecf0f1';
    cartBody.style.height = '65%';

    cartButtonContent.textContent = 'Start Shopping';

    promoCode.style.display = 'block';

    let cartItems = sessionStorageService.getItem('cartItems');
    cartItems = JSON.parse(cartItems);

    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('mx-0');
    row.classList.add('my-4');
    row.style.backgroundColor = '#fff';

    let totalCartAmount = 0;
    let totalItems = 0;
    // Object.entries(cartItems).forEach(([key, value]) => {
    Object.keys(cartItems).forEach(key => { // For browser compatibility
      const value = cartItems[key];
      const col = document.createElement('div');
      col.classList.add('col-12');
      col.classList.add('my-1');

      const innerRow = document.createElement('div');
      innerRow.classList.add('row');

      const imgDiv = document.createElement('div');
      imgDiv.classList.add('col-2');

      const img = document.createElement('img');
      img.src = value.imageURL;
      img.height = '100';
      img.alt = value.name;
      imgDiv.appendChild(img);

      const details = document.createElement('div');
      details.classList.add('col-10');
      details.classList.add('pl-4');
      details.classList.add('flexbox-vertical-center');

      const strong = document.createElement('strong');
      strong.textContent = value.name;

      const innerRow2 = document.createElement('div');
      innerRow2.classList.add('flexbox-space-between');
      innerRow2.innerHTML = `<div>
                   <i class="change-quantity icon ion-md-remove-circle" id="${value.id}-decrease"
                        aria-label="Decrease quantity" tabindex="0"></i>&nbsp;
                    &nbsp;&nbsp;${value.inCart}&nbsp;&nbsp;
                    <i class="change-quantity icon ion-md-add-circle" id="${value.id}-increase"
                        aria-label="Increase quantity" tabindex="0"></i>
                    &nbsp;&nbsp;&nbsp;<span class="multiply">&#215;</span> ${value.price}
                </div>
                <div>
                    Rs. ${value.totalPrice}
                </div>`;

      details.appendChild(strong);
      details.appendChild(innerRow2);

      innerRow.appendChild(imgDiv);
      innerRow.appendChild(details);

      col.appendChild(innerRow);
      row.appendChild(col);

      totalCartAmount += value.totalPrice;
      totalItems += value.inCart;

      totalInCart.textContent = ` (${totalItems} item(s))`;
    });
    const cheapBlock = document.createElement('div');
    cheapBlock.classList.add('mx-3');
    cheapBlock.classList.add('mb-4');
    cheapBlock.style.backgroundColor = '#fff';

    const cheapImg = document.createElement('img');
    cheapImg.classList.add('mx-3');
    cheapImg.src = 'static/images/lowest-price.png';
    cheapImg.alt = 'You won\'t find it cheaper anywhere';

    const cheapBlockText = document.createElement('div');
    cheapBlockText.style.display = 'inline-block';
    cheapBlockText.innerText = "You won't find it cheaper anywhere";
    cheapBlock.appendChild(cheapImg);
    cheapBlock.appendChild(cheapBlockText);

    cartBody.appendChild(row);
    cartBody.appendChild(cheapBlock);

    cartButtonContent.innerHTML = `
        <div class="flexbox-space-between">
            <div>Proceed to Checkout
        </div>
        <div>Rs. ${totalCartAmount} ></div>
        `;
  }
}

// Event delegation
document.addEventListener('DOMContentLoaded', () => {
  const cartBody = document.querySelector('.cart-body');
  cartBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('change-quantity')) {
      const button = e.target;
      const { id } = button;
      const idList = id.split('-');
      let coefficient = 1;
      if (idList[1] === 'decrease') {
        coefficient = -1;
      }
      setCartCount(coefficient);
      renderCartQuantity();
      setCartItems(idList[0], [], coefficient);
      renderCartView();
    }
  });
});

export {
  getCartCount, setCartCount, renderCartQuantity, setCartItems,
  addItemCartSession, openCart, closeCart,
};

const sessionStorageService = new SessionStorageService();

export default addItemCartSession;
