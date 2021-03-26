import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { RegisterText } from "../../Constants/ConstantText";
import "./Register.scss";
import { userActions } from '../../_actions';
import { connect } from "react-redux";

const Register = (props) => {

  const [formData, setFormData] = useState({
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    errors: {}
  })

  const handleChange = (event) => {
    const { value, name } = event.target;
    const { user } = formData;
    debugger;
    setFormData({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!formData.user["firstName"]) {
      isValid = false;
      errors["firstName"] = "Please enter First Name.";
    }

    if (!formData.user["lastName"]) {
      isValid = false;
      errors["lastName"] = "Please enter Last Name.";
    }

    if (typeof formData.user["email"] !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(formData.user["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!formData.user["password"]) {
      isValid = false;
      errors["password"] = "Please enter password.";
    }

    if (typeof formData.user["password"] !== "undefined") {

      // var pattern = new RegExp(/^(?=.*[a-z])(?=.*[0-9])(?=.{7,})/i);
      var pattern = new RegExp(/^(?=.*[a-z])(?=.*[0-9])(?=.{7,})/i);
      if (!pattern.test(formData.user["password"])) {
        isValid = false;
        errors["password"] = "Please enter valid password.";
      }
    }
    if (!formData.user["confirmPassword"]) {
      isValid = false;
      errors["confirmPassword"] = "Please enter confirm password.";
    }
    if (typeof formData.user["password"] !== "undefined" && typeof formData.user["confirmPassword"] !== "undefined") {
      if (formData.user["password"] != formData.user["confirmPassword"]) {
        isValid = false;
        errors["confirmPassword"] = "Passwords don't match.";
      }
    }
    setFormData((values) => ({
      ...values,
      errors: errors
    }))

    return isValid;
  }

  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    if (validate()) {
      props.register(formData.user);
    }
  };

  return (
    <main className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="firstName"
          value={formData.user.firstName}
          label="First Name"
          onChange={handleChange}
          htmlFor="firstNameInput"
          ariaLabel="FirstName Input"
          errors={formData.errors}
          required
        />
        <FormInput
          type="text"
          name="lastName"
          value={formData.user.lastName}
          label="Last Name"
          onChange={handleChange}
          htmlFor="lastNameInput"
          ariaLabel="LastName Input"
          errors={formData.errors}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={formData.user.email}
          label="Email"
          onChange={handleChange}
          htmlFor="emailInput"
          ariaLabel="Email Input"
          errors={formData.errors}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={formData.user.password}
          label="Password"
          onChange={handleChange}
          htmlFor="passwordInput"
          ariaLabel="Password Input"
          errors={formData.errors}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={formData.user.confirmPassword}
          label="Confirm Password"
          onChange={handleChange}
          htmlFor="confirmPasswordInput"
          ariaLabel="Confirm Password Input"
          errors={formData.errors}
          required
        />
        <CustomButton type="submit">{RegisterText}</CustomButton>
      </form>
    </main>
  );
}


function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(Register);
export { connectedRegisterPage as Register };

