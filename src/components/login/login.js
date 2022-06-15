import React, { useState } from "react";
import "./login.css";
import "../header/header.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getUserData = async () => {
    const res = await fetch("http://localhost:3000/users");
    const json = await res.json();
    loginCheck(json);
  };

  const loginCheck = (loginRecords) => {
    if (email.length > 0 && password.length > 0) {
      const findRes = loginRecords.find((item) => {
        if (item.email === email && item.confirm_password === password) {
          sessionStorage.setItem("userLoggedIn", true);
          navigate("/home");
          return true;
        }
        return false;
      });
      if (!findRes) {
        toast("Please enter correct details");
      }
    } else {
      toast("Please enter email id and password");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    getUserData();
  };
  return (
    <>
      <Header />
      <main class="container">
        <div>
          <h1>Login</h1>
          <p>Get access to your Orders. Wishlist and Recommendations</p>
        </div>
        <form>
          <div class="form-field">
            <input
              type="email"
              class="form-field__input"
              name="email"
              id="email"
              placeholder=""
              autoComplete="email"
              value={email}
              area-label="email"
              area-required="true"
              aria-invalid="true"
              aria-errormessage="email is required"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label for="email" class="form-field__label">
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
              autoComplete="current-password"
              value={password}
              area-label="password"
              area-required="true"
              aria-invalid="true"
              aria-errormessage="password is required"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label for="password" class="form-field__label">
              Password
            </label>
            <div class="form-field__bar"></div>
          </div>
          <button class="btn btn--full" onClick={handleLogin}>
            Login
          </button>
        </form>
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Login;
