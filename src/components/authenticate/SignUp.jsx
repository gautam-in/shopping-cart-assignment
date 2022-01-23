import React from "react";
import TextInput from "../inputField/TextInput";
import { useForm } from "react-hook-form";
import {
  emailValidation,
  firstName,
  lastName,
  password,
} from "../utils/common";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/authenticate/actionCreator";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Sorry, Password and Confirm password didn't match");
      return;
    }

    dispatch(signUp(data));
    history.push("/login");
  };
  return (
    <div className="app-login">
      <div className="login-left">
        <h2>Signup</h2>
        <p>Get acess to your Orders ,Wishlist and Recommendations</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="login-right">
        <TextInput
          type="text"
          name="firstName"
          label="First name"
          rules={firstName}
          register={register}
          errors={errors}
          mandatory={true}
        />
        <TextInput
          type="text"
          name="lastName"
          label="Last name"
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
          label="Confirm password"
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