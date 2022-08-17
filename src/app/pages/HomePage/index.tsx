/**
 *
 *
 *
 */

import React, { memo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Helmet } from 'react-helmet-async';
import { useHomePageSlice } from './slice';
import { selectHomePageBanners, selectHomePageLoading } from './selectors';

export const HomePage = memo(() => {
  const { actions } = useHomePageSlice();
  const dispatch = useDispatch();
  const bannerList = useSelector(selectHomePageBanners);
  const loading = useSelector(selectHomePageLoading);
  console.log(bannerList, loading);

  const getBannerList = useCallback(
    () => dispatch(actions.getBanners()),
    [actions, dispatch],
  );

  useEffect(() => {
    getBannerList();
  }, [getBannerList]);

  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application HomePage" />
      </Helmet>
      <span>HomePage</span>
    </div>
  );
});
