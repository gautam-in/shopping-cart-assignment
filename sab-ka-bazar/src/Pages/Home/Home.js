import React, { useEffect, useContext } from "react";
import AjaxCall from "../../AjaxCaller";
import Carousel from "../../Components/Carousel/Carousel";
import Category from "../../Components/Category/Category";
import {
  Container,
  Wrapper,
} from "../../Components/Containers/ContainerElements";
import { CartContext } from "../../Components/Context/CartContext";
import { FallBackUI } from "../FallbackUIs/FallbackUIs";

const Home = () => {
  const {
    state: { hasError, isLoading },
    dispatch,
  } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "LOADING", payload: true });
    AjaxCall.getCategories()
      .then((res) => dispatch({ type: "CATEGORIES", payload: res }))
      .catch((err) => dispatch({ type: "FAILED", payload: true }));

    AjaxCall.getBanners()
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
