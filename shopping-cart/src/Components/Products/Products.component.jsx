import React, { useEffect, useState } from "react";
import api from "../../api/data";
import Product from "../Product/Product.component";
import { ProductsContainer } from "./Products.styles";
import { useParams, useLocation } from "react-router-dom";

const Products = () => {
  const { categoryName } = useParams();
  const categoryId = useLocation().state;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      let response = await api.get("/products");
      let data = await response.data;
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <ProductsContainer>
      {categoryName
        ? products
            .filter((product) => product.category === categoryId)
            .map((product) => {
              return <Product key={product.id} product={product} />;
            })
        : products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
    </ProductsContainer>
  );
};

export default Products;
