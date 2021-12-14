import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart_reducer/cartActions";

import {
    ButtonContainer,
  CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./card-item.styled";

const CardItem = ({ product, addItem }) => {
  const { name, imageURL, description, price } = product;
  return (
    <CardContainer>
      <CardHeader>
        <h1>{name}</h1>
      </CardHeader>
      <CardContent>
        <img src={imageURL} style={{ maxHeight: "300px", maxWidth: "300px" }} />
      </CardContent>
      <CardDescription>{description}</CardDescription>
      <CardFooter>
        <p>MRP Rs.{price}</p>
        <ButtonContainer onClick={()=> addItem(product)}>
            Buy Now
        </ButtonContainer>
      </CardFooter>
    </CardContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem : (item) => dispatch(addItem(item)),
})

export default connect(null,mapDispatchToProps)(CardItem);