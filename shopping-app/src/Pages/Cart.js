import React, { useContext, useState, useEffect } from "react";
import { Container, Wrapper } from "../Components/Styles/Header.styles";
import {
  HeadingSecondary,
  SubHeading,
} from "../Components/Styles/Heading.Styles";
import {
  CartContainer,
  CartFooter,
  CartHeader,
  ItemContainer,
  ItemPrice,
  ItemWrapper,
  LowestPriceContainer,
  CartButton,
  CartImage,
  QuantityBtn,
} from "./Styles/Cart.Styles";
import discountImg from "../Images/lowest-price.png";
import { FlexColumnContainer } from "./Styles/SignIn.Styles";
import { CartContext } from "../Components/Header/CartContext";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0));
  });
  return (
    <Container>
      <Wrapper>
        <CartContainer>
          <CartHeader>
            <HeadingSecondary>My Cart</HeadingSecondary>
            <SubHeading>
              ({cart.length} {cart.length > 1 ? "Items" : "Item"})
            </SubHeading>
          </CartHeader>
          {cart.length > 0 &&
            cart.map((item) => (
              <ItemContainer key={item.id}>
                <ItemWrapper>
                  <CartImage src={item.imageURL} />
                  <FlexColumnContainer>
                    <HeadingSecondary>{item.name}</HeadingSecondary>
                    <LowestPriceContainer>
                      <QuantityBtn
                        onClick={() =>
                          dispatch({
                            type:
                              item.qty === 1
                                ? "REMOVE_FROM_CART"
                                : "DECREMENT_QUANTITY",
                            payload: item,
                          })
                        }
                      >
                        -
                      </QuantityBtn>
                      <HeadingSecondary>{item.qty}</HeadingSecondary>
                      <QuantityBtn
                        onClick={() =>
                          dispatch({
                            type: "INCREMENT_QUANTITY",
                            payload: item,
                          })
                        }
                      >
                        +
                      </QuantityBtn>
                      <HeadingSecondary>x</HeadingSecondary>
                      <HeadingSecondary>{item.price}</HeadingSecondary>
                    </LowestPriceContainer>
                  </FlexColumnContainer>
                </ItemWrapper>
                <ItemPrice>Rs.{item.price * item.qty}</ItemPrice>
              </ItemContainer>
            ))}

          {cart.length > 0 && (
            <LowestPriceContainer>
              <CartImage src={discountImg} />
              <SubHeading>You can't find it anywhere cheaper.</SubHeading>
            </LowestPriceContainer>
          )}

          <CartFooter>
            <SubHeading>Promo code can be applied at payment page</SubHeading>
            <CartButton>
              <SubHeading>Proceed to checkout</SubHeading>
              <SubHeading>Rs.&nbsp;{total}</SubHeading>
            </CartButton>
          </CartFooter>
        </CartContainer>
      </Wrapper>
    </Container>
  );
};

export default Cart;
