import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./Login.scss";
import { LoginText, LoginDescription } from "../../Constants/ConstantText";
import { userActions } from '../../_actions';
import { connect } from "react-redux";

const Login = (props) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    if (formData["email"] && formData["password"]) {
      props.login(email, password);
    }
  };

  return (
    <main className="login">
      <section className="title">
        <h2>{LoginText}</h2>
        <p>{LoginDescription}</p>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={formData.email}
            label="Email"
            onChange={handleChange}
            htmlFor="emailInput"
            ariaLabel="Email Input"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={formData.password}
            label="Password"
            onChange={handleChange}
            htmlFor="passwordInput"
            ariaLabel="Password Input"
            required
          />
          <CustomButton type="submit">{LoginText}</CustomButton>
          {
            props.loggingIn &&
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          }
        </form>
      </section>
    </main>
  );
}


function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };
