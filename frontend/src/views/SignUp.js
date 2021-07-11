import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const SignUpStyles = styled.div`
  .login-text {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    margin: 5% 0% 5% 15%;
    .login-text {
      align-items: flex-start;
      text-align: start;
    }
  }
  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    margin: 5% 0% 5% 15%;
  }
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 40%);
    margin: 5% 0% 5% 15%;
  }
`;

const Form = styled.form`
  border: 5px solid white;
  padding: 10px;
  font-size: 1.5rem;
  line-height: 1.5;
  fieldset {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 100%;
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    .field-group {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      text-align: left;
      label {
        color: var(--lightblue);
        position: relative;
        opacity: 0;
        bottom: -5px;
        transition: 0.6s opacity;
      }
      input,
      textarea,
      select {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border: none;
        margin-bottom: 3rem;
        border-bottom: 2px solid var(--lightGray);
        ::placeholder {
          color: var(--lightGray);
          transition: 0.6s color;
        }
        &:focus {
          outline: 0;
          border-color: var(--lightblue);
          ::placeholder {
            color: transparent;
            transition: 0.6s color;
          }
          + label {
            opacity: 1;
            transition: 0.6s opacity;
          }
        }
      }
    }
  }
`;

export default function SignUp() {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    'confirm-password': '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User ${inputs.firstname} registered successfully`);

    let userDB = JSON.parse(localStorage && localStorage.getItem('users'));
    userDB.push(inputs);
    localStorage && localStorage.setItem('users', JSON.stringify(userDB));

    history.push('/signin');
  };

  return (
    <SignUpStyles>
      <div className='login-text'>
        <div>
          <h2>Signup</h2>
        </div>
        <h5>We do not share your personal details with anyone</h5>
      </div>
      <Form method='POST' onSubmit={handleSubmit}>
        <fieldset>
          <div className='field-group'>
            <input
              type='text'
              name='firstname'
              placeholder=' First Name'
              autoComplete='firstname'
              value={inputs.fisrName}
              onChange={handleChange}
            />
            <label htmlFor='firstname'>First Name</label>
          </div>
          <div className='field-group'>
            <input
              type='text'
              name='lastname'
              placeholder='Last Name'
              autoComplete='lastname'
              value={inputs.lastname}
              onChange={handleChange}
            />
            <label htmlFor='lastname'>Last Name</label>
          </div>
          <div className='field-group'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              autoComplete='email'
              value={inputs.email}
              onChange={handleChange}
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className='field-group'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              autoComplete='password'
              value={inputs.password}
              onChange={handleChange}
            />
            <label htmlFor='password'>Password</label>
          </div>
          <div className='field-group'>
            <input
              type='password'
              name='confirm-password'
              placeholder='Confirm Password'
              autoComplete='confirm-password'
              value={inputs['confirm-password']}
              onChange={handleChange}
            />
            <label htmlFor='confirm-password'>Confirm Password</label>
          </div>

          <button>Signup</button>
        </fieldset>
      </Form>
    </SignUpStyles>
  );
}
