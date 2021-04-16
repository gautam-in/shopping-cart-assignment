import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { RegisterText } from "../../Constants/ConstantText";
import "./Register.scss";
import { userActions } from '../../_actions';
import { connect } from "react-redux";
import { formFieldValidations } from "../../_helpers";
import { labels } from "../../Constants";

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
    setFormData({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  const validate = () => {
    let validationObj = formFieldValidations(formData);
    let { errors, isValid } = validationObj;

    setFormData((values) => ({
      ...values,
      errors: errors
    }))

    return isValid;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      props.register(formData.user);
    }
  };

  return (
    <main className="register">
      <h2 aria-label="Register header title" tabIndex="7">{RegisterText}</h2>
      <form onSubmit={handleSubmit} aria-label="Register form to register a new user" tabIndex="8">
        <FormInput
          type="text"
          name="firstName"
          value={formData.user.firstName}
          label={labels.FIRST_NAME}
          onChange={handleChange}
          htmlFor="firstNameInput"
          ariaLabel="FirstName Input"
          tabIndex="9"
          errors={formData.errors}
          required
        />
        <FormInput
          type="text"
          name="lastName"
          value={formData.user.lastName}
          label={labels.LAST_NAME}
          onChange={handleChange}
          htmlFor="lastNameInput"
          ariaLabel="LastName Input"
          tabIndex="10"
          errors={formData.errors}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={formData.user.email}
          label={labels.EMAIL}
          onChange={handleChange}
          htmlFor="emailInput"
          ariaLabel="Email Input"
          tabIndex="11"
          errors={formData.errors}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={formData.user.password}
          label={labels.PASSWORD}
          onChange={handleChange}
          htmlFor="passwordInput"
          ariaLabel="Password Input"
          tabIndex="12"
          errors={formData.errors}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={formData.user.confirmPassword}
          label={labels.CONFIRM_PASSWORD}
          onChange={handleChange}
          htmlFor="confirmPasswordInput"
          ariaLabel="Confirm Password Input"
          tabIndex="13"
          errors={formData.errors}
          required
        />
        <CustomButton type="submit" tabIndex="14">{RegisterText}</CustomButton>
      </form>
    </main>
  );
}

const actionCreators = {
  register: userActions.register
}

export default connect(null, actionCreators)(Register);

