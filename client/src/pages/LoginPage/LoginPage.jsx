import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../components/Button/Button';
import FormInput from '../../components/FormInput/FormInput';

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
`;

const CustomButton = styled(Button)`
  width: 100%;
`;

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPwd, setUserPwd] = useState('');
  return (
    <LoginContainer>
      <Title>
        <h2>Login</h2>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </Title>
      <Form>
        <FormInput
          type="email"
          name="userEmail"
          label="Email"
          value={userEmail} />
        <FormInput
          type="password"
          name="userPwd"
          label="Password"
          value={userPwd} />
        <CustomButton>
          Login
        </CustomButton>
      </Form>
    </LoginContainer>
  );
}

export default LoginPage;