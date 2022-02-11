import React from 'react';
import './category.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CATEGORY_DATA from '../../server/categories/index.get.json';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Category = ({ history, match }) => {
  return (
    <div className="category-container">
      {CATEGORY_DATA.map((category) => (
        <div
          className="category"
          key={category.key}
          style={{ order: category.order }}
        >
          <img src={category.imageUrl} alt="" />
          <div className="content">
            <h1>{category.name}</h1>
            <p>{category.description}</p>
            <CustomButton
              onClick={() =>
                history.push(`${match.url}products/${category.id}`)
              }
            >
              Explore {category.key}
            </CustomButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withRouter(Category);
