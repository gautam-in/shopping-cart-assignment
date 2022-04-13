import './Cart.scss';
import { CloseModal } from '../Modal/Modal';

var totalPrice = 0;

const createCart = () => {
  const cartItems = JSON.parse(window.localStorage.getItem('cart'));

  let modalContent = document.querySelector('#modal-content');
  modalContent.setAttribute('class', 'cart__content');

  let cartHeader = document.createElement('header');
  cartHeader.setAttribute('class', 'd-flex cart__header');

  let carttitle = document.createElement('h2');
  carttitle.setAttribute('class', 'cart__title');
  carttitle.innerHTML = 'My Cart';

  let noOfItems = document.createElement('p');
  noOfItems.setAttribute('class', 'no__of__items');
  noOfItems.setAttribute('id', 'no_of_items');
  noOfItems.innerHTML = `(${cartItems ? cartItems.length : 0} items)`;

  let closeIcon = document.createElement('span');
  closeIcon.setAttribute('class', 'close__icon');
  closeIcon.innerHTML = '&#x2715';
  closeIcon.addEventListener('click', () => CloseModal());

  cartHeader.append(carttitle, noOfItems, closeIcon);

  let cartBody = document.createElement('section');
  cartBody.setAttribute('class', 'cart__body');
  cartBody.setAttribute('id', 'cart-body');

  let cartItemsBlock = document.createElement('div');
  cartItemsBlock.setAttribute('id', 'cart-items-block');

  if (cartItems) {
    for (const item of cartItems) {
      createCartItems(item, cartItemsBlock);
    }
  }

  let promoCard = document.createElement('div');
  promoCard.setAttribute('class', 'd-flex cart__promo__card');

  let promoCardImage = document.createElement('img');
  promoCardImage.setAttribute('src', '/static/images/lowest-price.png');
  promoCardImage.setAttribute('alt', 'Lowest Price');

  let promoCardtitle = document.createElement('p');
  promoCardtitle.setAttribute('class', 'cart__promo__card__title');
  promoCardtitle.innerHTML = "You won't find it cheaper anywhere";

  promoCard.append(promoCardImage, promoCardtitle);

  cartBody.append(cartItemsBlock, promoCard);

  let cartCheckout = document.createElement('div');
  cartCheckout.setAttribute('class', 'cart__checkout');

  let cartCheckoutTitle = document.createElement('p');
  cartCheckoutTitle.setAttribute('class', 'cart__checkout__title');
  cartCheckoutTitle.innerHTML = 'Promo code can be applied on payment page';

  let cartCheckoutButton = document.createElement('button');
  cartCheckoutButton.setAttribute('class', 'd-flex cart__checkout__button');

  let buttonTitle = document.createElement('p');
  buttonTitle.setAttribute('class', 'cart__button__title');
  buttonTitle.innerHTML = 'Proceed to Checkout';

  let cartPrice = document.createElement('p');
  cartPrice.setAttribute('class', 'cart__button__price');
  cartPrice.setAttribute('id', 'cart-price');
  cartPrice.innerHTML = `Rs.${totalPrice}`;

  cartCheckoutButton.append(buttonTitle, cartPrice);
  cartCheckout.append(cartCheckoutTitle, cartCheckoutButton);
  modalContent.append(cartHeader, cartBody, cartCheckout);
};

