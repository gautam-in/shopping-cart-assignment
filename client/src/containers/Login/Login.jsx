import React from "react";
import "./Login.scss";
import Button from "../../components/UI/Button/Button";
import { withRouter } from "react-router";
import { LABEL } from "../../constants/constant";
import { getItem } from "../../service/Storage";
export function Login(props) {
  const [fields, setFields] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleValidation = () => {
    let errorField = {};
    let formIsValid = true;

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errorField["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errorField["email"] = "Email is not valid";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errorField["password"] = "Cannot be empty";
    }

    if (fields["password"] && fields["password"].length < 6) {
      formIsValid = false;
      errorField["password"] = "Minimum length must be of 6 characters";
    }
    const regex = /^[a-zA-Z0-9]+$/g;
    if (!regex.test(fields["password"])) {
      formIsValid = false;
      errorField["password"] = "Alpha numeric values allowed only";
    }

    setErrors(errorField);
    return formIsValid;
  };
  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const user = JSON.parse(getItem("registed_user"));
      if (user) {
        if (
          fields.email !== user &&
          user.email &&
          fields.password !== user &&
          user.password
        ) {
          setErrorMessage("Invalid email address or password");
        } else {
          props.history.push("/");
          setErrorMessage("");
          window.location.reload();
        }
      } else {
        setErrorMessage("Invalid email address or password");
      }
    } else {
      console.log("not passed");
    }
  };

  return (
    <section data-test="component-login">
      <span className="errorMessage">{errorMessage}</span>
      <main className="formContainer">
        <section className="formHeadingContainer">
          <h2>{LABEL.LOGIN}</h2>
          <p>{LABEL.ORDER_ACCESS}</p>
        </section>
        <form name="loginForm" className="loginForm" onSubmit={handleSubmit}>
          <section className="inputContainer">
            <section className="formGroup field">
              <input
                type="input"
                className="formField"
                name="email"
                id="email"
                onChange={handleChange}
                data-test="login-input-email"
              />
              <label for="name" className="formLabel">
                {LABEL.EMAIL}
              </label>
            </section>
            <span className="error">{errors["email"]}</span>
            <section class="formGroup field">
              <input
                type="password"
                className="formField"
                name="password"
                id="password"
                onChange={handleChange}
                data-test="login-input-password"
              />
              <label for="name" className="formLabel">
                {LABEL.PASSWORD}
              </label>
            </section>
            <span className="error">{errors["password"]}</span>
            <section className="formGroup field">
              <Button text="Login" className="buttonStyle" type="submit" />
            </section>
          </section>
        </form>
      </main>
    </section>
  );
}
export default withRouter(Login);
