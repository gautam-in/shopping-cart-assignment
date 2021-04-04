import { map } from 'lodash';
import React from 'react';
import ProductItem from './ProductItem';
import CustomSelect from '../Shared/CustomSelect';
import './ProductPage.scss';
import CategoryItem from './CategoryItem';

const ProductPage = ({
  addToCart, categories, products, onCategoryChange, filteredCategory,
}) => (
  <section className="section-products">
    <div role="menu" className="product-categories">
      {
        map(categories, (category) => (
          <CategoryItem
            category={category}
            filteredCategory={filteredCategory}
            onCategoryChange={onCategoryChange}
          />
        ))
      }
    </div>
    <CustomSelect categories={categories} selected={filteredCategory} onSelect={onCategoryChange} />
    <div className="product-list">
      {
        map(products, (product) => (
          <ProductItem product={product} addToCart={addToCart} />
        ))
      }
    </div>
  </section>
);

export default ProductPage;
