import React, { useEffect, useState } from "react";
import Card from "../../components/card/card.component";
import { Productnavbar } from "../../components/ProductNavBar/Productnavbar.component";
import { ProductPageContainer } from "./Products.styled";

const Products = () => {
  const [categories, setCategories] = useState([]);

  const getCategory = () => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((categories) => setCategories(categories))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <ProductPageContainer>
      <Productnavbar categories={categories}></Productnavbar>
      <Card />
    </ProductPageContainer>
  );
};

export default Products;
