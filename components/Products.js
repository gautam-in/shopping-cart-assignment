/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
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
  // todo change this categories Data for flatten values values
  // const categoriesData = categories?.join('');
  // RequestsHandler.postData('http://localhost:5000/addToCart', {
  //   id: '1234211',
  // });

  function filterHandler(e) {
    // on Enter Key Press - to do
    // if (e.key === 'Enter') {
    //   console.log('enter press here! ');
    // }

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
      RequestsHandler.getData(`${BACKEND_URL}categories/`, {
        name: 'categories',
        setData: contextData.setData,
        state: contextData,
      });
    }
    if (products.length === 0) {
      RequestsHandler.getData(`${BACKEND_URL}products/`, {
        name: 'products',
        setData: contextData.setData,
        state: contextData,
      });
    }
  }, [categories.length, contextData.setData, products.length]);

  return (
    <ProductsStyle>
      {/* Side Bar & dropdown */}
      <aside id="sidebar">
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
        {filter ? (
          products.filter((item) => filter === item.category).length === 0 ? (
            <p>No Products found</p>
          ) : (
            products
              .filter((item) => filter === item.category)
              .map((product) => (
                <SingleProduct key={product.id} product={product} />
              ))
          )
        ) : (
          products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))
        )}
      </div>
    </ProductsStyle>
  );
}

function SingleProduct({ product }) {
  return (
    <SingleProductStyle>
      <h2>{product.name}</h2>
      <div>
        <img src={product.imageURL} alt={product.name} />
        <div>
          <p>{product.description}</p>
          <ButtonStyle>Buy Now @ MRP Rs.{product?.price}</ButtonStyle>
        </div>
      </div>
      <div className="button-group-desktop">
        <span> MRP Rs.{product.price} </span>
        <ButtonStyle id="button-tablet">
          Buy Now @ MRP Rs.{product.price}
        </ButtonStyle>
        <ButtonStyle id="button-desktop">Buy Now </ButtonStyle>
      </div>
    </SingleProductStyle>
  );
}
