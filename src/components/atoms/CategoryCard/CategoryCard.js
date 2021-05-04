import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './CategoryCard.scss';

const CategoryCard = React.memo(({ category }) => {
  const { id, name, imageUrl, description, key } = category;
  return (
    <li className='card-wrap'>
      <div className='image-wrap'>
        <img
          loading='lazy'
          src={require(`../../../../static/images/category/${imageUrl}`).default}
          alt={name}
          width='100%'
        />
      </div>
      <div className='text-wrap'>
        <h1>{name}</h1>
        <p>{description}</p>
        <Link
          className='explore-btn'
          to={{
            pathname: '/products',
            state: { id }
          }}
        >
          Explore {key}
        </Link>
      </div>
    </li>
  );
});

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired
};
export default CategoryCard;
