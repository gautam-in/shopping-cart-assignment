import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductListNavMobile({ categories = [] }) {
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    navigate(`/products/${e.target.value}`);
  }
  return (
    <select className="product-list-nav-mobile" onChange={handleCategoryChange}>
      {categories.map(category => <option value={category.name.toLowerCase().replaceAll(" ", "-")} key={category.id} >{category.name}</option>)}
    </select>
  );
}

export default ProductListNavMobile;
