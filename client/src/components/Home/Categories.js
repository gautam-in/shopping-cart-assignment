// react
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

/**
 * @name Categories
 * @param {categoriesData} param0
 * @returns JSX for Categories Section
 */
const Categories = ({ categoriesData }) => {
  const navigate = useNavigate();

  return (
    <div className="categories">
      {categoriesData?.map((category, index) => {
        const { id, name, description, key, imageUrl } = category;
        return (
          <div
            key={id}
            className={(index + 1) % 2 === 0 ? 'category img-left' : 'category img-right'}>
            <div className="category__body">
              <h2 className="category__body__name">{name}</h2>
              <p className="category__body__description">{description}</p>
              <button
                className="category__body__button"
                onClick={() => navigate(`/products/${name}`)}>{`Explore ${key}`}</button>
            </div>

            <div className="category__image">
              <img src={imageUrl} alt={name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

Categories.propTypes = {
  categoriesData: PropTypes.array
};

export default Categories;
