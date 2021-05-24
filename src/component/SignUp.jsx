import React from "react";
import TextInput from "./reusable/TextInput";
import { useForm } from "react-hook-form";
import { emailValidation } from "../utils/validationRules";
import "../stylesheet/custom/loginsignUp.scss";
import { useDispatch } from "react-redux";
import { signUp } from "../redux/auth/actionCreator";
import { useHistory } from "react-router-dom";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(signUp(data));
    history.push("/login");
  };
  return (
    <div className="app-login">
      <div className="left-block">
        <h2>Signup</h2>
        <p>Get acess to orders , Wishlist and Recommendations.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="right-block">
        <TextInput
          type="text"
          name="firstName"
          label="First Name"
          rules={{
            minLength: {
              value: 2,
              message: `Your  First Name is too Short`,
            },
            maxLength: {
              value: 20,
              message: `Your  First Name is too Short`,
            },
          }}
          register={register}
          errors={errors}
        />
        <TextInput
          type="text"
          name="LastName"
          label="Last Name"
          rules={{
            minLength: {
              value: 2,
              message: "Your Last Name is too Short",
            },
            maxLength: {
              value: 20,
              message: "Your Last Name is too Big",
            },
          }}
          register={register}
          errors={errors}
        />
        <TextInput
          type="text"
          name="email"
          rules={emailValidation}
          register={register}
          errors={errors}
          label="Email"
        />
        <TextInput
          type="password"
          name="password"
          label="Password"
          rules={{
            minLength: {
              value: 5,
              message: "Your Password is too Short",
            },
          }}
          register={register}
          errors={errors}
        />
        <TextInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          rules={{
            minLength: {
              value: 5,
              message: "Your Password is too Short",
            },
          }}
          register={register}
          errors={errors}
        />
        <button className="app-btn"> Login</button>
      </form>
    </div>
  );
}

export default SignUp;
