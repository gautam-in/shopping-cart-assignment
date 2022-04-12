import React from 'react';

import 'react-multi-carousel/lib/styles.css';

import {
  SliderContainer,
  SlideContainer,
  CustomRightArrowButton,
  CustomLeftArrowButton,
  CustomDots,
} from './slider.styles';

const CustomRightArrow = ({ onClick, ...rest }) => (
  <CustomRightArrowButton onClick={() => onClick()}>
    NEXT
  </CustomRightArrowButton>
);

const CustomLeftArrow = ({ onClick, ...rest }) => (
  <CustomLeftArrowButton onClick={() => onClick()}>PREV</CustomLeftArrowButton>
);

const CustomDot = ({ onClick, banners, ...rest }) => {
  const { index, active } = rest;
  const carouselItems = [];
  carouselItems.fill(banners.length);

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
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
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
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="carousel-item-padding-40-px"
      >
        {banners
          .filter(({ isActive }) => isActive)
          .map(({ bannerImageUrl, bannerImageAlt, id }) => (
            <SlideContainer key={id} onClick={() => handleBannerClick(id)}>
              <img src={bannerImageUrl} alt={bannerImageAlt} />
            </SlideContainer>
          ))}
      </SliderContainer>
    </div>
  );
};

export default Slider;
