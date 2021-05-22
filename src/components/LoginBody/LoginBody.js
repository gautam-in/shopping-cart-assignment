import { memo } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import LeftCard from "components/Shared/LeftCard";
import { Container, RightBody } from "./LoginBody.styles";

const LoginBody = () => {
  return (
    <Container>
      <LeftCard
        title="Login"
        description="Get access to your Orders, Wishlist & Recommendations"
      />
      <RightBody>
        <form className="right-body" noValidate autoComplete="off">
          <TextField
            required
            // id="standard-required"
            label="Email"
          />
          <TextField
            required
            // id="standard-disabled"
            label="Password"
          />
          <Button
            onClick={() => alert("clicked")}
            className="confirm-btn"
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
        </form>
      </RightBody>
    </Container>
  );
};

export default memo(LoginBody);
