import React from "react";
import { ProductnavbarContainer } from "./Productnavbar.styled";
import { ProductNavBarItem } from "./ProductNavBarItem/ProductNavBarItem.component";

export const Productnavbar = ({ categories }) => {
  return (
    <ProductnavbarContainer>
      {categories
        .filter((c) => c.enabled === true)
        .map(({ name, id }) => {
          return <ProductNavBarItem id={id} name={name} /> ;
        })}
    </ProductnavbarContainer>
  );
};
