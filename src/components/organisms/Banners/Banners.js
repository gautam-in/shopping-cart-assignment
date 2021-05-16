import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../../molecules/Carousel/Carousel';
import { GET_BANNERS_API } from "../../../apis";
import { getData } from '../../../getService';

const Banners = () => {

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    getData(GET_BANNERS_API).then(json => setBanners(json.data)).catch((err) => {
      console.log(err);
    });
  }, []);

  // const bannersList = useSelector(state => state.banners.banners)
  return <Carousel images={banners} />;
};

export default Banners;
