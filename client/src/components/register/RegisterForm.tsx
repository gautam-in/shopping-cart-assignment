import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAppStore from '../../utils/store/store';
import InputField from '../global/InputField';

function RegisterForm() {
  const { register } = useAppStore();
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user.firstName && user.password) {
      register(user.email);
      navigate('/');
    }
  };
  return (
    <div className="login">
      <div>
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone</p>
      </div>
      <form onSubmit={handleRegister}>
        <InputField
          type="text"
          label="First Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser((val) => ({ ...val, firstName: e.target.value }))
          }
        />
        <InputField
          type="text"
          label="Last Name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser((val) => ({ ...val, lastName: e.target.value }))
          }
        />
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
        <InputField
          type="password"
          label="Confirm password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUser((val) => ({ ...val, password: e.target.value }))
          }
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default RegisterForm;
