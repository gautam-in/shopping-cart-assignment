import React from "react";
import { CarouselItemContainer } from "./carousel-item.styles";

const CarouselItem = ({ children, width }) => {
  return (
    <CarouselItemContainer style={{ width: width }}>
      {children}
    </CarouselItemContainer>
  );
};

export default CarouselItem;
