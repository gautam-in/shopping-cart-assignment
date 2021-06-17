import React, { useEffect, useState } from 'react';
import '../Styles/product.css';

export default function () {
  let [products, setProducts] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [categoryId, setCategoryId] = useState(window.location.hash.substring(1));
  let [categories, setCategories] = useState(null);

  function categoryChange(category) {
    setCategoryId(category);
    window.location.hash = category;
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

  if (loading) return <div>Loading...</div>;
  else if (error) return <div>Error Occured! Please try again</div>;
  else {
    let filteredProducts = categoryId
      ? products.filter((_) => _.category == categoryId)
      : products;
    return (
      <div className="product-page">
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
                onClick={() => categoryChange(_.id)}
              >
                {_.name}
              </li>
            ))}
        </ul>
        <select
          value={categoryId}
          onChange={(e) => categoryChange(e.target.value)}
          className="category-dropdown"
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
      </div>
    );
  }
}

function Product({ item }) {
  return (
    <div className="product-card">
      <div className="product-title">{item.name}</div>
      <div className="product-details">
        <img className="product-image" src={item.imageURL} alt={item.name} />
        <div className="product-description">{item.description}</div>
      </div>
      <div className="price-details">
        <div className="mrp">MRP Rs {item.price}</div>
        <button className="buy-button">
          Buy Now <span className="buy-now-price"> @ {item.price}</span>
        </button>
      </div>
    </div>
  );
}
