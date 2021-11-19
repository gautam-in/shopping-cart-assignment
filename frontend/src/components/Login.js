import {
  FormContainer,
  FormDescription,
  FormStyles,
} from "./styles/formStyles";
import useForm from "../lib/useForm";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Login() {
  const { inputs, handleChange, clearForm, validate } = useForm({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    setFormError(validate(inputs));
    if (Object.keys(formError).length === 0) {
      const local = JSON.parse(localStorage.getItem("creds"));
      if (local.email === inputs.email && local.password === inputs.password) {
        setIsSubmit(true);
        localStorage.setItem('isLogged', true);
        setTimeout(function () {
          history.push("/home");
        }, 3000);
      }
    }
  };
  return (
    <FormContainer>
      <FormDescription>
        <h2>Login</h2>
        <p>Get access to your orders, Whishlist and Recommendations</p>
      </FormDescription>
      <FormStyles onSubmit={submitHandler}>
        {Object.keys(formError).length === 0 && isSubmit && (
          <p>Registered Successfully</p>
        )}
        <fieldset>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Your Email Address"
              autoComplete="email"
              value={inputs.email}
              onChange={handleChange}
            />
            <small>{formError.email}</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="password"
              value={inputs.password}
              onChange={handleChange}
            />
            <small>{formError.password}</small>
          </div>
          <button type="submit">Login In!</button>
        </fieldset>
      </FormStyles>
    </FormContainer>
  );
}
