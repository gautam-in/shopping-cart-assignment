import { map } from 'lodash';
import React from 'react';
import './ProductPage.scss';

const ProductPage = ({
  categories, products, onCategoryChange, filteredCategory,
}) => (
  <section className="section-products">
    <div role="menu" className="product-categories">
      {
        map(categories, (category) => (
          category.order > -1
            && (
              <button
                type="button"
                tabIndex={0}
                role="menuitem"
                key={category.key}
                className={`product-categories__item${filteredCategory === category.id ? ' active' : ''}`}
                onClick={() => onCategoryChange(category.id, filteredCategory)}
              >
                {category.name}
              </button>
            )
        ))
      }
    </div>
    <div className="product-list">
      {
        map(products, (product) => (
          <div key={product.id} className="product-list__item">
            <h1 className="product-list__item--title">{product.name}</h1>

            <img className="product-list__item--image" src={product.imageURL} alt={product.description} />
            <div className="product-list__item--info">
              {product.description}
            </div>
            <div className="product-list__item--action">
              <span className="product-list__item--action-mrp">
                {`MRP Rs.${product.price}`}
              </span>
              <button type="button" className="btn product-list__item--action-buy">
                Buy Now
              </button>
            </div>
          </div>
        ))
      }
    </div>
  </section>
);

export default ProductPage;
