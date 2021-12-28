import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

import { fetchBanners } from './../../redux/Home/actions';
import { selectBanners } from './../../redux/Home/selectors';

import { arrowStyles, indicatorStyles, CarouselWrapper } from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BannerSlider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBanners());
  }, [dispatch]);

  const banners = useSelector(selectBanners);

  const carouselProps = {
    showThumbs: false,
    showStatus: false,
    renderArrowPrev: (onClickHandler, hasPrev) =>
      hasPrev && (
        <button 
          type="button" 
          onClick={onClickHandler} 
          style={{ ...arrowStyles, left: "5px" }}>
            PREV
        </button>
      ),
    renderArrowNext: (onClickHandler, hasNext) =>
      hasNext && (
        <button 
          type="button" 
          onClick={onClickHandler} 
          style={{ ...arrowStyles, right: "5px" }}>
            NEXT
        </button>
      ),
    renderIndicator: (onClickHandler, isSelected, index, label) => {
      if (isSelected) {
        return (
          <li
            style={{ ...indicatorStyles, background: "#000" }}
            aria-label={`Selected: ${label} ${index + 1}`}
            title={`Selected: ${label} ${index + 1}`}
          />
        );
      }
      return (
        <li
          style={indicatorStyles}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          value={index}
          key={index}
          role="button"
          tabIndex={0}
          title={`${label} ${index + 1}`}
          aria-label={`${label} ${index + 1}`}
        />
      );
    }
  };

  return (
    <CarouselWrapper>
      <Carousel {...carouselProps} >
        {banners.length > 0 && banners.map(banner => (
          <div key={banner.id}>
            <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
          </div>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
} 

export default BannerSlider;