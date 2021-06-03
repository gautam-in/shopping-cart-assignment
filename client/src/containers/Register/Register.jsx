import React from "react";
import "./Register.scss";
import Button from "../../components/UI/Button/Button";
import { withRouter } from "react-router";
export function Register(props) {
  const [fields, setFields] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const handleValidation = () => {
    let errorField = {};
    let formIsValid = true;

    if (!fields["first_name"]) {
      formIsValid = false;
      errorField["first_name"] = "Firstname cannot be empty";
    }
    if (!fields["last_name"]) {
      formIsValid = false;
      errorField["last_name"] = "Lastname cannot be empty";
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errorField["email"] = "Email cannot be empty";
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
      errorField["password"] = "Password cannot be empty";
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

    if (!fields["confirm_password"]) {
      formIsValid = false;
      errorField["confirm_password"] = "Confirm password cannot be empty";
    }
    if (fields["password"] !== fields["confirm_password"]) {
      formIsValid = false;
      errorField["confirm_password"] = "value does not match to the password";
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
      localStorage.setItem("registered_user", JSON.stringify(fields));
      props.history.push("/");
      window.location.reload();
    } else {
      console.log("not passed");
    }
  };

  return (
    <section data-test="component-register">
      <main className="formContainer">
        <section className="formHeadingContainer">
          <h2>Signup</h2>
          <p>We do not share your personal details with anyone.</p>
        </section>
        <form
          name="registerForm"
          className="registerForm"
          onSubmit={handleSubmit}
        >
          <section className="inputContainer">
            <section className="formGroup field">
              <input
                type="input"
                className="formField"
                placeholder="first_name"
                name="first_name"
                id="first_name"
                onChange={handleChange}
                data-test="register-input-firstname"
              />
              <label for="first_name" className="formLabel">
                First Name
              </label>
            </section>
            <span className="error">{errors["first_name"]}</span>
            <section className="formGroup field">
              <input
                type="input"
                className="formField"
                placeholder="last_name"
                name="last_name"
                id="last_name"
                onChange={handleChange}
                data-test="register-input-lastname"
              />
              <label for="last_name" className="formLabel">
                Last Name
              </label>
            </section>
            <span className="error">{errors["last_name"]}</span>
            <section className="formGroup field">
              <input
                type="input"
                className="formField"
                placeholder="Email"
                name="email"
                id="email"
                onChange={handleChange}
                data-test="register-input-email"
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
                data-test="register-input-password"
              />
              <label for="name" className="formLabel">
                Password
              </label>
            </section>
            <span className="error">{errors["password"]}</span>
            <section class="formGroup field">
              <input
                type="password"
                className="formField"
                placeholder="confirm_password"
                name="confirm_password"
                id="confirm_password"
                onChange={handleChange}
                data-test="register-input-cfpassword"
              />
              <label for="name" className="formLabel">
                Confirm Password
              </label>
            </section>
            <span className="error">{errors["confirm_password"]}</span>
            <section className="formGroup field">
              <Button text="Register" className="buttonStyle" />
            </section>
          </section>
        </form>
      </main>
    </section>
  );
}
export default withRouter(Register);
