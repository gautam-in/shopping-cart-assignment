/**
 *
 *
 *
 */

import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Helmet } from 'react-helmet-async';
import { useHomePageSlice } from './slice';

interface Props {}

export const HomePage = memo((props: Props) => {
  const { actions } = useHomePageSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getBanners());
  }, []);

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
