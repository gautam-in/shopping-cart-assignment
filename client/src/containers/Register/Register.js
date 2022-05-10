import { Fragment } from "react";
import Styled from "styled-components";
import PropTypes from 'prop-types';
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

const Register = ({register, handleSubmit, onSubmit, errors, watch}) => {
  
  return (
    <Fragment>
      <div>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              type="name"
              name="First Name"
              validation={{
                ...register("firstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/,
                    message: "Please enter a valid name"
                  }
                })
              }}
            />
            {errors.firstName && errors.firstName.message && (
              <HelpText color="red" paddingTop="5px">
                {errors.firstName.message}
              </HelpText>
            )}
            <Input
              type="name"
              name="Last Name"
              validation={{
                ...register("lastName", {
                  required: "Last name is required"
                })
              }}
            />
            {errors.lastName && errors.lastName.message && (
              <HelpText color="red" paddingTop="5px">
                {errors.lastName.message}
              </HelpText>
            )}
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
            {errors.email && errors.email.message && (
              <HelpText color="red" paddingTop="5px">
                {errors.email.message}
              </HelpText>
            )}
            <Input
              type="password"
              name="Password"
              validation={{
                ...register("password1", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=\D*\d)(?=[^a-zA-Z]*[a-zA-Z])\S{6,}$/,
                    message:
                      "Please enter a password more than 5 characters long, containing at least 1 letter, 1 number and 1 special character excluding space."
                  }
                })
              }}
            />
            {errors.password1 && errors.password1.message && (
              <HelpText color="red" paddingTop="5px">
                {errors.password1.message}
              </HelpText>
            )}

            <Input
              type="password"
              name="Confirm Password"
              validation={{
                ...register("password2", {
                  required: "Confirm Password is required",
                  validate: (val) => {
                    if (watch("password1") !== val) {
                      return "Your passwords do no match";
                    }
                  }
                })
              }}
            />
            {errors.password2 && errors.password2.message && (
              <HelpText color="red" paddingTop="5px">
                {errors.password2.message}
              </HelpText>
            )}
            <SubmitButtonContainer>
              <Button onSubmit={onSubmit} padding="4px 30px">
                {" "}
                Signup{" "}
              </Button>
            </SubmitButtonContainer>
          </Form>
        </div>
    </Fragment>
  );
};

Register.propTypes = {
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  watch: PropTypes.func,
  errors: PropTypes.object
}

Register.defaultProps = {
  register: () => {},
  handleSubmit: () => {},
  onSubmit: () => {},
  watch: () => {},
  errors: {}
}

export default Register;
