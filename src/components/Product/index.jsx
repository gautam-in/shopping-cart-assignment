import React from "react";
import { ProductContainer } from "./product.styles";
import { addItem } from "../../redux/cart/cart.action";
import { useDispatch } from "react-redux";
import { Button } from "../../global.styles";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <ProductContainer>
      <h3>{product.name}</h3>
      <img src={product.imageURL} width={150} />
      <p style={{ backgroundColor: "rgb(224, 224, 224)" }}>
        {product.description}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <p>MRP Rs.{product.price}</p>
        <Button
          onClick={() => {
            dispatch(addItem(product));
          }}
        >
          Buy Now
        </Button>
      </div>
    </ProductContainer>
  );
};

export default Product;
