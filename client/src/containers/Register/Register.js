import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Styled from "styled-components";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import HelpText from "../../components/Typography/HelpText";
import AuthContext from "../../store/Auth/Context";

const Form = Styled.form`
  width: 500px;
`;

const SubmitButtonContainer = Styled.div`
  margin-top: 30px;
`;

const Register = () => {

  const history = useHistory();
  const authContext = useContext(AuthContext);

  const { authenticationSucess, isAuthenticated } = authContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur"
  });

  useEffect(() => {
    if(isAuthenticated){
      history.push('/')
    }
  },[isAuthenticated])

  const onSubmit = (data) => {
    authenticationSucess(data)
    reset();
  };
  
  return (
    <>
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
    </>
  );
};

export default Register;

// /^(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.[!@$*\-\(\\)])[^[\]^%?~`<>{}=+_|"':;\.,#&\/\\\s]{8,20}$/

// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/

//
