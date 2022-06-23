import React, { useState } from 'react'
import Button from '../../components/Utilities/Button';
import Input from '../../components/Utilities/Input';
import Wrapper from '../../components/Utilities/Wrapper';
// import { ERROR_MESSAGES, REGEX_INPUTS } from '../../Constants';
import useForm from '../../hooks/useForm';
import useValidate from '../../hooks/useValidate';
import { StyledRegister, StyledRegisterDetails, StyledRegisterForm } from './Register.styled';

const Register = () => {

    const { handleChange, handleKeyPress, handleSubmit, values, errors } = useForm(useValidate);

    return (
        <StyledRegister>
            <Wrapper>
                <StyledRegisterDetails>
                    <h3>Signup</h3>
                    <p>We do not share your personal details with anyone.</p>
                </StyledRegisterDetails>
                <StyledRegisterForm id='register'>
                    <Input
                        inputName='firstname'
                        labelName='First Name'
                        type='text'
                        inputValue={values.firstname}
                        errMsg={errors.firsname}
                        onInputChange={handleChange}
                        onKeyInputPress={handleKeyPress}
                    />
                    <Input
                        inputName='lastname'
                        labelName='Last Name'
                        type='text'
                        inputValue={values.lastname}
                        errMsg={errors.lastname}
                        onInputChange={handleChange}
                        onKeyInputPress={handleKeyPress}
                    />
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
                    <Input
                        inputName='confirm_password'
                        labelName='Confirm Password'
                        type='password'
                        inputValue={values.confirm_password}
                        errMsg={errors.confirm_password}
                        onInputChange={handleChange}
                        onKeyInputPress={handleKeyPress}
                    />
                    <Button
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Signup
                    </Button>
                </StyledRegisterForm>
            </Wrapper>
        </StyledRegister>
    )
}

export default Register;