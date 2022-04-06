import styled from 'styled-components';
import Carousel from 'react-multi-carousel';

const white = '#ffffff';

export const SliderContainer = styled(Carousel)`
  width: 80%;
  margin: 2rem auto;
  box-shadow: 0 63px 57px -102px black;
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
