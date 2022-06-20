import React from 'react'
import Input from '../../components/Utilities/Input';
import Wrapper from '../../components/Utilities/Wrapper';
import { StyledForm, StyledSignin, StyledSigninDetails } from './Signin.styled';
import Button from '../../components/Utilities/Button';

const Signin = () => {
  return (
    <StyledSignin>
        <Wrapper>
            <StyledSigninDetails>
                <h3>Login</h3>
                <p>Get access to your Orders, Wishlist and Recommendations.</p>
            </StyledSigninDetails>
            <StyledForm>
                <Input 
                    inputName='email'
                    labelName='Email'
                    type='email'
                />
                <Input 
                    inputName='password'
                    labelName='Password'
                    type='password'
                />
                <Button>login</Button>
            </StyledForm>
        </Wrapper>
    </StyledSignin>
  )
}

export default Signin;