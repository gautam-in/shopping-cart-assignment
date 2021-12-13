import React, { useState, useEffect } from "react";
import { CardItem } from "./card-item/card-item.component";
import { CardParentContainer } from "./card.styled";

const Card = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <CardParentContainer>
      {products.map((product) => (
        <CardItem product={product} key={product.id} />
      ))}
    </CardParentContainer>
  );
};

export default Card;
