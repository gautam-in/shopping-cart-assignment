import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

import { register } from './../../redux/User/actions';

import { validate } from './../../utils/helpers';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 50px;
  padding-top: 5%;

  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    padding-top: 10%;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    flex-direction: column;
    padding: 0 30px;
    padding-top: 10%;
  }
`;

const Title = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Form = styled.form`
  width: 35%;

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

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pwd: '',
    confirmPwd: ''
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
    if(touched['pwd'] && name === "confirmPwd") {
      if(userData["pwd"] !== value) {
        setErrors((prevState) => {
          return {
            ...prevState,
            [name]: { hasError: true, errMessage: "Password's don't match" }
          }
        });
      }
    }
    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }

  const registerUser = ev => {
    ev.preventDefault();
    dispatch(register(userData));
    setUserData({
      firstName: '',
      lastName: '',
      email: '',
      pwd: '',
      confirmPwd: ''
    });
    setErrors({});
    setTouched({});
    setFormValid(false);
  };
  const {
    firstName,
    lastName,
    email,
    pwd,
    confirmPwd
  } = userData;
  return (
    <RegisterContainer>
      <Title>
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone</p>
      </Title>
      <Form onSubmit={registerUser}>
        <FormInput
          type="text"
          name="firstName"
          label="First Name"
          value={firstName}
          required
          onChange={handleChange}
          errors={errors?.firstName} />
        <FormInput
          type="text"
          name="lastName"
          label="Last Name"
          value={lastName}
          required
          onChange={handleChange}
          errors={errors?.lastName} />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email}
          required
          onChange={handleChange}
          errors={errors?.email} />
        <FormInput
          type="password"
          name="pwd"
          label="Password"
          value={pwd}
          required
          onChange={handleChange}
          errors={errors?.pwd} />
        <FormInput
          type="password"
          name="confirmPwd"
          label="Confirm Password"
          value={confirmPwd}
          required
          onChange={handleChange}
          errors={errors?.confirmPwd} />
        <CustomButton
          type="submit"
          disabled={!formValid}>
            Signup
        </CustomButton>
      </Form>
    </RegisterContainer>
  );
}

export default RegisterPage;