import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../Styles/product.css';
import CartContext from '../CartContext';

export default function () {
  let history = useHistory();
  let [products, setProducts] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [categories, setCategories] = useState(null);
  let { categoryId } = useParams();
  let cart = sessionStorage.getItem('cart');

  function categoryChange(category) {
    history.replace('/products/' + category);
  }

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((er) => {
        setError(er);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((er) => {
        setError(er);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  else if (error) return <p>Error Occured! Please try again</p>;
  else {
    let filteredProducts = categoryId
      ? products.filter((_) => _.category == categoryId)
      : products;

    return (
      <section className="product-page">
        <ul className="product-category-list">
          {categories &&
            categories.map((_) => (
              <li
                className={
                  categoryId == _.id
                    ? 'product-category active'
                    : 'product-category'
                }
                key={_.id}
              >
                <button onClick={() => categoryChange(_.id)}>{_.name}</button>
              </li>
            ))}
        </ul>
        <select
          value={categoryId}
          onChange={(e) => categoryChange(e.target.value)}
          className="category-dropdown maroon-button"
        >
          <option value="" disabled>
            ---Select Category---
          </option>
          {categories &&
            categories.map((_) => (
              <option value={_.id} key={_.id}>
                {_.name}
              </option>
            ))}
        </select>
        <ul className="product-list">
          {products &&
            filteredProducts.map((_) => <Product item={_} key={_.id} />)}
        </ul>
      </section>
    );
  }
}

function Product({ item }) {
  const { cart, setCart } = useContext(CartContext);

  function addItem() {
    let newCart = [...cart];
    let cartItem = cart.findIndex((_) => _.item.id == item.id);
    if (cartItem >= 0) {
      newCart[cartItem] = {
        ...newCart[cartItem],
        qty: newCart[cartItem].qty + 1,
      };
    } else {
      newCart.push({ item: item, qty: 1 });
    }
    setCart(newCart);
  }

  return (
    <li className="product-card">
      <h2 className="product-title">{item.name}</h2>
      <article className="product-details">
        <img className="product-image" src={item.imageURL} alt={item.name} />
        <p className="product-description">{item.description}</p>
      </article>
      <article className="price-details">
        <p className="mrp">MRP Rs {item.price}</p>
        <button className="buy-button maroon-button" onClick={addItem}>
          Buy Now <span className="visually-hidden">{item.name}</span>{' '}
          <span className="buy-now-price"> @ {item.price}</span>
        </button>
      </article>
    </li>
  );
}
