import React, { useContext } from "react";
import { addItemToCart } from "../../../context/actions/cartAction";
import { GlobalState } from "../../../context/reducers/cart-reducer";
import CustomButton from "../../custom-button/custom-buttom.component";
import {
  CardContentContainer,
  CardDescription,
  CardFooter,
  Price,
  PriceWrapper,
} from "./card-content.styles";

const CardContent = ({ price, description, product }) => {
  const {
    state: { cartItems },
    dispatch,
  } = useContext(GlobalState);

  const handleClick = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <CardContentContainer>
      <CardDescription>{description}</CardDescription>
      <CardFooter>
        <PriceWrapper>
          <Price>MRP Rs{price}</Price>
        </PriceWrapper>
        <CustomButton onClick={() => handleClick()} className="desktop-visible">
          Buy Now
        </CustomButton>
        <CustomButton onClick={() => handleClick()} className="mobile-show">
          Buy Now @ Rs.${price}
        </CustomButton>
      </CardFooter>
    </CardContentContainer>
  );
};

export default CardContent;
