import React from 'react';
import { Link } from 'react-router-dom';

import { useCategory } from '../../hooks/useCategory';

import './CategoryCard.scss';

const CategoryCard = ({data}) => {
  const {name, id, description, key, imageUrl} = data;

  const {setActiveCategory} = useCategory();

  const clickHandler = (id) => {
    setActiveCategory(id);
  };

  return (
    <div className='category-card'>
      <div className='card-img'>
        <img src={imageUrl} alt={key} />
      </div>
      <div className='card-content'>
        <div className='card-title'>{name}</div>
        <div className='card-desc'>{description}</div>
        <Link to='/store' onClick={() => clickHandler(id)}>
          <button className='button-primary'>{`Explore ${key}`}</button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;