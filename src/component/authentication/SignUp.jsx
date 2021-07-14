import React from "react";
import TextInput from "../common/TextInput";
import { useForm } from "react-hook-form";
import {
  emailValidation,
  firstName,
  lastName,
  password,
} from "../../utils/validationRules";
import "./loginsignUp.scss";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/actionCreator";
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
    if (data.password !== data.confirmPassword) {
      alert("Your Password and Confirm password are not same");
      return;
    }

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
          rules={firstName}
          register={register}
          errors={errors}
          mandatory={true}
        />
        <TextInput
          type="text"
          name="lastName"
          label="Last Name"
          rules={lastName}
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
          mandatory={true}
        />
        <TextInput
          type="password"
          name="password"
          label="Password"
          rules={password}
          register={register}
          errors={errors}
          mandatory={true}
        />
        <TextInput
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          rules={password}
          register={register}
          errors={errors}
          mandatory={true}
        />
        <button className="app-btn"> Signup</button>
      </form>
    </div>
  );
}

export default SignUp;
