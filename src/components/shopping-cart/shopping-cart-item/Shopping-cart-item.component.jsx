import React from "react";
import { connect } from "react-redux";
import {
  ShoppingItemActionsContainer,
  ShoppingItemButtonContainer,
  ShoppingItemContainer,
  ShoppingItemDetailsContainer,
  ShoppingItemImageContainer,
} from "./Shopping-cart-item.styled";
import { addItem, removeItem } from "../../../redux/cart_reducer/cartActions";

const ShoppingCartItem = ({ cartItem, addItem , removeItem}) => {
  const { name, imageURL, price, quantity } = cartItem;
  return (
    <ShoppingItemContainer>
      <ShoppingItemImageContainer>
        <img src={imageURL} style={{ height: "150px", width: "150px" }} />
      </ShoppingItemImageContainer>
      <ShoppingItemDetailsContainer>
        <h2>{name}</h2>
        <ShoppingItemActionsContainer>
          <ShoppingItemContainer>
            <ShoppingItemButtonContainer
              onClick={() => {
                addItem(cartItem);
              }}
            >
              +
            </ShoppingItemButtonContainer>
            <span>{quantity}</span>
            <ShoppingItemButtonContainer
              onClick={() => {
                removeItem(cartItem);
              }}
            >
              -
            </ShoppingItemButtonContainer>
            <span>X</span>
            <span>Rs.{price}</span>
          </ShoppingItemContainer>
          <ShoppingItemContainer>Rs.{quantity * price}</ShoppingItemContainer>
        </ShoppingItemActionsContainer>
      </ShoppingItemDetailsContainer>
    </ShoppingItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null,mapDispatchToProps)(ShoppingCartItem);
