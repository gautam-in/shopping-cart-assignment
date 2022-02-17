import React from "react";
import CustomButton from "../../custom-button/custom-buttom.component";
import {
  CardContentContainer,
  CardDescription,
  CardFooter,
  Price,
  PriceWrapper,
} from "./card-content.styles";

const CardContent = ({ price, description }) => {
  return (
    <CardContentContainer>
      <CardDescription>{description}</CardDescription>
      <CardFooter>
        <PriceWrapper>
          <Price>MRP Rs{price}</Price>
        </PriceWrapper>
        <CustomButton className="desktop-show">Buy Now</CustomButton>
        <CustomButton className="mobile-show">
          Buy Now @ Rs.${price}
        </CustomButton>
      </CardFooter>
    </CardContentContainer>
  );
};

export default CardContent;
