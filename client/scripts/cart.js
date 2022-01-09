const cartActionButton = document.querySelector('.cart-shopping-action');
const cartActionButtonText = document.querySelector(
  '.cart-shopping-action > .cart-action-btn-text'
);
const cartTotalDiv = document.querySelector(
  '.cart-shopping-action > span.cart-total'
);
const cartMrpField = document.querySelector('.cart-total-price');

const cartActionButtonFlexClasses = [
  'd-flex',
  'align-items-center',
  'justify-content-between'
];
const emptyCartClasses = [
  'd-flex',
  'align-items-center',
  'justify-content-center'
];
const commonFlexClasses = ['d-flex', 'align-items-center'];
const controlButtonClasses = ['btn-qty', 'bg-theme', 'px-2'];

let prices = [];
let allProducts;

(async function() {
  allProducts = await axios
    .get('http://localhost:8000/' + 'products')
    .then(({ data }) => data);
})();

function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function setCart(cartItems) {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

function deleteCartItems() {
  const cartItemToDelete = document.querySelectorAll('.cart-item');
  const offcanvasBody = document.querySelector('.offcanvas-body');

  if (cartItemToDelete && cartItemToDelete.length) {
    for (let i = 0; i < cartItemToDelete.length; i++) {
      offcanvasBody.removeChild(cartItemToDelete[i]);
    }
  }
}

function updateCart() {
  const cart = getCart();
  deleteCartItems();
  const cartMsg = document.querySelector('.cart-msg');
  cartMsg.innerText = ((cart && cart.length) || 0) + ' Items';

  const cartTitle = document.querySelector('.offcanvas-title');
  cartTitle.innerText =
    'My Cart' + (cart && cart.length ? `(${cart.length} items)` : '');

  buildCart();
}

function buildCart() {
  const cart = getCart();
  const offcanvasBody = document.querySelector('.offcanvas-body');
  const offcanvasPromoText = document.querySelector('.offcanvas p.promo-text');

  if (cart && cart.length) {
    updateCartToProceed(false);

    offcanvasPromoText.classList.remove('d-none');
    offcanvasBody.classList.remove(...emptyCartClasses);
    const emptyCardDiv = document.querySelector('.offcanvas-body .text-center');

    if (!!emptyCardDiv) {
      offcanvasBody.removeChild(emptyCardDiv);
    }

    const lowestPrice = document.querySelector('.lowest-price-banner');
    if (lowestPrice) {
      offcanvasBody.removeChild(lowestPrice);
    }

    const isOnRootPath = location.pathname.includes('index.html');
    for (let i = 0; i < cart.length; i++) {
      const cartItem = document.createElement('div');

      const imagePath = isOnRootPath
        ? '.' + cart[i].imageURL
        : '..' + cart[i].imageURL;
      cartItem.classList.add('cart-item', 'row', 'my-4');
      cartItem.setAttribute('value', cart[i].id);
      offcanvasBody.appendChild(cartItem);

      const cartItemImg = document.createElement('div');
      cartItemImg.classList.add('col-4');
      const cartImg = document.createElement('img');
      cartImg.src = imagePath;
      cartImg.alt = cart[i].name;
      cartItemImg.appendChild(cartImg);

      cartItem.appendChild(cartItemImg);

      const cartItemInfoCol = document.createElement('div');
      cartItem.appendChild(cartItemInfoCol);
      cartItemInfoCol.classList.add('col-8');

      const cartItemName = document.createElement('p');
      cartItemName.classList.add('product-name');
      cartItemName.innerText = cart[i].name;
      cartItemInfoCol.appendChild(cartItemName);

      const cartControls = document.createElement('div');
      cartControls.classList.add(
        ...commonFlexClasses,
        'justify-content-between'
      );

      cartItemInfoCol.appendChild(cartControls);

      const cartControlButtons = document.createElement('div');
      cartControlButtons.classList.add(
        ...commonFlexClasses,
        'justify-content-around',
        'cart-card',
        'my-4'
      );

      cartControls.appendChild(cartControlButtons);
      const addButton = document.createElement('button');
      addButton.classList.add(...controlButtonClasses);
      addButton.innerText = '+';
      addButton.setAttribute('value', 'add');
      addButton.setAttribute('id', cart[i].id);

      const qtyInfo = document.createElement('span');
      qtyInfo.classList.add('qty');
      qtyInfo.innerText = cart[i].quantity;
      qtyInfo.setAttribute('value', cart[i].id);

      const subtractButton = document.createElement('button');
      subtractButton.classList.add(...controlButtonClasses);
      subtractButton.innerText = '-';
      subtractButton.setAttribute('value', 'sub');
      subtractButton.setAttribute('id', cart[i].id);

      const multiply = document.createElement('span');
      multiply.innerText = 'X';

      const mrp = document.createElement('span');
      mrp.classList.add('cart-mrp');
      mrp.innerText = cart[i].price;

      const itemTotal = document.createElement('span');
      itemTotal.classList.add('final-price');
      itemTotal.setAttribute('value', cart[i].id);
      itemTotal.innerText = 'Rs ' + parseInt(cart[i].quantity) * cart[i].price;

      cartControlButtons.appendChild(subtractButton);
      cartControlButtons.appendChild(qtyInfo);
      cartControlButtons.appendChild(addButton);
      cartControlButtons.appendChild(multiply);
      cartControlButtons.appendChild(mrp);
      cartControls.appendChild(itemTotal);
    }

    if (cartMrpField) {
      const allPrices = document.querySelectorAll('span.final-price');
      if (allPrices && allPrices.length) {
        prices = [];
        for (let i = 0; i < allPrices.length; i++) {
          prices = [...prices, parseInt(allPrices[i].innerHTML.split(' ')[1])];
        }

        cartMrpField.innerHTML = 'Rs ' + prices.reduce((a, b) => a + b, 0);
      }
    }
    const lowestPriceBanner = document.createElement('div');
    lowestPriceBanner.classList.add(
      'row',
      'align-items-center',
      'justify-content-between',
      'mx-2',
      'p-4',
      'lowest-price-banner',
      'bg-white'
    );

    const lowestPriceImageCol = document.createElement('div');
    lowestPriceImageCol.classList.add('col-3');
    const lowestPriceImage = document.createElement('img');
    lowestPriceImage.src = isOnRootPath
      ? './static/images/lowest-price.png'
      : '../static/images/lowest-price.png';
    lowestPriceImage.alt = 'lowest price banner';
    lowestPriceImage.classList.add('lowest-price-image');

    lowestPriceImageCol.appendChild(lowestPriceImage);

    const lowestPriceText = document.createElement('h3');
    lowestPriceText.innerText = `You won't find it cheaper anywhere`;
    lowestPriceText.classList.add('m-0', 'col-9');

    lowestPriceBanner.appendChild(lowestPriceImageCol);
    lowestPriceBanner.appendChild(lowestPriceText);

    offcanvasBody.appendChild(lowestPriceBanner);
  } else {
    offcanvasBody.classList.add(...emptyCartClasses);
    offcanvasPromoText.classList.add('d-none');

    const centerTextDiv = document.createElement('div');
    centerTextDiv.classList.add('text-center');
    const emptyCartTitle = document.createElement('h3');
    emptyCartTitle.classList.add('cart-empty-title');

    emptyCartTitle.innerText = 'No items in your cart';

    const emptyCartDescription = document.createElement('h4');
    emptyCartDescription.classList.add('cart-empty-msg');
    emptyCartDescription.innerText =
      ' Your favorite items are just a click away';

    updateCartToProceed(true);

    offcanvasBody.appendChild(centerTextDiv);
    centerTextDiv.appendChild(emptyCartTitle);
    centerTextDiv.appendChild(emptyCartDescription);

    const lowestPrice = document.querySelector('.lowest-price-banner');
    if (lowestPrice) {
      offcanvasBody.removeChild(lowestPrice);
    }
  }
  const quantityChangeButtons = document.querySelectorAll('.btn-qty');

  if (quantityChangeButtons && quantityChangeButtons.length) {
    for (let i = 0; i < quantityChangeButtons.length; i++) {
      quantityChangeButtons[i].addEventListener(
        'click',
        handleQuantityChange(quantityChangeButtons[i].getAttribute('id'))
      );
    }
  }
}

function handleQuantityChange(productId) {
  return async function(event) {
    const targetVal = event.target.value;
    const quantityInput = document.querySelector(`.qty[value="${productId}"]`);
    const cartItems = getCart();
    const quantity = parseInt(quantityInput.innerHTML);
    if (quantity === 1 && targetVal === 'sub') {
      const updatedProducts = cartItems.filter(item => item.id !== productId);
      setCart(updatedProducts);
      updateCart();
      return;
    }
    const updatedQuantity = targetVal === 'add' ? quantity + 1 : quantity - 1;
    quantityInput.innerHTML = updatedQuantity;
    const finalPrice = document.querySelector(
      `.final-price[value="${productId}"]`
    );

    const product = allProducts.find(({ id }) => id === productId);

    let cartItem = cartItems.find(({ id }) => id === productId);
    cartItem = { ...cartItem, quantity: updatedQuantity };
    let updatedCart = cartItems.filter(item => item.id !== productId);

    updatedCart = [...updatedCart, cartItem];
    setCart(updatedCart);
    updateCart();

    finalPrice.innerHTML =
      'Rs ' + parseInt(quantityInput.innerHTML) * product.price;

    updateCartToProceed(false);

    if (cartMrpField) {
      const allPrices = document.querySelectorAll('span.final-price');
      if (allPrices && allPrices.length) {
        prices = [];
        for (let i = 0; i < allPrices.length; i++) {
          prices = [...prices, parseInt(allPrices[i].innerHTML.split(' ')[1])];
        }

        cartMrpField.innerHTML = 'Rs ' + prices.reduce((a, b) => a + b, 0);
      }
    }
  };
}

function updateCartToProceed(markCartEmpty) {
  if (markCartEmpty) {
    if (cartActionButtonText) {
      cartActionButtonText.innerText = 'Start Shopping';
    }

    if (cartActionButton) {
      cartActionButton.classList.remove(...cartActionButtonFlexClasses);
    }

    if (cartTotalDiv) {
      cartTotalDiv.classList.add('d-none');
    }

    return;
  }

  if (cartActionButtonText) {
    cartActionButtonText.innerText = 'Proceed to checkout';
  }

  if (cartTotalDiv) {
    cartTotalDiv.classList.remove('d-none');
    cartTotalDiv.classList.add('d-inline');
  }

  if (cartActionButton) {
    cartActionButton.classList.add(...cartActionButtonFlexClasses);
  }
}
