import React, { useEffect, useState, useContext } from "react";

import {
  FlexColumnItems,
  FlexItems,
  ProductCard,
  ProductContainer,
  ProductDescription,
  ProductDescriptionContainer,
  ProductImage,
  ProductsContainer,
} from "./ProductsElements";
import {
  Wrapper,
  Container,
} from "../../Components/Containers/ContainerElements";
import { HeadingSecondary } from "../../Components/Typography/Typography";
import { Button } from "../../Components/Button/ButtonElements";
import SideBar from "../../Components/SideBar/SideBar";
import { CartContext } from "../../Components/Context/CartContext";
import AjaxCall from "../../AjaxCaller";
import { FallBackUI } from "../FallbackUIs/FallbackUIs";

const Products = () => {
  const {
    state: { products: productsData, cart, hasError, isLoading },
    dispatch,
  } = useContext(CartContext);

  const [filterId, setFilterId] = useState("");

  const addToCart = async (item) => {
    try {
      dispatch({ type: "ADD_TO_CART", payload: item });
    } catch (error) {
      dispatch({ type: "FAILED", payload: true });
      console.log(error);
    }
  };

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
                    <ProductCard key={item.id}>
                      <HeadingSecondary>{item.name}</HeadingSecondary>
                      <FlexItems>
                        <ProductImage src={item.imageURL} />
                        <ProductDescriptionContainer>
                          <ProductDescription>
                            {item.description}
                          </ProductDescription>
                          <FlexColumnItems>
                            <HeadingSecondary fontSize="1.6rem">{`MRP Rs.${item.price}`}</HeadingSecondary>
                            {cart.some((c) => c.id === item.id) ? (
                              <Button
                                customPadding=".8rem"
                                onClick={() =>
                                  dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: item,
                                  })
                                }
                              >
                                Remove
                              </Button>
                            ) : (
                              <Button
                                customPadding=".8rem"
                                disabled={item.stock <= 0}
                                onClick={() => addToCart(item)}
                              >
                                {item.stock <= 0 ? "Sold Out" : "Buy Now"}
                              </Button>
                            )}
                          </FlexColumnItems>
                        </ProductDescriptionContainer>
                      </FlexItems>
                    </ProductCard>
                  );
                })}

              {productsData.length > 0 &&
                filterId !== "" &&
                productsData.map((item) => {
                  if (item.category === filterId) {
                    return (
                      <ProductCard key={item.id}>
                        <HeadingSecondary>{item.name}</HeadingSecondary>
                        <ProductImage src={item.imageURL} />
                        <ProductDescription>
                          {item.description}
                        </ProductDescription>
                        <FlexItems>
                          <HeadingSecondary fontSize="1.6rem">{`MRP Rs.${item.price}`}</HeadingSecondary>
                          {cart.some((c) => c.id === item.id) ? (
                            <Button
                              customPadding=".8rem"
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: item,
                                })
                              }
                            >
                              Remove
                            </Button>
                          ) : (
                            <Button
                              customPadding=".8rem"
                              onClick={() =>
                                dispatch({ type: "ADD_TO_CART", payload: item })
                              }
                            >
                              Buy Now
                            </Button>
                          )}
                        </FlexItems>
                      </ProductCard>
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
