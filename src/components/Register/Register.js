import React, { useState } from "react";
import { registerLabels } from "./Register.constants";
import { auth,db } from '../../config/firebase';
import { get } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import useForm from '../../common/custom.Hooks';
import { notify } from '../../utils/common';
import { useHistory } from "react-router-dom";
import { PRODUCT_ROUTE } from '../../routes/constants'
const Register = () => {
  const { signupForm } = registerLabels;
  const { inputs, handleChange, clearForm } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const history = useHistory();
  const signup = e => {
    e.preventDefault();
    if (inputs.password === inputs.confirmPassword) {
        auth.createUserWithEmailAndPassword(inputs.email, inputs.password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                firstName: inputs.firstName,
                lastName: inputs.lastName,
                email: inputs.email,
                password: inputs.password,
                confirmPassword: inputs.confirmPassword
            }).then(() => {
                notify(true, get(signupForm, "message.success"));
                clearForm();
                setTimeout(function() {
                  history.push(PRODUCT_ROUTE);
                }, 2000);
            }).catch(err => notify(false, err.message)); 
      }).catch(err => notify(false, err.message));
    }
    else {
        setPassError('Password and confirm password should match');
    }
}

  return (
    <div className="register">
      <aside>
        <h1>{get(signupForm, 'heading.text')}</h1>
        <p>{get(signupForm, 'heading.title')}</p>
      </aside>
      <section className="register-form">
        <form onSubmit={signup}>
          <input
            placeholder="First name"
            required
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
          />
          <input
            placeholder="Last name"
            value={inputs.lastName}
            name="lastName"
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            required
            value={inputs.email}
            name="email"
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            required
            value={inputs.password}
            name="password"
            onChange={handleChange}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            required
            value={inputs.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
          <button>{get(signupForm, 'button.text')}</button>
        </form>
      </section>
      <ToastContainer
            position="top-right"
            autoClose={false}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
      />
    </div>
    
  );
};

export default Register;