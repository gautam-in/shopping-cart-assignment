import React from 'react';
import { useNavigate } from 'react-router-dom';

import 'react-multi-carousel/lib/styles.css';

import {
  SliderContainer,
  SlideContainer,
  CustomRightArrowButton,
  CustomLeftArrowButton,
  CustomDots,
} from './slider.styles';

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <CustomRightArrowButton onClick={() => onClick()}>
      NEXT
    </CustomRightArrowButton>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <CustomLeftArrowButton onClick={() => onClick()}>
      PREV
    </CustomLeftArrowButton>
  );
};

const CustomDot = ({ onClick, banners, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;

  const carouselItems = [];
  carouselItems.fill(banners.length);
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <CustomDots
      className={active ? 'active' : 'inactive'}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </CustomDots>
  );
};

const Slider = ({ banners }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  // const navigate = useNavigate();

  const handleBannerClick = (id) => {
    // check whether to implement // not id match in products list
    // navigate(`categories/${id}`);
  };

  return (
    <div>
      <SliderContainer
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        customDot={<CustomDot banners={banners} />}
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== 'mobile' ? true : false}

        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {banners
          .filter(({ isActive }) => isActive)
          .map(({ bannerImageUrl, bannerImageAlt, id }) => {
            return (
              <SlideContainer key={id} onClick={() => handleBannerClick(id)}>
                {/* <img src={} alt="" /> */}
                <img src={bannerImageUrl} alt={`image of ${bannerImageAlt}`} />
              </SlideContainer>
            );
          })}
      </SliderContainer>
    </div>
  );
};

export default Slider;
