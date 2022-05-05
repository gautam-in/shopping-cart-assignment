import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { shorten } from '../utilities';

function ProductListMain({ categoryId = null }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const { REACT_APP_PRODUCTS_URL = 'http://localhost:5000/products' } = process.env;
    axios.get(REACT_APP_PRODUCTS_URL).then(response => {
      if(categoryId) {
        const products = response.data.filter(element => element.category === categoryId);
        setProducts(products);
      } else {
        setProducts(response.data);
      }
    }).catch(error => console.error(error));
  }, [categoryId]);

  const addToCart = (product) => {
    const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const productIndex = existingCart.findIndex(prod => prod.id === product.id);
    if (productIndex > -1) {
      existingCart[productIndex].qty = existingCart[productIndex].qty + 1;
    } else {
      product.qty = 1;
      existingCart.push(product);
    }
    sessionStorage.setItem('cart', JSON.stringify(existingCart));
    navigate('/cart');
  };

  if (products.length === 0) return null;

  return (
    <section className="product-list-main">
      {products.map((product) => {
        const { name, imageURL, description, price, id } = product;
        const desc = shorten(description, 150);
        return (
          <section className="product-box" key={id}>
            <h3>{name}</h3>
            <img
              src={imageURL}
              alt={name}
              className="hide-on-tablet hide-on-mobile"
            />
            <section className="product-container-mobile only-on-mobile">
              <img
                src={imageURL}
                alt={name}
                className="hide-on-tablet"
              />
              <section className="product-details-mobile">
                <p>
                  {desc}
                </p>
                <button onClick={() => addToCart(product)}>Buy Now @ MRP Rs.{price}</button>
              </section>
            </section>
            <p className="hide-on-tablet hide-on-mobile">
              {desc}
            </p>
            <section className="product-details-tablet hide-on-mobile">
              <img
                src={imageURL}
                alt={name}
              />
              <p>
                {desc}
              </p>
            </section>
            <div className="price-cta-section hide-on-mobile">
              <span className="hide-on-tablet">MRP Rs.{price}</span>
              <button className="hide-on-tablet" onClick={() => addToCart(product)}>Buy Now</button>
              <button className="hide-on-desktop" onClick={() => addToCart(product)}>Buy Now @ MRP Rs.{price}</button>
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default ProductListMain;
