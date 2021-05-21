import { memo } from "react";
import { Container } from "./Navigation.styles";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Container>
      <Link className="links" to="/home">
        Home
      </Link>
      <Link className="links" to="/products">
        Products
      </Link>
    </Container>
  );
};

export default memo(Navigation);
