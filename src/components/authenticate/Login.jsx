import React from "react";
import "./styles.css";
import TextInput from "../inputField/TextInput";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { emailValidation, password } from "../utils/common";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let authenticated = false;
  const signUpDetails = useSelector((state) => state.getAuthenticateDetails.signUp);
  const history = useHistory();
  const onSubmit = (data) => {
    signUpDetails.forEach((detail) => {
      if (detail.email === data.email && detail.password === data.password) {
        history.push("/product");
        authenticated = true;
      }
    });
    if (!authenticated) {
      alert("Please signup before you Login to the app");
    }
  };
  return (
    <div className="app-login">
      <div className="login-left">
        <h2>Login</h2>
        <p>Get acess to your Orders ,Wishlist and Recommendations</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="login-right">
        <TextInput
          type="text"
          name="email"
          rules={emailValidation}
          register={register}
          errors={errors}
          label="Email"/>
        <TextInput
          type="password"
          name="password"
          label="Password"
          rules={password}
          register={register}
          errors={errors}/>
        <button className="app-btn"> Login</button>
      </form>
    </div>
  );
}