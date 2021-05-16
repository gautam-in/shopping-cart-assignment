import React, { useEffect, useState } from 'react';
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
  return <Carousel images={banners} />;
};

export default Banners;
