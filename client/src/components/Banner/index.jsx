import React, { useEffect, useState } from 'react';

import Carousel from 'nuka-carousel';
import { StyledBanner } from './Banner.styled';
import Wrapper from '../Utilities/Wrapper';
import { getBanners } from '../../services/ApiService';
import { getNumericalWidth } from '../../services/getFormattedDataServices';
import theme from '../../theme';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Banner = () => {
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
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
        <Carousel
          ariaLabel="offers"
          swiping={width <= getNumericalWidth(theme.breakpoints.SM_TAB) ? true : false}
          dragging={true}
          wrapAround={true}
          renderCenterLeftControls={({ previousSlide }) => (
              <button 
                type='button'
                aria-label='previous'
                onClick={previousSlide} 
                className="left" >
                  Previous
              </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
            type='button'
            aria-label='next'
            onClick={nextSlide} 
            className="right" >
              Next
          </button>
          )}
        >
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
