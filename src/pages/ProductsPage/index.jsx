import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ProductsPageContainer,
  ProductsContainer,
  SidebarContainer,
} from "./productspage.styles";
import Product from "../../components/Product";
import ProductsSidebar from "../../components/ProductsSidebar";
import { useSelector } from "react-redux";
import ProductDropdown from "../../components/ProductsDropDown";

const Products = (props) => {
  const [productsData, setProductsData] = useState([]);
  const { selectedCategory } = useSelector((state) => state.products);
  const filteredData = productsData.filter(
    (item) => item.category === selectedCategory
  );
  let selectedData = filteredData.length > 0 ? filteredData : productsData;
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3030/products");
        setProductsData(response.data);
      } catch (e) {
        console.error("Failed to fetch products");
        console.error(e);
      }
    }
    fetchProducts();
  }, []);
  return (
    <ProductsPageContainer>
      <SidebarContainer>
        <ProductsSidebar />
      </SidebarContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProductDropdown />
        <ProductsContainer>
          {selectedData.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </div>
    </ProductsPageContainer>
  );
};

export default Products;
