import { memo } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import LeftCard from "components/Shared/LeftCard";
import { Container, RightBody } from "./SignUpBody.styles";

const SignUpBody = () => {
  return (
    <Container>
      <LeftCard
        title="Signup"
        description="We do not share your personal details with anyone"
      />
      <RightBody>
        <form className="right-body" noValidate autoComplete="off">
          <TextField
            required
            // id="standard-required"
            label="First Name"
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

export default memo(SignUpBody);
