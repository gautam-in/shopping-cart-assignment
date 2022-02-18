import React, { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import MenuBar from "../../components/menu-bar/menu-bar.component";
import MobileMenuBar from "../../components/mobile-menu-bar/mobile-menu-bar.component";
import ProductItems from "../../components/product-items/product-items.component";
import {
  getAllCategories,
  getAllProducts,
  getProductsByCategory,
} from "../../http";
import { ProductsContainer, Wrapper } from "./products.styles";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const getCategories = async () => {
    try {
      const { data } = await getAllCategories();
      setCategories(data.sort((first, second) => first.order - second.order));
    } catch (error) {
      console.log(error);
    }
  };
  const getProducts = async () => {
    try {
      const { data } = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {}, [filteredProducts]);
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const handleClick = (id) => {
    setFilteredProducts(products.filter((product) => product.category === id));
  };
  if (!categories || !products) return <h1>Loading</h1>;
  return (
    <ProductsContainer>
      <Container>
        <Wrapper>
          <MobileMenuBar handleChange={handleClick} categories={categories} />
          <MenuBar handleClick={handleClick} categories={categories} />
          <ProductItems
            filteredProducts={filteredProducts}
            products={products}
          />
        </Wrapper>
      </Container>
    </ProductsContainer>
  );
};

export default Products;
