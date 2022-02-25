import React, { useState } from "react";
import CustomButton from "../Custom-Button/CustomButton";
import Button from "../Unit-Component/Button/Button";
import Input from "../Unit-Component/Input/Input";
import Label from "../Unit-Component/Label/Label";
import "./signIn.css";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const classes = props.classes;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState([]);

  const emailValidate = (value) => {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!emailRegex.test(value)) return "Wrong email";
    return undefined;
  };

  const passwordValidate = (value) => {
    if (!value || value.length < 6)
      return "Passwords must be more than 6 characters";
    return undefined;
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("registration sumbmit handler");

    let errors = {};
    let emailCheck = emailValidate(email);
    if (emailCheck) {
      errors["email"] = emailCheck;
    }

    let passwordCheck = passwordValidate(password);
    if (passwordCheck) errors["passwordCheck"] = passwordCheck;

    setFormErrors(errors);
    if (Object.keys(errors).length) {
      console.log(errors);
    } else {
      navigate("/home");
      console.log("Registation done, check you email");
    }
  };

  //unit component

  return (
    <div className="registartion-conatiner">
      <div className="left-section">
        <h1 className="header">Login</h1>
      </div>
      <div className="right-Section">
        <div className="loginCard">
          <div className="form">
            <form onSubmit={loginSubmitHandler}>
              <div>
                <Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ariaRequired="true"
                    ariaRequired="true"
                    ariaInvalid={formErrors.email ? true : null}
                    ariaDescribed={formErrors.email ? "emailIderror" : null}
                  />
                  <label htmlFor="email">Email</label>
                  {formErrors.email ? (
                    <span id="emailIderror">{formErrors.email}</span>
                  ) : null}
                </Label>
              </div>
              <div>
                <Label>
                  <Input
                    id="passInput"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ariaRequired="true"
                    ariaInvalid={formErrors.passwordCheck ? true : null}
                    ariaDescribed={
                      formErrors.passwordCheck ? "passwordIderror" : null
                    }
                  />
                  <label htmlFor="passInput">Password</label>
                  {formErrors.passwordCheck ? (
                    <span id="passwordIderror">{formErrors.passwordCheck}</span>
                  ) : null}
                </Label>
              </div>

              <div
                style={{ marginTop: "10px", marginTop: "50px", width: "91%" }}
              >
                <CustomButton type="submit">Login</CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
