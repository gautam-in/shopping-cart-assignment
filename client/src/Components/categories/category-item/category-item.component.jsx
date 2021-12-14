import React from "react";
import { useNavigate } from "react-router-dom";

import "./categories-item.styles.css";

const CategoryItem = ({ category, left }) => {
  const navigate = useNavigate();
  return left ? (
    <div className='category'>
      <div className='category-description'>
        <div className='item-name'>{category.name}</div>
        <div className='item-detail'>{category.description}</div>
        <button
          onClick={() => navigate(`/products/${category.id}`)}
          className='category-button'
        >
          Explore {category.name}
        </button>
      </div>
      <div className='category-image'>
        <img src={category.imageUrl} alt={category.description} />
      </div>
    </div>
  ) : (
    <div className='category'>
      <div className='category-image'>
        <img src={category.imageUrl} alt={category.description} />
      </div>
      <div className='category-description'>
        <div className='item-name'>{category.name}</div>
        <div className='item-detail'>{category.description}</div>
        <button
          onClick={() => navigate(`/products/${category.id}`)}
          className='category-button'
        >
          Explore {category.name}
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
