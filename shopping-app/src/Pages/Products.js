import React, { useEffect, useState, useContext } from "react";

import { ProductsContainer, ProductContainer } from "./Styles/Products.Styles";
import { Wrapper, Container } from "../Components/Styles/Header.styles";
import SideBar from "../Components/Slidebar";
import { CartContext } from "../Components/Header/CartContext";
import ApiCall from "../FetchApi";
import { FallBackUI } from "./FallbackUI";
import ProductFinal from "./ProductsFinal";

const Products = () => {
  const {
    state: { products: productsData, hasError, isLoading },
    dispatch,
  } = useContext(CartContext);

  const [filterId, setFilterId] = useState("");

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });

    ApiCall.getProducts()
      .then((res) => dispatch({ type: "PRODUCTS", payload: res }))
      .catch((err) => {
        dispatch({ type: "FAILED", payload: true });
      });

    dispatch({ type: "LOADING", payload: false });
  }, []);

  return (
    <Container>
      <Wrapper>
        {hasError && (
          <FallBackUI title="Something Went Wrong, Please Try Later." />
        )}
        {isLoading ? (
          <FallBackUI title="Please wait loading..." />
        ) : (
          <ProductContainer>
            <SideBar id={setFilterId} style={{ backgroundColor: "#e5e5e5" }} />

            <ProductsContainer>
              {productsData.length > 0 &&
                filterId === "" &&
                productsData.map((item) => {
                  return <ProductFinal key={item.id} item={item} />;
                })}

              {productsData.length > 0 &&
                filterId !== "" &&
                productsData.map((item) => {
                  if (item.category === filterId) {
                    return <ProductFinal key={item.id} item={item} />;
                  } else return null;
                })}
            </ProductsContainer>
          </ProductContainer>
        )}
      </Wrapper>
    </Container>
  );
};

export default Products;
