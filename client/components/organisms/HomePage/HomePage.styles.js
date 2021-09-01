import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const StyledCarousel = styled(Carousel)`
  margin-bottom: 2.5rem;
  background: white;

  &:after {
    content: "";
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 50%;
    border-radius: 50%;
    z-index: -1;
    box-shadow: 0 8px 10px -10px var(--dark-grey);
  }

  .react-multiple-carousel__arrow {
    transform: scale(0.8);
  }

  .carousel-dots {
    transform: scale(0.5);
  }
`;
