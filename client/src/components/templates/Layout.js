import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../templates/Routes";
import Footer from "../UI/organisms/Footer/Footer";
import Headers from "../UI/organisms/Header/Headers";
import styled from "styled-components";
import Cart from "../UI/organisms/Cart/Cart";

const Section = styled.div`
  min-height: 750px;
`;

const Layout = () => {
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const cartSlideOpen = () => {
    setIsSlideOpen(!isSlideOpen);
  };
  return (
    <Router>
      <Headers cartSideNav={cartSlideOpen} />
      <Section>
        <Cart isSlideOpen={isSlideOpen} cartSideNav={cartSlideOpen} />
        <Routes />
      </Section>

      <Footer />
    </Router>
  );
};
export default Layout;
