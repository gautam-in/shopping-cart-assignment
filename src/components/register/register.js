import React, { useState } from "react";
import "./register.css";
import "../header/header.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const registerUser = async () => {
    const obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };
    try {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.accessToken) {
            toast("success");
            navigate("/");
          } else {
            toast(res);
          }
        });
    } catch (err) {
      console.error(err);
    }

    // try {
    //   await fetch("http://localhost:3000/users", {
    //     method: "POST",
    //     //  mode: "no-cors",

    //     body: JSON.stringify(obj),
    //   }).then(console.log("success"));
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      email.length > 0 &&
      password.length > 0 &&
      firstName.length > 0 &&
      lastName.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (validatePassword.test(password)) {
        if (password === confirmPassword) {
          registerUser();
        } else {
          toast("password and confirm password must be same.");
        }
      } else {
        toast(
          "password must contain at least 6 characters, including uppercase, lowercase and numbers."
        );
      }
    } else {
      toast("please enter all the details for registration");
    }
  };
  return (
    <>
      <Header />
      <main class="container">
        <div>
          <h1>Signup</h1>
          <p>We do not share your personal details with anyone</p>
        </div>
        <form>
          <div class="form-field">
            <input
              type="firstName"
              class="form-field__input"
              name="firstName"
              id="firstName"
              placeholder=""
              area-required="true"
              area-label="first name"
              aria-invalid="true"
              aria-errormessage="fisrt name is required"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="firstName" class="form-field__label">
              First Name
            </label>
            <div class="form-field__bar"></div>
          </div>

          <div class="form-field">
            <input
              type="lastName"
              class="form-field__input"
              name="lastName"
              id="lastName"
              placeholder=""
              area-required="true"
              area-label="last name"
              t
              aria-invalid="true"
              aria-errormessage="last name is required"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="lastName" class="form-field__label">
              Last Name
            </label>
            <div class="form-field__bar"></div>
          </div>

          <div class="form-field">
            <input
              type="email"
              class="form-field__input"
              name="email"
              id="email"
              placeholder=""
              area-required="true"
              area-label="email"
              aria-invalid="true"
              aria-errormessage="email is required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email" class="form-field__label">
              Email
            </label>
            <div class="form-field__bar"></div>
          </div>
          <div class="form-field">
            <input
              type="password"
              class="form-field__input"
              name="password"
              id="password"
              placeholder=""
              area-required="true"
              area-label="password"
              aria-invalid="true"
              aria-errormessage="password is required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password" class="form-field__label">
              Password
            </label>
            <div class="form-field__bar"></div>
          </div>

          <div class="form-field">
            <input
              type="confirmPassword"
              class="form-field__input"
              name="confirmPassword"
              id="confirmPassword"
              placeholder=""
              area-required="true"
              area-label="confirm password"
              aria-invalid="true"
              aria-errormessage="confirm password is required"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label htmlFor="confirmPassword" class="form-field__label">
              Confirm Password
            </label>
            <div class="form-field__bar"></div>
          </div>
          <button class="btn btn--full" onClick={handleRegister}>
            Signup
          </button>
        </form>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default Register;
