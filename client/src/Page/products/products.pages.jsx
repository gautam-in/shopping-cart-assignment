import React, { Suspense, useEffect, useState } from "react";
import Container from "../../components/container/Container";
import { getAllCategories, getAllProducts } from "../../http";
import { ProductsContainer, Wrapper } from "./products.styles";
const ProductItems = React.lazy(() =>
  import("../../components/product-items/product-items.component")
);
const MenuBar = React.lazy(() =>
  import("../../components/menu-bar/menu-bar.component")
);
const MobileMenuBar = React.lazy(() =>
  import("../../components/mobile-menu-bar/mobile-menu-bar.component")
);

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
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default Products;
