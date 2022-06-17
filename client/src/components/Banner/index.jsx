import React from 'react';
import Carousel from 'nuka-carousel';
import theme from '../../theme';
import Wrapper from '../Utilities/Wrapper';
import { StyledBanner } from './Banner.styled';

const Banner = () => {
  return (
    <StyledBanner className='banner'>
        <Wrapper>
        <Carousel>
            <img src={theme.carousel_images.slide_one} alt='' />
            <img src={theme.carousel_images.slide_two} alt='' />
            <img src={theme.carousel_images.slide_three} alt='' />
            <img src={theme.carousel_images.slide_four} alt='' />
            <img src={theme.carousel_images.slide_five} alt='' />
        </Carousel>
        </Wrapper>
    </StyledBanner>
  )
}

export default Banner