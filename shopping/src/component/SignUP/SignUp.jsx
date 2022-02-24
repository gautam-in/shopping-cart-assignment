import React, { useState } from "react";
import CustomButton from "../Custom-Button/CustomButton";
import Button from "../Unit-Component/Button/Button";
import Input from "../Unit-Component/Input/Input";
import Label from "../Unit-Component/Label/Label";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const classes = props.classes;
  const navigate = useNavigate();

  const [userRegistration, setuserRegistartion] = useState([
    {
      firstname: "",
      lastName: "",
      email: "",
      password: "",
    },
  ]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [formErrors, setFormErrors] = useState({});

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

  const firsNameValidate = (value) => {
    if (!value || value.length === 0) return "Enter first name";
    return undefined;
  };

  const lastNameValidate = (value) => {
    if (!value || value.length === 0) return "Enter last name";
    return undefined;
  };

  const repeatValidate = (val1, val2) =>
    !val1 || val2 !== val1 ? "Password mismatch" : undefined;

  const registrationSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("registration sumbmit handler");

    let errors = {};
    let emailCheck = emailValidate(email);
    if (emailCheck) {
      errors["email"] = emailCheck;
    }

    let fName = firsNameValidate(firstName);
    if (fName) errors["firstName"] = fName;

    let lName = lastNameValidate(lastName);
    if (lName) errors["lastName"] = lName;

    let passwordCheck = passwordValidate(password);
    if (passwordCheck) errors["passwordCheck"] = passwordCheck;

    let repeatCheck = repeatValidate(password, repeatPassword);
    if (repeatCheck) errors["repeaCheck"] = repeatCheck;

    setFormErrors(errors);
    if (Object.keys(errors).length) {
      console.log(errors);
    } else {
      console.log(email);

      setuserRegistartion({
        ...userRegistration,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      console.log(userRegistration);
      //  navigate("/");
      console.log("Registation done, check you email");
    }
  };

  //unit component

  return (
    <div className="registartion-conatiner">
      <div className="left-section">
        <h1 className="header">Sign Up</h1>
      </div>
      <div className="right-Section">
        <div className="loginCard">
          <div className="form">
            <form onSubmit={registrationSubmitHandler}>
              <div>
                <Label>
                  <label htmlFor="fName">First Name</label>
                  <Input
                    id="fName"
                    value={firstName}
                    onChange={(e) => setFirst(e.target.value)}
                    ariaRequired="true"
                    ariaInvalid={formErrors.firstName ? true : null}
                    ariaDescribed={formErrors.firstName ? "fnameIderror" : null}
                  />
                  {formErrors.firstName ? (
                    <span id="fnameIderror">{formErrors.firstName}</span>
                  ) : null}
                </Label>
              </div>

              <div>
                <Label>
                  <label htmlFor="lName">Last Name</label>
                  <Input
                    id="lName"
                    value={lastName}
                    onChange={(e) => setLast(e.target.value)}
                    ariaRequired="true"
                    ariaRequired="true"
                    ariaInvalid={formErrors.lastName ? true : null}
                    ariaDescribed={formErrors.lastName ? "lnameIderror" : null}
                  />
                  {formErrors.lastName ? (
                    <span id="lnameIderror">{formErrors.lastName}</span>
                  ) : null}
                </Label>
              </div>
              <div>
                <Label>
                  <label htmlFor="email">Email</label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ariaRequired="true"
                    ariaRequired="true"
                    ariaInvalid={formErrors.email ? true : null}
                    ariaDescribed={formErrors.email ? "emailIderror" : null}
                  />
                  {formErrors.email ? (
                    <span id="emailIderror">{formErrors.email}</span>
                  ) : null}
                </Label>
              </div>
              <div>
                <Label>
                  <label htmlFor="passInput">Password</label>
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
                  {formErrors.passwordCheck ? (
                    <span id="passwordIderror">{formErrors.passwordCheck}</span>
                  ) : null}
                </Label>
              </div>

              <div>
                <Label>
                  <label htmlFor="repeatPassinput">Confirmed password</label>
                  <Input
                    id="repeatPassinput"
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    ariaRequired="true"
                    ariaInvalid={formErrors.repeaCheck ? true : null}
                    ariaDescribed={
                      formErrors.repeaCheck ? "repeatIderror" : null
                    }
                  />
                  {formErrors.repeaCheck ? (
                    <span id="repeatIderror">{formErrors.repeaCheck}</span>
                  ) : null}
                </Label>
              </div>

              <div
                style={{ marginTop: "10px", marginTop: "50px", width: "91%" }}
              >
                <CustomButton type="submit">Sign Up</CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
