import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setProductsCategory } from "../../redux/products/products.action";
import { useSelector } from "react-redux";

const ProductsSidebar = (props) => {
  const navigate = useNavigate();
  const { selectedCategory } = useSelector((state) => state.products);
  const { categoriesData } = useSelector((state) => state.apiData);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let finalCategories = categoriesData.sort((a, b) => a.order - b.order);
    setCategories(finalCategories);
  }, [categoriesData]);

  return (
    <ProductsSidebarContainer>
      {categories.map((productCategory) => {
        return (
          <button
            key={productCategory.id}
            style={{
              padding: "16px",
              textAlign: "left",
              fontSize: 12,
              cursor: "pointer",
              border: "none",
              color:
                selectedCategory === productCategory.id
                  ? "#fff"
                  : "rgb(133, 133, 133)",
              backgroundColor:
                selectedCategory === productCategory.id ? "#d00256" : "",
              borderBottom: "1px solid rgb(212, 212, 212)",
            }}
            onClick={() => {
              dispatch(setProductsCategory(productCategory.id));
              navigate(`/products?category=${productCategory.id}`);
            }}
          >
            {productCategory.name}
          </button>
        );
      })}
    </ProductsSidebarContainer>
  );
};

const ProductsSidebarContainer = styled.div`
  display: flex;
  background-color: rgb(234, 234, 234);
  height: 100%;
  flex-direction: column;
  flex: 1;
  width: 200px;
  @media (max-width: 500px) {
    display: none;
  }
`;

export default ProductsSidebar;
