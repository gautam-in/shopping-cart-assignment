import React from "react";
import CustomButton from "../custom-button/custom-buttom.component";
import CardContent from "./card-content/card-content.component";
import { Price } from "./card-content/card-content.styles";
import {
  CardContainer,
  CardWrapper,
  Content,
  Description,
  Image,
  ImageWrapper,
  PriceWrapper,
  Title,
} from "./card.styles";

const Card = ({ product }) => {
  const { id, imageURL, name, price, stock, description } = product;

  return (
    <CardContainer>
      <Title>{name}</Title>
      <CardWrapper>
        <ImageWrapper>
          <Image src={imageURL} />
        </ImageWrapper>
        <CardContent price={price} description={description} />
      </CardWrapper>
      {/* <PriceWrapper>
        <Price>{price}</Price>
        <CustomButton className="desktop-btn">{"Buy now"}</CustomButton>
      </PriceWrapper> */}
      <CustomButton className="desktop-show">
        Buy Now @ MRP Rs.{price}
      </CustomButton>
    </CardContainer>
  );
};

export default Card;
