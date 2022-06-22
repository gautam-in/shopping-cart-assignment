import React, { useEffect, useState } from 'react';

import Carousel from 'nuka-carousel';
import { StyledBanner } from './Banner.styled';
import Wrapper from '../Utilities/Wrapper';
import { getBanners } from '../../services/ApiService';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const Banner = () => {
  const dispatch = useDispatch();
  const [bannerImages, setBannerImages] = useState([]);

  useEffect(() => {
    dispatch(getBanners())
      .then(unwrapResult)
      .then((bannerList) => {
        setBannerImages(bannerList);
      })
      .catch((error) => error);
  }, [dispatch]);

  return (
    <StyledBanner className="banner">
      <Wrapper>
        <Carousel>
          {bannerImages.map((bannerImage) => (
            <img
              key={bannerImage.id}
              id={bannerImage.id}
              order={bannerImage.order}
              src={bannerImage.bannerImageUrl}
              alt={bannerImage.bannerImageAlt}
            />
          ))}
        </Carousel>
      </Wrapper>
    </StyledBanner>
  );
};

export default Banner;
