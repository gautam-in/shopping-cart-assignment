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
import { ProductListingStyle } from 'styles/product-listing-styles';
import renderProducts from 'utils/renderProductList';

import map from 'lodash/map';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import { useProductListingSlice } from './slice';
import {
  selectProductListingCategories,
  selectProductListingProducts,
} from './selectors';

interface Props {
  match: {
    params: object;
  };
}

export const ProductListing = memo((props: Props) => {
  const { match } = props;
  const  { actions } = useProductListingSlice();
  const dispatch = useDispatch();
  const categoriesList = useSelector(selectProductListingCategories);
  const productsList = useSelector(selectProductListingProducts);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const getData = useCallback(() => {
    if (isEmpty(categoriesList)) {
      dispatch(actions.getData());
    }
  }, [actions, dispatch, categoriesList]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    const { params } = match;
    const id = get(params, 'categoryId');
    if (!isEmpty(id)) {
      setSelectedCategory(id);
    }
  }, [match]);

  const changeCategory = event => {
    const { value } = event.target;
    setResetCategory(value);
  };

  const setResetCategory = id => {
    if (selectedCategory === id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(id);
    }
  };

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
            value={selectedCategory ? selectedCategory : 'default'}
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
                        onClick={(e) => { e.stopPropagation(); e.preventDefault(); setResetCategory(item.id)}}
                        href="!#"
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
                {!isEmpty(productsList) &&
                  map(renderProducts(productsList, selectedCategory), val => (
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

