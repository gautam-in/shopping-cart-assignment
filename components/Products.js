/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-nested-ternary */
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useEffect, useState, Suspense } from 'react';
import { useAppData } from '../lib/store';
import { BACKEND_URL } from '../config';
import RequestsHandler from '../lib/requestHandler';
import {
  ProductSideBarDesktopStyle,
  ProductsStyle,
  SingleProductStyle,
} from './styles/ProductStyle';
import { DropdownStyle } from './styles/InputStyle';
import { ButtonStyle } from './styles/GlobalStyles';

export default function Products() {
  const contextData = useAppData();
  const [filter, setFilter] = useState(undefined);
  const { categories, products } = contextData?.data;
  const { addToCart } = contextData;

  function filterHandler(e) {
    // handling for dropdown list
    let categoryId;
    if (e.target.options) {
      categoryId = e.target.options[e.target.selectedIndex].id;
      setFilter(categoryId);
      return;
    }
    // handling for list
    categoryId = e.target.id;
    if (categoryId === filter) {
      setFilter(undefined);
      return;
    }
    setFilter(categoryId);
  }

  useEffect(() => {
    if (categories.length === 0) {
      RequestsHandler.getData(`${BACKEND_URL}categories/`).then((res) => {
        contextData.setData({ ...contextData.data, categories: res });
        console.log(res);
      });
    }
    if (products.length === 0) {
      RequestsHandler.getData(`${BACKEND_URL}products/`).then((res) => {
        contextData.setData({ ...contextData.data, products: res });
      });
    }
  }, [categories, products]);

  return (
    <ProductsStyle>
      <Head>
        <title>
          {products.length} Products - Sabka Bazaar Online Grocery Store{' '}
        </title>
      </Head>
      {/* Side Bar & dropdown */}
      <aside id="sidebar">
        {/* Dropdown for mobile */}
        <DropdownStyle id="dropdown">
          <select onChange={filterHandler}>
            <option>--Select Filter--</option>
            {categories.map((category, index) => (
              <option
                id={category.id}
                className={filter === category.id ? 'active' : ''}
                aria-label={category.name}
                key={index}
                value={category.key}
              >
                {category.name}
              </option>
            ))}
          </select>
          <div className="select_arrow" />
        </DropdownStyle>
        {/* Side bar for Desktop */}
        <ProductSideBarDesktopStyle>
          <ul>
            {categories?.map((category) => (
              <li
                onClick={filterHandler}
                onKeyPress={filterHandler}
                key={category.id}
                id={category.id}
                className={filter === category.id ? 'active' : ''}
                aria-label={category.name}
                role="button"
                tabIndex="0"
              >
                {category.name}
              </li>
            ))}
          </ul>
        </ProductSideBarDesktopStyle>
      </aside>
      {/* Product Listing - filtering performed here */}
      <div id="products">
        {/* Filtering
         1. if there is not product belongs to categroy then <p>..
         2. If the filter has category then all product with filter category filtered out
         3. if filter is undefined then show all the products
        */}
        {filter ? (
          products.filter((item) => filter === item.category).length === 0 ? (
            <p>No Products found</p>
          ) : (
            products
              .filter((item) => filter === item.category)
              .map((product) => (
                <SingleProduct
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))
          )
        ) : (
          products.map((product) => (
            <SingleProduct
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
    </ProductsStyle>
  );
}

function SingleProduct({ product, addToCart }) {
  // addToCart request
  function addToCartRequest() {
    RequestsHandler.postData(`${BACKEND_URL}/addToCart`, {
      id: product.id,
    }).then((res) => {
      if (res.response === 'Success') {
        addToCart(product);
      }
    });
  }
  return (
    <SingleProductStyle tabIndex="0">
      <h2>{product.name}</h2>
      <div>
        <Suspense fallback={<p>loading...</p>}>
          <img src={product.imageURL} alt={product.name} />
        </Suspense>
        <div>
          <p>{product.description}</p>
          <ButtonStyle onClick={addToCartRequest}>
            Buy Now @ MRP Rs.{product?.price}
          </ButtonStyle>
        </div>
      </div>
      <div className="button-group-desktop">
        <span> MRP Rs.{product.price} </span>
        <ButtonStyle onClick={addToCartRequest} id="button-tablet">
          Buy Now @ MRP Rs.{product.price}
        </ButtonStyle>
        <ButtonStyle onClick={addToCartRequest} id="button-desktop">
          Buy Now{' '}
        </ButtonStyle>
      </div>
    </SingleProductStyle>
  );
}

SingleProduct.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
};
