/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../../utils/store/store';
import InputField from '../global/InputField';

function LoginForm() {
  const { login } = useAppStore();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user.email && user.password) {
      login(user.email);
      navigate('/');
    }
  };
  return (
    <div className="login">
      <div>
        <h2>Login</h2>
        <p>Get access to your orders, Wishlist and Recommendations</p>
      </div>
      <form onSubmit={handleLogin}>
        <InputField
          type="Email"
          label="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser((val) => ({ ...val, email: e.target.value }))
          }
        />
        <InputField
          type="password"
          label="Password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser((val) => ({ ...val, password: e.target.value }))
          }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
