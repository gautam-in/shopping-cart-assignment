import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Button from '../../components/Button/Button';
import FormInput from '../../components/FormInput/FormInput';

import { login } from './../../redux/User/actions';
import { validate } from './../../utils/helpers';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Form = styled.form`
  width: 35%;
  input[type=text] {
    -webkit-text-security: disc;
    text-security: disc;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
`;

const LoginPage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: '',
    pwd: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    checkFormValidity();
  }, [userData]);

  const checkFormValidity = () => {
    const haveAnyErrors = !!Object.values(errors).find(err => err.hasError);
    const touchedFields = Object.values(touched).filter(item => item);
    const haveTouchedAllFields = Object.values(userData).length === touchedFields.length;
    const isValid = !haveAnyErrors && haveTouchedAllFields;
    setFormValid(isValid);
  }

  const handleChange = ev => {
    const { name, value } = ev.target;
    const { hasError, errMessage } = validate(ev.target);
    if(!touched[name]) {
      setTouched((prevState) => {
        return {
          ...prevState,
          [name]: true
        }
      });
    }
    setErrors((prevState) => {
      return {
        ...prevState,
        [name]: { hasError, errMessage }
      }
    });
    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    dispatch(login(userData));
  };

  const { email, pwd } = userData;
  return (
    <LoginContainer>
      <Title>
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </Title>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          required
          onChange={handleChange}
          errors={errors?.email} />
        <FormInput
          type="text"
          name="pwd"
          label="Password"
          value={pwd}
          required
          onChange={handleChange}
          errors={errors?.pwd} />
        <CustomButton
          type="submit">
            Login
        </CustomButton>
      </Form>
    </LoginContainer>
  );
}

export default LoginPage;