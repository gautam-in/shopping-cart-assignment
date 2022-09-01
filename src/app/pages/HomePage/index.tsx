/**
 *
 *
 *
 */

import React, { memo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Helmet } from 'react-helmet-async';
import isEmpty from 'lodash/isEmpty';
import { CustomContainer } from 'app/components/Container';
import { Banner } from 'app/components/Banner';
import { Categories } from 'app/components/Categories';

import { useHomePageSlice } from './slice';
import {
  selectHomePageBanners,
  selectHomePageLoading,
  selectCategoryLoading,
  selectHomePageCategoryItems,
} from './selectors';

export const HomePage = memo(() => {
  const { actions } = useHomePageSlice();
  const dispatch = useDispatch();

  const bannerList = useSelector(selectHomePageBanners);
  const loading = useSelector(selectHomePageLoading);

  const categoriesLoading = useSelector(selectCategoryLoading);
  const categoryItems = useSelector(selectHomePageCategoryItems);

  const getBannerList = useCallback(() => {
    if (isEmpty(categoryItems)) {
      dispatch(actions.getBanners());
    }
  }, [actions, dispatch, categoryItems]);

  useEffect(() => {
    getBannerList();
  }, [getBannerList]);

  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application HomePage" />
      </Helmet>
      <CustomContainer>
        <Banner loading={loading} banners={bannerList} />
        <Categories loading={categoriesLoading} items={categoryItems} />
      </CustomContainer>
    </div>
  );
});
