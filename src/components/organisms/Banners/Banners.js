import React, { useEffect, useState } from 'react';
import Carousel from '../../molecules/Carousel/Carousel';
import { GET_BANNERS_API } from '../../../apis';
import { getData } from '../../../getService';

const Banners = React.memo(() => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    getData(GET_BANNERS_API)
      .then((json) => setBanners(json.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!banners) {
    return <h1>Loading....</h1>;
  }
  return <Carousel images={banners} />;
});

export default Banners;
