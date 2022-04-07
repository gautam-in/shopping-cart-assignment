import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import { device } from '../../utils/breakpoints/devices';

const white = '#ffffff';

export const SliderContainer = styled(Carousel)`
  width: 90%;
  margin: 0 auto;
  height: 12rem;
  box-shadow: 0 63px 57px -102px black;

  @media ${device.tablet} {
    margin: 1rem auto;
    height: 16rem;
  }

  @media ${device.laptopL} {
    margin: 3rem auto;
    height: 20rem;
    width: 80%;
  }
`;

export const SlideContainer = styled.div`
  img {
    width: 100%;
    margin: 0 auto;
  }
`;

export const CustomRightArrowButton = styled.div`
  display: block;
  position: absolute;
  right: 0;
  border: none;
  padding: 1rem 2rem;
  opacity: 0.25;
  background: black;
  color: ${white};
`;

export const CustomLeftArrowButton = styled.div`
  display: block;
  position: absolute;
  left: 0;
  border: none;
  padding: 1rem 2rem;
  opacity: 0.15;
  background: black;
  color: ${white};
`;

export const CustomDots = styled.span`
  display: block;
  height: 0.6rem;
  width: 0.6rem;
  background: ${(props) => {
    return props.className === 'active' ? 'black' : 'gray';
  }};
  border-radius: 50%;
  margin: 1rem;
`;
