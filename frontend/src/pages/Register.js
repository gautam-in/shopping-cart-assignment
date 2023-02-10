import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../Features/user/userSlice";
import FormControl from "../components/layout/FormControl";
import Modal from "../components/layout/Modal";

function Register() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {},
  });
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClose = () => {
    setIsOpen(false);
    navigate("/");
  };

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

    if (!user.firstName) {
      formIsValid = false;
      errors["firstName"] = "Please enter your First Name";
    }
    if (!user.lastName) {
      formIsValid = false;
      errors["lastName"] = "Please enter your Last Name";
    }

    if (user.email === "") {
      formIsValid = false;
      errors["email"] = "Please enter your email address";
    }
    if (user.email) {
      //regular expression for email validation
      let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!pattern.test(user.email)) {
        formIsValid = false;
        errors["email"] = "Please enter valid email address";
      }
    }
    if (!user.password) {
      formIsValid = false;
      errors["password"] = "Please enter your password";
    }
    if (!user.confirmPassword) {
      formIsValid = false;
      errors["confirmPassword"] = "Please confirm your password";
    }

    if (user.password) {
      if (!user.password.match(/^.*(?=.*[a-z])(?=.*[0-9])(?=.{6,}).*$/)) {
        formIsValid = false;
        errors["password"] =
          "Password should have minimum 6 charecters and should contain numbers and alphabet";
      }
    }

    if (user.confirmPassword) {
      if (
        !user.confirmPassword.match(/^.*(?=.*[a-z])(?=.*[0-9])(?=.{6,}).*$/)
      ) {
        formIsValid = false;
        errors["confirmPassword"] =
          "Password should have minimum 6 charecters and should contain numbers and alphabet";
      }
    }

    if (user.password && user.confirmPassword) {
      if (user.password != user.confirmPassword) {
        errors["confirmPassword"] = "Password did not match";
      } else {
        errors["confirmPassword"] = "";
      }
    }

    setUser({ ...user, errors });
    //document.getElementById(errorMsg).focus(); //puts focus on field with error
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // alert("Registration successful");
      setIsOpen(true);
      if (isOpen) {
        const focusEle = document.getElementById("alert-message");
        focusEle.focus();
      }
      dispatch(
        register({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        })
      );
    }
  };

  return (
    <>
      <section className="register">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-5">
            <h1 aria-label="Sign Up" tabIndex="0">
              Sign Up
            </h1>
            <p tabIndex="0">
              We do not share your personals details with anyone.
            </p>
            <small tabIndex="0">
              (<span style={{ color: "red" }}>*</span>) marked all fields are
              mandatory.{" "}
            </small>
          </div>
          <div className="col-sm-6 col-md-5">
            <form action="" onSubmit={handleSubmit}>
              <FormControl
                label="first name"
                type="text"
                name="firstName"
                handleChange={handleChange}
                value={user.firstName}
                errorMsg={user.errors.firstName}
              />
              <FormControl
                label="last name"
                type="text"
                name="lastName"
                handleChange={handleChange}
                value={user.lastName}
                errorMsg={user.errors.lastName}
              />

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

              <FormControl
                label="confirm password"
                type="password"
                name="confirmPassword"
                handleChange={handleChange}
                value={user.confirmPassword}
                errorMsg={user.errors.confirmPassword}
              />

              <input type="submit" value="Register" />
            </form>
          </div>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        message={"Registration successful"}
      />
    </>
  );
}
export default Register;
