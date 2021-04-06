import React, { useEffect } from 'react';
import { map } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './Home.scss';

import Banner from '../Shared/Banner';
import ContentSection from '../Shared/ContentSection';
import bannerAction from '../../redux/actions/banner';
import categoryAction from '../../redux/actions/category';

const Home = () => {
  const dispatch = useDispatch();
  const banners = useSelector((state) => state.banners);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(bannerAction.bannerList());
    dispatch(categoryAction.categoryList());
  }, [dispatch]);

  return (
    <div className="home-content">
      <Banner banners={banners} />
      {
        map(categories, (category, cidx) => (
          category.order > -1
          && (
            <ContentSection
              key={cidx}
              category={category}
            />
          )
        ))
      }

    </div>
  );
};

export default {
  component: withStyles(styles)(Home),
  loadData: ({ dispatch }) => (async () => {
    await dispatch(bannerAction.bannerList());
    await dispatch(categoryAction.categoryList());
  })(),
};
