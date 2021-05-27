import React from "react";
import "./loginsignUp.scss";
import TextInput from "../common/TextInput";
import { emailValidation, password } from "../../utils/validationRules";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let authenticated = false;
  const signUpDetail = useSelector((state) => state.getAuthDetail.signUp);
  const history = useHistory();
  const onSubmit = (data) => {
    signUpDetail.forEach((detail) => {
      if (detail.email === data.email && detail.password === data.password) {
        history.push("/product");
        authenticated = true;
      }
    });
    if (!authenticated) {
      alert("Kindly signup before you Login");
    }
  };
  return (
    <div className="app-login">
      <div className="left-block">
        <h2>Login</h2>
        <p>Get acess to orders , Wishlist and Recommendations.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="right-block">
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
          rules={password}
          register={register}
          errors={errors}
        />
        <button className="app-btn"> Login</button>
      </form>
    </div>
  );
}

export default Login;
