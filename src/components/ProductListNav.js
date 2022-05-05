import React from 'react';
import { Link } from 'react-router-dom';

function ProductListNav({ categories = [] }) {
  if (categories.length === 0) return null;
  return (
    <ul className="product-list-nav">
      {categories.map(category => {
        return (
          <li key={category.id}>
            <Link to={`/products/${category.name.toLowerCase().replaceAll(' ', '-')}`} className="product-category">{category.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductListNav;
