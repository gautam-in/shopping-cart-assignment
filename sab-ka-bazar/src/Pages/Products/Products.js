import React, { useEffect, useState, useContext } from "react";

import {
  ProductContainer,
  ProductsContainer,
} from "./ProductsElements";
import {
  Wrapper,
  Container,
} from "../../Components/Containers/ContainerElements";
import SideBar from "../../Components/SideBar/SideBar";
import { CartContext } from "../../Components/Context/CartContext";
import AjaxCall from "../../AjaxCaller";
import { FallBackUI } from "../FallbackUIs/FallbackUIs";
import ProductFinalCard from "./ProductFinalCard";

const Products = () => {
  const {
    state: { products: productsData, hasError, isLoading },
    dispatch,
  } = useContext(CartContext);

  const [filterId, setFilterId] = useState("");

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });

    AjaxCall.getProducts()
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
                  return (
                   <ProductFinalCard key={item.id} item={item}/>
                  );
                })}

              {productsData.length > 0 &&
                filterId !== "" &&
                productsData.map((item) => {
                  if (item.category === filterId) {
                    return (
                      <ProductFinalCard key={item.id} item={item}/>
                    );
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
