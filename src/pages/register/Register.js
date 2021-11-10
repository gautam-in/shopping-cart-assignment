import React, {useState} from 'react'; 

import { useHistory } from 'react-router-dom';

import './Register.scss';

const Register = () => {

  const [errMsg, setErrMsg] = useState('');

  const history = useHistory();

  const onEmailChange = ev => {
    const field = ev.currentTarget;
    if(field.value == '') {
      field.classList.remove('email');
      return;
    }
    field.classList.add('email');
  };

  const onFormChange = () => setErrMsg('');

  const onSubmit = ev => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    
    if(formData.get('password') !== formData.get('cpassword')) {
      setErrMsg('Passwords dont match');
    }
    else {
      let user = {};
      for(const key of formData.keys()) {
        user[key] = formData.get(key);
      }
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(user);
      localStorage.setItem('userList', JSON.stringify(users));
      setTimeout(() => history.push('/signin'), 500);
    }
  };

  return(
    <div className="register-container">
      <div className="register-left">
        <h1>Signup</h1>
        <span>We do not share your personal details with anyone.</span>     
      </div>
      <div className="register-right">
        <form onChange={onFormChange} onSubmit={onSubmit} method="post" id="register-form">
          <div className="form-row">
            <input type="text" name="firstname" autoComplete="off" autoFocus required/>
            <label className="floating-label">FirstName</label>
          </div>
          <div className="form-row">
            <input type="text" name="lastname" autoComplete="off" required/>
            <label className="floating-label">LastName</label>
          </div>
          <div className="form-row">
            <input onChange={onEmailChange} type="email" name="email" autoComplete="off" required />
            <label className="floating-label">Email</label>
          </div>
          <div className="form-row">
            <input type="password" name="password" autoComplete="off" required />
            <label className="floating-label">Password</label>
          </div>
          <div className="form-row">
            <input type="password" name="cpassword" autoComplete="off" required />
            <label className="floating-label">Confirm Password</label>
          </div>
          {errMsg && <div className="err-msg">{errMsg}</div>}
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Register;