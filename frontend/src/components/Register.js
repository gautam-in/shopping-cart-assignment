import {
  FormContainer,
  FormDescription,
  FormStyles,
} from "./styles/formStyles";
import useForm from "../lib/useForm";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
export default function Register() {
  const { inputs, handleChange, clearForm, validate } = useForm({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    setFormError(validate(inputs));
    if (Object.keys(formError).length === 0) {
      localStorage.setItem('creds', JSON.stringify(inputs));
      setIsSubmit(true);
      setTimeout(function () { history.push('/login'); }, 3000);
    }
    clearForm();
  };

  return (
    <FormContainer>
      <FormDescription>
        <h2>Register</h2>
        <p>We do not share your personal info with anyone Relax!!</p>
      </FormDescription>
      <FormStyles onSubmit={submitHandler}>
        {(Object.keys(formError).length === 0 && isSubmit) && <p>Registered Successfully</p>}
        <fieldset>
          <div className="form-control">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Your First Name"
              autoComplete="firstname"
              value={inputs.firstname}
              onChange={handleChange}
            />
            <small>{formError.firstname}</small>
          </div>
          <div className="form-control">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Your Last Name"
              autoComplete="lastname"
              value={inputs.lastname}
              onChange={handleChange}
            />
            <small>{formError.lastname}</small>
          </div>
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
          <div className="form-control">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              autoComplete="password2"
              value={inputs.password2}
              onChange={handleChange}
            />
            <small>{formError.password2}</small>
          </div>
          <button type="submit">Register</button>
        </fieldset>
      </FormStyles>
    </FormContainer>
  );
}
