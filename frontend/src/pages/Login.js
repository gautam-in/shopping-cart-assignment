import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "../layout/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { addItemToLocalstorage } from "../utilities/localstorageUser";
import { toggleLogin } from "../Features/user/userSlice";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    errors: {},
  });
  const regiUser = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(user.errors).length > 0) {
      const firstError = Object.keys(user.errors)[0];
      const focusEle = document.getElementById(firstError);
      focusEle.focus();
    }
  }, [user.errors]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!user.email) {
      formIsValid = false;
      errors["email"] = "Please enter your email address";
    }

    if (!user.password) {
      formIsValid = false;
      errors["password"] = "Please enter your password";
    }

    if (user.email && user.password) {
      if (regiUser !== null) {
        if (
          user.email === regiUser.email &&
          user.password === regiUser.password
        ) {
          formIsValid = true;
        } else {
          errors["password"] = "Invalid email or password";
          formIsValid = false;
        }
      } else {
        errors["password"] = "No such user exists.";
        formIsValid = false;
      }
    }

    setUser({ ...user, errors });
    //document.getElementById(errorMsg).focus(); //puts focus on field with error
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      addItemToLocalstorage("user", JSON.stringify(regiUser));
      dispatch(toggleLogin());
      alert("Login successful");
      navigate("/");
    }
  };

  return (
    <section className="register">
      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-5">
          <h1 aria-label="Login" tabIndex="0">
            Login
          </h1>
          <p tabIndex="0">
            Get access to your wishlists, orders and recomendations.
          </p>
          <small tabIndex="0">
            (<span style={{ color: "red" }}>*</span>) marked all fields are
            mandatory.{" "}
          </small>
        </div>
        <div className="col-sm-6 col-md-5">
          <form action="" onSubmit={handleSubmit}>
            <FormControl
              label="email"
              type="email"
              name="email"
              handleChange={handleChange}
              value={user.email}
              errorMsg={user.errors.email}
            />

            <FormControl
              label="password"
              type="password"
              name="password"
              handleChange={handleChange}
              value={user.password}
              errorMsg={user.errors.password}
            />

            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
