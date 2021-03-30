import { map } from 'lodash';
import React from 'react';
import CustomSelect from '../Shared/CustomSelect';
import './ProductPage.scss';

const ProductPage = ({
  addToCart, categories, products, onCategoryChange, filteredCategory,
}) => (
  <section className="section-products">
    <div role="menu" className="product-categories">
      {
        map(categories, (category) => (

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
        ))
      }
    </div>
    <CustomSelect categories={categories} selected={filteredCategory} onSelect={onCategoryChange} />
    <div className="product-list">
      {
        map(products, (product) => (
          <div key={product.id} className="product-list__item">
            <h1 className="product-list__item--title">{product.name}</h1>
            <div className="product-list__item-description">
              <img className="product-list__item--image" src={product.imageURL} alt={product.description} />
              <div className="product-list__item--info">
                {/* <div> */}
                {product.description}
                {/* </div> */}
              </div>
              <button
                type="button"
                disabled={product.stock - product.count === 0}
                className="btn m-btn-buy"
                onClick={() => addToCart(product)}
              >
                {`Buy Now @ Rs.${product.price}`}
              </button>
            </div>
            <div className="product-list__item--action">
              <span className="product-list__item--action-mrp">
                {`MRP Rs.${product.price}`}
              </span>
              <button
                type="button"
                disabled={product.stock - product.count === 0}
                className="btn product-list__item--action-buy"
                onClick={() => addToCart(product)}
              >
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