export const createCartItems = (item, cartBody) => {
  let itemCard = document.createElement('div');
  itemCard.setAttribute('class', 'd-flex cart__item__card');
  itemCard.setAttribute('id', item.id);

  let itemImage = document.createElement('img');
  itemImage.setAttribute('class', 'cart__item__image');
  itemImage.setAttribute('src', item.imageURL);
  itemImage.setAttribute('alt', item.name);

  let itemCardBody = document.createElement('div');
  itemCardBody.setAttribute('class', 'cart__item__body');

  let itemTitle = document.createElement('h4');
  itemTitle.setAttribute('class', 'cart__item__title');
  itemTitle.innerHTML = item.name;

  let itemPriceBlock = document.createElement('div');
  itemPriceBlock.setAttribute('class', 'd-flex cart__item__price__block');

  let priceBlock = document.createElement('div');

  let decrementButton = document.createElement('button');
  decrementButton.setAttribute('class', 'decrement');
  decrementButton.innerHTML = '&#8722;';
  decrementButton.addEventListener('click', () =>
    decrease(item, totalItems, totalItemPrice)
  );

  let totalItems = document.createElement('input');
  totalItems.setAttribute('class', 'items__input');
  totalItems.setAttribute('value', item.quantityOrdered);
  totalItems.setAttribute('min', 1);
  totalItems.setAttribute('type', 'number');
  totalItems.addEventListener('change', () =>
    valueChange(item, totalItems, totalItemPrice)
  );

  let incrementButton = document.createElement('button');
  incrementButton.setAttribute('class', 'increment');
  incrementButton.innerHTML = '&#43;';
  incrementButton.addEventListener('click', () =>
    increase(item, totalItems, totalItemPrice)
  );

  let itemPrice = document.createElement('span');
  itemPrice.setAttribute('class', 'item__price');
  itemPrice.innerHTML = ` &#215;  Rs.${item.price}`;
  priceBlock.append(decrementButton, totalItems, incrementButton, itemPrice);

  totalPrice += item.quantityOrdered * item.price;

  let totalItemPrice = document.createElement('span');
  totalItemPrice.setAttribute('class', 'cart__item__price');
  totalItemPrice.innerHTML = `Rs.${item.quantityOrdered * item.price}`;

  itemPriceBlock.append(priceBlock, totalItemPrice);

  itemCardBody.append(itemTitle, itemPriceBlock);

  itemCard.append(itemImage, itemCardBody);

  cartBody.append(itemCard);

  let totalPriceElement = document.querySelector('#cart-price');

  if (totalPriceElement) {
    totalPriceElement.innerHTML = `Rs.${totalPrice}`;
  }
};

export const updateCartItem = (product) => {
  const item = document.querySelector(`[id="${product.id}"]`);
  let inputElement = item.querySelector('.items__input');
  let itemTotalPrice = item.querySelector('.cart__item__price');
  increase(product, inputElement, itemTotalPrice);
  inputElement.value = product.quantityOrdered;
};

const decrease = (item, noOfItemelement, itemPriceElement) => {
  let noOfItems = noOfItemelement.value;
  const oldTotalItemPrice = noOfItems * item.price;
  if (noOfItems > 1) {
    noOfItems--;
    noOfItemelement.value = noOfItems;
  }
  updateTotalPrice(noOfItems, item, oldTotalItemPrice, itemPriceElement);
};

const increase = (item, noOfItemelement, itemPriceElement) => {
  let noOfItems = noOfItemelement.value;
  const oldTotalItemPrice = noOfItems * item.price;
  if (noOfItems < 100) {
    noOfItems++;
    noOfItemelement.value = noOfItems;
  }
  updateTotalPrice(noOfItems, item, oldTotalItemPrice, itemPriceElement);
};

const valueChange = (item, noOfItemelement, itemPriceElement) => {
  console.log('calue change');
  let noOfItems = noOfItemelement.value;
  const oldTotalItemPrice = noOfItems * item.price;
  if (noOfItems == undefined || isNaN(noOfItems) == true || noOfItems <= 0) {
    noOfItemelement.value = 1;
  } else if (noOfItems >= 101) {
    noOfItemelement.value = 100;
  }
  updateTotalPrice(noOfItems, item, oldTotalItemPrice, itemPriceElement);
};

const updateTotalPrice = (
  noOfItems,
  item,
  oldTotalItemPrice,
  itemPriceElement
) => {
  let totalCartPrice = document.querySelector('#cart-price');
  const newTotalItemPrice = noOfItems * item.price;
  itemPriceElement.innerHTML = `Rs.${newTotalItemPrice}`;
  totalPrice = totalPrice - oldTotalItemPrice + newTotalItemPrice;
  totalCartPrice.innerHTML = `Rs.${totalPrice}`;
  updateLocaleStorage(item, noOfItems);
};

const updateLocaleStorage = (product, quantityOrdered) => {
  const oldCartItems = JSON.parse(window.localStorage.getItem('cart'));
  let newCartItems = [];
  const itemIndex = oldCartItems.findIndex((item) => {
    if (item.id === product.id) {
      return true;
    }
  });
  oldCartItems[itemIndex].quantityOrdered = quantityOrdered;
  newCartItems = oldCartItems;

  window.localStorage.setItem('cart', JSON.stringify(newCartItems));
};

export default createCart;
