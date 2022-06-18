import React from 'react';
import Carousel from 'nuka-carousel';
import theme from '../../theme';
import Wrapper from '../Utilities/Wrapper';
import { StyledBanner } from './Banner.styled';

const Banner = () => {

  const carouselList = () => {
    const list_of_images = [];
    for (const slide in theme.carousel_images) {
      if (Object.hasOwnProperty.call(theme.carousel_images, slide)) {
        const imageSlide = theme.carousel_images[slide];
        list_of_images.push(<img src={imageSlide} alt='' />);
      }
    }
    return(list_of_images);
  }

  return (
    <StyledBanner className='banner'>
        <Wrapper>
        <Carousel>
          {carouselList()}
        </Carousel>
        </Wrapper>
    </StyledBanner>
  )
}

export default Banner;