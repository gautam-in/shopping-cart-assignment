import React from 'react'
import Button from '../../components/Utilities/Button';
import Input from '../../components/Utilities/Input';
import Wrapper from '../../components/Utilities/Wrapper';
import { StyledRegister, StyledRegisterDetails, StyledRegisterForm } from './Register.styled';

const Register = () => {
  return (
    <StyledRegister>
        <Wrapper>
            <StyledRegisterDetails>
                <h3>Signup</h3>
                <p>We do not share your personal details with anyone.</p>
            </StyledRegisterDetails>
            <StyledRegisterForm>
                <Input 
                    inputName='first-name'
                    labelName='First Name'
                    type='text'
                />
                <Input 
                    inputName='last-name'
                    labelName='Last Name'
                    type='text'
                />
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
                <Input 
                    inputName='confirm-password'
                    labelName='Confirm Password'
                    type='password'
                />
                <Button>Signup</Button>
            </StyledRegisterForm>
        </Wrapper>
    </StyledRegister>
  )
}

export default Register;