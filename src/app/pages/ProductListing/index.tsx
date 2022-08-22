/**
 *
 *
 *
 */

import React, { memo, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { CustomContainer } from 'app/components/Container';
import { ProductItem } from 'app/components/ProductItem';
import { ProductListingStyle  } from 'styles/product-listing-styles';
import map from 'lodash/map';
import { useProductListingSlice } from './slice';
import {
  selectProductListingLoading,
  selectProductListingCategories,
  selectProductListingProducts,
} from './selectors';


interface Props {}

export const ProductListing = memo((props: Props) => {
  const { actions } = useProductListingSlice();
  const dispatch = useDispatch();
  const categoriesList = useSelector(selectProductListingCategories);
  const productsList = useSelector(selectProductListingProducts);
  const loading = useSelector(selectProductListingLoading);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const getData = useCallback(
    () => dispatch(actions.getData()),
    [actions, dispatch],
  );

  useEffect(() => {
    getData();
  }, [getData]);

  const changeCategory = event => {
    const { value } = event.target;
    console.log(value);
  };

  const setResetCategory = id => {};

  return (
    <div>
      <Helmet>
        <title>ProductListing</title>
        <meta
          name="description"
          content="A Boilerplate application ProductListing"
        />
      </Helmet>
      <CustomContainer>
        <div className="products-main">
          <select
            name="SelectCategory"
            id="category-selection-dropdown"
            onChange={changeCategory}
            value={'default'}
          >
            <option value="default" disabled>
              Select Category
            </option>
            {map(categoriesList, category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="products-container">
            <aside className="product-category-selection">
              <nav>
                <ul>
                  {map(categoriesList, item => (
                    <li key={item.id}>
                      <a
                        className={selectedCategory === item.id ? 'active' : ''}
                        key={item.id}
                        onClick={() => setResetCategory(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <article className="products-list">
              <div className="product-list-container">
                {map(productsList, val => (
                  <ProductItem key={val.id} {...val}></ProductItem>
                ))}
              </div>
            </article>
          </div>
        </div>
      </CustomContainer>
      <ProductListingStyle />
    </div>
  );
});
