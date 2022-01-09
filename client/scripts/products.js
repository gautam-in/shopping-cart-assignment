const BASE_URL = 'http://localhost:8000/';

const commonProductActionClasses = [
  'product-buy',
  'w-100',
  'bg-theme',
  'border-0'
];
let products;

const getProducts = async () => {
  products = await axios.get(BASE_URL + 'products').then(({ data }) => data);
  const productsDiv = document.querySelector('.products');

  const length = products.length;
  for (let i = 0; i < length; i++) {
    const productCard = document.createElement('div');
    productCard.classList.add(
      'product-card',
      'col-md-6',
      'col-lg-3',
      'pb-3',
      'd-md-flex',
      'flex-md-column',
      'justify-content-between'
    );
    productsDiv.appendChild(productCard);

    const productNameRow = document.createElement('div');
    productNameRow.classList.add('row');
    const productName = document.createElement('p');
    productName.classList.add('product-name', 'col');
    productName.innerText = products[i].name;
    productNameRow.appendChild(productName);
    productCard.appendChild(productNameRow);

    const productDetailsRow = document.createElement('div');
    productDetailsRow.classList.add('row', 'p-2');
    productCard.appendChild(productDetailsRow);

    const productDetails = document.createElement('div');
    productDetails.classList.add(
      'product-details',
      'col-lg-12',
      'col-6',
      'overflow-hidden',
      'justify-content-evenly'
    );
    productDetailsRow.appendChild(productDetails);
    const productImg = document.createElement('img');
    productImg.src = `..${products[i].imageURL}`;
    productImg.alt = products[i].name;
    productDetails.appendChild(productImg);

    const productDescriptionDiv = document.createElement('div');
    productDescriptionDiv.classList.add(
      'col-6',
      'col-lg-12',
      'd-flex',
      'flex-column',
      'd-md-block',
      'justify-content-around'
    );

    productDetailsRow.appendChild(productDescriptionDiv);

    const productDescription = document.createElement('p');
    productDescription.innerText = products[i].description;
    productDescription.classList.add(
      'product-description',
      'bg-gray',
      'mt-2',
      'p-2'
    );

    productDescriptionDiv.appendChild(productDescription);

    const productActionTablet = document.createElement('button');
    productActionTablet.classList.add(
      ...commonProductActionClasses,
      'd-md-none'
    );
    productActionTablet.innerText = 'Buy Now @ ' + products[i].price;
    productActionTablet.value = products[i].id;
    productActionTablet.addEventListener('click', addToCart);
    productDescriptionDiv.appendChild(productActionTablet);

    const productActionsRow = document.createElement('div');
    productActionsRow.classList.add(
      'row',
      'mt-2',
      'd-none',
      'd-md-flex',
      'align-items-center',
      'justify-content-center'
    );

    const productPrice = document.createElement('p');
    productPrice.classList.add(
      'd-none',
      'd-lg-block',
      'col-6',
      'px-4',
      'py-2',
      'm-0',
      'product-price'
    );
    productPrice.innerText = 'MRP ' + products[i].price;

    productActionsRow.appendChild(productPrice);

    const productActionButtonsCol = document.createElement('div');
    productActionButtonsCol.classList.add('col-md-12', 'col-lg-6');
    productActionsRow.appendChild(productActionButtonsCol);

    const productBuyDesktop = document.createElement('button');

    productBuyDesktop.addEventListener('click', addToCart);
    productBuyDesktop.classList.add(
      'd-none',
      'd-lg-inline-block',
      'py-2',
      ...commonProductActionClasses
    );

    productCard.appendChild(productActionsRow);

    productBuyDesktop.innerText = 'Buy Now';
    productBuyDesktop.value = products[i].id;

    productActionButtonsCol.appendChild(productBuyDesktop);

    const productBuyMobile = document.createElement('button');
    productBuyMobile.value = products[i].id;
    productBuyMobile.addEventListener('click', addToCart);

    productBuyMobile.classList.add(
      'd-none',
      'd-md-inline-block',
      'd-lg-none',
      'py-2',
      ...commonProductActionClasses
    );

    productBuyMobile.innerText = 'Buy Now @ ' + products[i].price;

    productActionButtonsCol.appendChild(productBuyMobile);
  }
  updateCart();
};

getProducts();

const addToCart = event => {
  const productId = event.target.value;
  let cartProducts = getCart();

  if (cartProducts.length > 0) {
    let productExists = cartProducts.find(product => product.id === productId);
    if (!!productExists) {
      const filteredProducts = cartProducts.filter(
        ({ id }) => id !== productId
      );

      cartProducts = [
        ...filteredProducts,
        {
          ...productExists,
          quantity: productExists.quantity + 1
        }
      ];
      setCart(cartProducts);
      updateCart();
      return;
    }
  }

  let product = products.find(({ id }) => id === productId);
  cartProducts = [...cartProducts, { ...product, quantity: 1 }];
  setCart(cartProducts);
  updateCart();
  return;
};
