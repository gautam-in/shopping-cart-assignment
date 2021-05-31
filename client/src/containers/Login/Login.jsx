import React from "react";
import "./Login.scss";
import Button from "../../components/UI/Button/Button";
import { withRouter } from "react-router";
function Login(props) {
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
      const user = JSON.parse(localStorage.getItem("registed_user"));
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
    <>
      <span style={{ color: "red", fontWeight: "600", marginLeft: "5%" }}>
        {errorMessage}
      </span>
      <main className="formContainer">
        <section className="formHeadingContainer">
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </section>
        <form name="loginForm" className="loginForm" onSubmit={handleSubmit}>
          <section className="inputContainer">
            <section className="formGroup field">
              <input
                type="input"
                className="formField"
                placeholder="Email"
                name="email"
                id="email"
                onChange={handleChange}
              />
              <label for="name" className="formLabel">
                Email
              </label>
            </section>
            <span className="error">{errors["email"]}</span>
            <section class="formGroup field">
              <input
                type="password"
                className="formField"
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleChange}
              />
              <label for="name" className="formLabel">
                Password
              </label>
            </section>
            <span className="error">{errors["password"]}</span>
            <section className="formGroup field">
              <Button text="Login" className="buttonStyle" type="submit" />
            </section>
          </section>
        </form>
      </main>
    </>
  );
}
export default withRouter(Login);
