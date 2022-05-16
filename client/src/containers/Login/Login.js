import { Fragment } from "react";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import Styled from "styled-components";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import HelpText from "../../components/Typography/HelpText";

const Form = Styled.form`
  width: 500px;

  @media(max-width: 560px){
    width: 360px;
  }

  @media(max-width: 380px){
    width: 320px;
  }
`;

const SubmitButtonContainer = Styled.div`
  margin-top: 30px;
`;

const Login = ({authenticationSucess}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur",
    defaultValues: {
      email: "user@test.com",
      password: "Pass@123",
    },
  });

  const onSubmit = (data) => {
    authenticationSucess(data);
    reset();
  };

  return (
    <Fragment>
      <div>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              type="email"
              name="Email"
              validation={{
                ...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email"
                  }
                })
              }}
            />
            {errors.email && errors.email.message ? (
              <HelpText role="alert" color="red" paddingTop="5px">
                {errors.email.message}
              </HelpText>
            ): null}
            <Input
              type="password"
              name="Password"
              datatestId={"password"}
              validation={{
                ...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=\D*\d)(?=[^a-zA-Z]*[a-zA-Z])\S{6,}$/,
                    message:
                      "Please enter a password more than 5 characters long, containing at least 1 letter, 1 number and 1 special character excluding space."
                  }
                })
              }}
            />
            {errors.password && errors.password.message ? (
              <HelpText role="alert" color="red" paddingTop="5px">
                {errors.password.message}
              </HelpText>
            ) : null}
            <SubmitButtonContainer>
              <Button data-testid="submit" onSubmit={onSubmit} padding="4px 30px">
                {" "}
                Login{" "}
              </Button>
            </SubmitButtonContainer>
          </Form>
        </div>
    </Fragment>
  );
};

Login.propTypes = {
  authenticationSucess: PropTypes.func,
}

Login.defaultProps = {
  authenticationSucess: () => {},
}

export default Login;

