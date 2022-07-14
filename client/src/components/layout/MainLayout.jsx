import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

function MainLayout(props) {
  return (
    <Container>
      <Header />
      {props.element}
      <Footer />
    </Container>
  );
}
export default MainLayout;
