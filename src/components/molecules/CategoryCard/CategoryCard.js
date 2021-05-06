import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../../atoms/Image';
import './CategoryCard.scss';

const CategoryCard = ({ category }) => {
  const { id, name, imageUrl, description, key } = category;

  return (
    <li className='card-wrap'>
      <figure className='image-wrap'>
        <Image name={`category/${imageUrl}`} alt={name} />
      </figure>
      <figcaption className='text-wrap'>
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
      </figcaption>
    </li>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired
};

export default CategoryCard;
