import React, { useEffect, useContext } from "react";
import ApiCall from "../FetchApi";
import Carousel from "../Components/Carousel/Carousel";
import Category from "../Components/Category/Category";
import { Container, Wrapper } from "../Components/Styles/Header.styles";
import { CartContext } from "../Components/Header/CartContext";
import { FallBackUI } from "./FallbackUI";

const Home = () => {
  const {
    state: { hasError, isLoading },
    dispatch,
  } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    ApiCall.getCategories()
      .then((res) => dispatch({ type: "CATEGORIES", payload: res }))
      .catch((err) => dispatch({ type: "FAILED", payload: true }));

    ApiCall.getBanners()
      .then((res) => dispatch({ type: "BANNERS", payload: res }))
      .catch((err) => dispatch({ type: "FAILED", payload: true }));
    dispatch({ type: "LOADING", payload: false });
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          {hasError && (
            <FallBackUI title="Something Went Wrong, Please Try Later." />
          )}

          {isLoading && <FallBackUI title="Please Wait Loading..." />}
          <Carousel />
          <Category />
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
