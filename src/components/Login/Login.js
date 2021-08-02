import React  from 'react';
import { loginLabels } from './Login.constants';
import { get } from 'lodash';
import { auth } from '../../config/firebase';
import { PRODUCT_ROUTE } from '../../routes/constants'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import useForm from '../../common/custom.Hooks';
import { notify } from '../../utils/common';
const Login = () => {
  const history = useHistory();
  const { loginForm } = loginLabels;
  const { inputs, handleChange, clearForm } = useForm({
    email: '',
    password: ''
  });

  const userLogin = e => {
    e.preventDefault();
      auth.signInWithEmailAndPassword(inputs.email, inputs.password).then(() => {
        clearForm()
        history.push(PRODUCT_ROUTE);
      }).catch(err => {
          notify(false, err.message);
      });
  }
  return (
    <div className="sign-in">
      <aside>
        <h1>{get(loginForm, 'heading.text')}</h1>
        <p>{get(loginForm, 'heading.title')}</p>
      </aside>
      <section  className="register-form">
        <form onSubmit={userLogin}>
          <input
            placeholder="Email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={inputs.password}
            name="password"
            onChange={handleChange}
            required
          />
          <button>{get(loginForm, 'button.text')}</button>
        </form>
      </section>
      <ToastContainer
            position="top-right"
            autoClose={5000}
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
}

export default Login
