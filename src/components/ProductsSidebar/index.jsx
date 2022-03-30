import React from "react";
import styled from "styled-components";
import { PRODUCT_ID_MAP } from "../../utils/products.util";
import { useDispatch } from "react-redux";
import { setProductsCategory } from "../../redux/products/products.action";
import { useSelector } from "react-redux";

const ProductsSidebar = (props) => {
  const { selectedCategory } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <ProductsSidebarContainer>
      {Object.keys(PRODUCT_ID_MAP).map((productCategory) => {
        return (
          <button
            key={productCategory}
            style={{
              padding: "16px",
              textAlign: "left",
              fontSize: 12,
              border: "none",
              color:
                selectedCategory === PRODUCT_ID_MAP[productCategory]
                  ? "#fff"
                  : "rgb(133, 133, 133)",
              backgroundColor:
                selectedCategory === PRODUCT_ID_MAP[productCategory]
                  ? "#d00256"
                  : "",
              borderBottom: "1px solid rgb(212, 212, 212)",
            }}
            onClick={() => {
              dispatch(setProductsCategory(PRODUCT_ID_MAP[productCategory]));
            }}
          >
            {productCategory}
          </button>
        );
      })}
    </ProductsSidebarContainer>
  );
};

const ProductsSidebarContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1;
  width: 200px;
  background-color: rgb(234, 234, 234);
  @media (max-width: 500px) {
    display: none;
  }
`;


export default ProductsSidebar;
