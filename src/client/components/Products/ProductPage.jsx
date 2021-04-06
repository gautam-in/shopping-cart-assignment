import { map } from 'lodash';
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './ProductPage.scss';

import ProductItem from './ProductItem';
import CategoryItem from './CategoryItem';
import CustomSelect from '../Shared/CustomSelect';

const ProductPage = ({
  addToCart, categories, products, onCategoryChange, filteredCategory,
}) => (
  <section className="section-products">
    <div role="menu" className="product-categories">
      {
        map(categories, (category) => (
          <CategoryItem
            key={category.key}
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
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))
      }
    </div>
  </section>
);

export default withStyles(styles)(ProductPage);
