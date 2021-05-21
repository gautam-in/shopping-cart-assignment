import { memo } from "react";
import LeftCard from "components/Shared/LeftCard";
import { Container } from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <LeftCard
        title="Login"
        description="Get access to your Orders, Wishlist & Recommendations"
      />
      Right
    </Container>
  );
};

export default memo(Login);
