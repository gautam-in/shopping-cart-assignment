import React from "react";
import {
    ButtonContainer,
  CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./card-item.styled";

export const CardItem = ({ product }) => {
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
        <ButtonContainer>
            Buy Now
        </ButtonContainer>
      </CardFooter>
    </CardContainer>
  );
};
