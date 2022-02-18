import React, { useContext, useEffect } from "react";
import { addItemToCart } from "../../context/actions/cartAction";
import { GlobalState } from "../../context/reducers/cart-reducer";
import CustomButton from "../custom-button/custom-buttom.component";
import CardContent from "./card-content/card-content.component";
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
  const {
    state: { cartItems, cartTotal },
    dispatch,
  } = useContext(GlobalState);
  const { id, imageURL, name, price, stock, description } = product;

  useEffect(() => {}, []);
  console.log(cartItems);

  const handleClick = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <CardContainer>
      <Title>{name}</Title>
      <CardWrapper>
        <ImageWrapper>
          <Image src={imageURL} alt={name} />
        </ImageWrapper>
        <CardContent
          product={product}
          price={price}
          description={description}
        />
      </CardWrapper>
      <CustomButton onClick={() => handleClick()} className="desktop-show">
        Buy Now @ MRP Rs.{price}
      </CustomButton>
    </CardContainer>
  );
};

export default Card;
