import { memo } from "react";
import Header from "components/Header/Header";
// import LoginBody from "components/LoginBody/LoginBody";
import Copyright from "components/Shared/Copyright";
import { Container } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <Header />
      {/* <LoginBody /> */}
      <Copyright />
    </Container>
  );
};

export default memo(Home);
