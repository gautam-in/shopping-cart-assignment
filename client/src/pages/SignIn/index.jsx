import { StyledForm, StyledSignin, StyledSigninDetails } from './Signin.styled';

import Button from '../../components/Utilities/Button';
import Input from '../../components/Utilities/Input';
import React from 'react'
import Wrapper from '../../components/Utilities/Wrapper';
import useForm from '../../hooks/useForm';
import useValidate from '../../hooks/useValidate';

const Signin = () => {

    const { handleChange, handleKeyPress, handleSubmit, values, errors } = useForm(useValidate);

    return (
        <StyledSignin>
            <Wrapper>
                <StyledSigninDetails>
                    <h3>Login</h3>
                    <p>Get access to your Orders, Wishlist and Recommendations.</p>
                </StyledSigninDetails>
                <StyledForm id='sign-in'>
                    <Input
                        inputName='email'
                        labelName='Email'
                        type='email'
                        inputValue={values.email}
                        errMsg={errors.email}
                        onInputChange={handleChange}
                        onKeyInputPress={handleKeyPress}
                    />
                    <Input
                        inputName='password'
                        labelName='Password'
                        type='password'
                        inputValue={values.password}
                        errMsg={errors.password}
                        onInputChange={handleChange}
                        onKeyInputPress={handleKeyPress}
                    />
                    <Button
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        login
                    </Button>
                </StyledForm>
            </Wrapper>
        </StyledSignin>
    )
}

export default Signin;