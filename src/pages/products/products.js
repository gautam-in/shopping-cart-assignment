import '../../index.js';
import './product.scss';
import apiService from '../../Service/apiService';
import { createCartItems, updateCartItem } from '../../components/Cart/Cart.js';

window.addEventListener('DOMContentLoaded', () => createProductDeatils());

const createProductDeatils = () => {
  let container = document.createElement('section');
  container.setAttribute('class', 'container');

  let row = document.createElement('div');
  row.setAttribute('class', 'row');

  fetchCategory(row);

  container.append(row);

  let root = document.querySelector('#root');
  root.append(container);
};

const getSelectedCategoryId = () => {
  const params = window.location.search;
  const urlParams = new URLSearchParams(params);
  const categoryId = urlParams.get('categoryId');
  return categoryId;
};

const fetchCategory = (parentElement) => {
  apiService.fetchDeatils('categories', (response) => {
    if (response.length > 0) {
      createCategoryAccoridan(response, parentElement);
      fetchProducts(parentElement);
    }
  });
};

const fetchProducts = (parentElement) => {
  apiService.fetchDeatils('products', (response) => {
    if (response.length > 0) {
      createProduct(response, parentElement);
    }
  });
};

const createCategoryAccoridan = (categories, parentElement) => {
  categories = categories.sort((a, b) => a.order - b.order);
  let categoryBlock = document.createElement('div');
  categoryBlock.setAttribute('class', 'col-12 col-md-3 category');

  let categoryDropdown = document.createElement('select');
  categoryDropdown.setAttribute('class', 'catagory-dropdown');
  dropDownOptions('', 'All Products', categoryDropdown);

  for (const category of categories) {
    if (category.enabled) {
      let categoryItem = document.createElement('a');
      categoryItem.setAttribute('class', 'category__item');
      categoryItem.setAttribute(
        'href',
        `/products.html?categoryId=${category.id}`
      );
      categoryItem.innerHTML = category.name;

      //dropdown for mobile
      dropDownOptions(category.id, category.name, categoryDropdown);

      categoryBlock.append(categoryItem);
    }
  }
  categoryDropdown.addEventListener('change', (event) => {
    const id = event.target.value;
    window.location.href = id
      ? `/products.html?categoryId=${id}`
      : 'products.html';
  });
  parentElement.append(categoryBlock);
  parentElement.append(categoryDropdown);
};

const dropDownOptions = (id, name, parentElement) => {
  let dropdownOption = document.createElement('option');
  dropdownOption.setAttribute('value', id);
  dropdownOption.innerHTML = name;
  const categoryId = getSelectedCategoryId();
  if (categoryId === id) {
    dropdownOption.setAttribute('selected', 'selected');
  } else {
    dropdownOption.removeAttribute('selected');
  }

  parentElement.append(dropdownOption);
};

const createProduct = (products, parentElement) => {
  let productsBlock = document.createElement('div');
  productsBlock.setAttribute('class', 'col-12 col-md-9 products');
  productsBlock.setAttribute('id', 'products-block');

  let productRow = document.createElement('div');
  productRow.setAttribute('class', 'row');

  const categoryId = getSelectedCategoryId();
  products = categoryId
    ? products.filter((product) => product.category === categoryId)
    : products;

  for (const product of products) {
    let productCol = document.createElement('div');
    productCol.setAttribute('class', 'col-12 col-md-6 col-lg-3 ');

    let productCard = document.createElement('div');
    productCard.setAttribute('class', 'd-flex fdir-col product__card');

    let title = document.createElement('h4');
    title.setAttribute('class', 'product__title');
    title.innerHTML = product.name;

    let productBody = document.createElement('div');
    productBody.setAttribute('class', 'd-flex product__body');

    let productImage = document.createElement('img');
    productImage.setAttribute('class', 'product__image');
    productImage.setAttribute('src', product.imageURL);
    productImage.setAttribute('alt', product.sku);

    let productDescription = document.createElement('div');
    productDescription.setAttribute('class', 'product__description');
    productDescription.innerHTML = product.description;

    productBody.append(productImage, productDescription);

    let productCheckout = document.createElement('div');
    productCheckout.setAttribute('class', 'd-flex product__checkout');

    let productPrice = document.createElement('span');
    productPrice.setAttribute('class', 'product__price');
    productPrice.innerHTML = `MRP Rs.${product.price}`;

    let productButton = document.createElement('button');
    productButton.setAttribute('class', 'product__button');
    productButton.innerHTML = 'Buy Now';
    productButton.addEventListener('click', () => addProductToCart(product));

    let priceInsideButton = document.createElement('span');
    priceInsideButton.setAttribute('class', 'price__inside_button');
    priceInsideButton.innerHTML = ` @ Rs.${product.price}`;

    productButton.append(priceInsideButton);

    productCheckout.append(productPrice, productButton);

    productCard.append(title, productBody, productCheckout);

    productCol.append(productCard);
    productRow.append(productCol);
  }

  productsBlock.append(productRow);

  parentElement.append(productsBlock);
};

const addProductToCart = (product) => {
  const oldCartItems = JSON.parse(window.localStorage.getItem('cart'));
  let newCartItems = [];

  const noOfCartItem = document.querySelector('#items_in_cart');
  const noOfItems = document.querySelector('#no_of_items');
  const cartBody = document.querySelector('#cart-items-block');

  if (oldCartItems) {
    const itemIndex = oldCartItems.findIndex((item) => {
      if (item.id === product.id) {
        return true;
      }
    });
    if (itemIndex !== -1) {
      oldCartItems[itemIndex].quantityOrdered++;
      newCartItems = oldCartItems;
      updateCartItem(oldCartItems[itemIndex]);
    } else {
      product.quantityOrdered = 1;
      newCartItems = [...oldCartItems, product];
      createCartItems(product, cartBody);
    }
    noOfCartItem.innerHTML = `${newCartItems.length} items`;
    noOfItems.innerHTML = `(${newCartItems.length} items)`;
  } else {
    product.quantityOrdered = 1;
    newCartItems = [product];
    noOfCartItem.innerHTML = '1 items';
    noOfItems.innerHTML = '(1 items)';
    createCartItems(product, cartBody);
  }

  window.localStorage.setItem('cart', JSON.stringify(newCartItems));
};
