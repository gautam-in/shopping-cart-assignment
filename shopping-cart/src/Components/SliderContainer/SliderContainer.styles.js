import styled from "styled-components";
import Carousel from "react-elastic-carousel";

export const Slider = styled.div`
  width: 100%;
  height: 20%;
  box-shadow: 0 8px 8px -6px rgba(0, 0, 0, 0.3);
  @media screen and (max-height: 830px) {
    height: 25%;
  }
`;

export const SliderCarousel = styled(Carousel)`
  height: 100%;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Square = styled.div`
  height: 5px;
  width: 5px;
  margin: 0 10px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => (props.active ? "black" : "")};
`;
