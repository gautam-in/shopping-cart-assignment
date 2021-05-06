import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Carousel from '../../molecules/Carousel';
import { fetchBannersDataRequest } from '../../../redux/actions';
import { allBannersData } from '../../../redux/selector';

const Banners = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBannersDataRequest());
  }, [dispatch]);

  const { loading, data, error } = useSelector((state) => allBannersData(state));

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Something went wrong!</h1>;
  }
  return <Carousel images={data} />;
};

export default Banners;
