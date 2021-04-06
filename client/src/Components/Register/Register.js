import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import { RegisterText } from "../../Constants/ConstantText";
import "./Register.scss";
import { userActions } from '../../_actions';
import { connect } from "react-redux";
import { formFieldValidations } from "../../_helpers";

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
        {
          props.registering &&
          <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        }
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

