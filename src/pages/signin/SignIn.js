import React, { useState, useContext, useRef} from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { useHistory} from 'react-router-dom';

import './SignIn.scss';

const SignIn = () => {

  const {isLoggedIn, setLoggedIn} = useContext(AuthContext);
  const [errMsg, setErrMsg] = useState('');
  const history = useHistory();

  const submitBtn = useRef();

  const onFormSubmit = ev => {
    ev.preventDefault();
    submitBtn.current.style.opacity = '0.6';
    submitBtn.current.disabled = true;
    submitBtn.current.innerHTML = 'Logging in';
    const formData = new FormData(ev.target);
    const registeredUsers = JSON.parse(localStorage.getItem('userList'));
    if(registeredUsers) {
      const user = registeredUsers.filter(user => {
        if(user.email == formData.get('email') && user.password == formData.get('password')) {
          return user;
        }
      })[0];
      if(user) {
        localStorage.setItem('loggedInUser',JSON.stringify(user.email) || []);
        
        setTimeout(() => {
          setLoggedIn(true);
          history.push('/');
        }, 2000);
      }
    }
    else {
      submitBtn.current.innerHTML = 'Login';
      setErrMsg('User not found. Please register first');
    } 
  };

  const onFormChange = () => setErrMsg('');

  return (
    <div className="signin-container">
      <div className="signin-left">
        <h1>Login</h1>
        <span>Get access to your Orders, Wishlist and Recommendations</span>     
      </div>
      <div className="signin-right">
        <form onChange={onFormChange} onSubmit={onFormSubmit} action="" method="post">
          <div className="form-row">
            <input type="email" name="email" autoComplete="off" autoFocus required />
            <label className="floating-label">Email</label>
          </div>
          <div className="form-row">
            <input type="password" name="password" autoComplete="off" required />
            <label className="floating-label">Password</label>
          </div>
          {errMsg && <div className="err-msg">{errMsg}</div>}
          <button ref={submitBtn} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;