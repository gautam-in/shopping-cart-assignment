import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
`;

const Title = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Form = styled.form`
  width: 35%;
`;

const CustomButton = styled(Button)`
  width: 100%;
`;

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  return (
    <RegisterContainer>
      <Title>
        <h2>Signup</h2>
        <p>We do not share your personal details with anyone</p>
      </Title>
      <Form>
        <FormInput
          type="text"
          name="firstName"
          label="First Name"
          value={firstName} />
        <FormInput
          type="text"
          name="lastName"
          label="Last Name"
          value={lastName} />
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={email} />
        <FormInput
          type="password"
          name="pwd"
          label="Password"
          value={pwd} />
        <FormInput
          type="password"
          name="confirmPwd"
          label="Confirm Password"
          value={confirmPwd} />
        <CustomButton>
          Signup
        </CustomButton>
      </Form>
    </RegisterContainer>
  );
}

export default RegisterPage;