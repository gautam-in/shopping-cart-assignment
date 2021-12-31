import React, { useState, useEffect, useCallback } from 'react';
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
  column-gap: 50px;
  padding-top: 10%;

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    padding: 0 40px;
    padding-top: 10%;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    flex-direction: column;
    padding: 0 40px;
    padding-top: 10%;
  }
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

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    width: 100%;
  }  
`;

const CustomButton = styled(Button)`
  width: 100%;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
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

  const checkFormValidity = useCallback(() => {
    const haveAnyErrors = !!Object.values(errors).find(err => err.hasError);
    const touchedFields = Object.values(touched).filter(item => item);
    const haveTouchedAllFields = Object.values(userData).length === touchedFields.length;
    const isValid = !haveAnyErrors && haveTouchedAllFields;
    setFormValid(isValid);
  }, [errors, touched, userData]);

  useEffect(() => {
    checkFormValidity();
  }, [userData, checkFormValidity]);

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
    setUserData({
      email: '',
      pwd: ''
    });
    setErrors({});
    setTouched({});
    setFormValid(false);
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
          type="submit"
          disabled={!formValid}>
            Login
        </CustomButton>
      </Form>
    </LoginContainer>
  );
}

export default LoginPage;