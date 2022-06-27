import { StyledRegister, StyledRegisterDetails, StyledRegisterForm } from './Register.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Utilities/Button';
import Input from '../../components/Utilities/Input';
import React, { useState } from 'react'
import Wrapper from '../../components/Utilities/Wrapper';
import useValidate from '../../hooks/useValidate';
import { useNavigate } from 'react-router-dom';
import { hashIt } from '../../auth/passwordEncryption';

const Register = () => {

    const registeredSuccess = () => toast('user registered in successfully !',{
        position: "top-center",
      });

    const initialFormFields = {
        form: '',
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm_password: "",
        errors: {},
    };

    const navigate = useNavigate();
    const [values, setValues] = useState(initialFormFields);
    const {inputErrors} = useValidate(values);
    const {firstname,lastname,email,password,confirm_password,errors} = values;


  const handleInputChange = (event) => {
    const {
         name, 
         value,
         form: {
            localName,
            id
         } 
    } = event.target;
    setValues({
        ...values,
        errors: {
            ...errors,
            [name]: "",

        },
        [name]: value,
        [localName]: id,
    });
  };
  
  const handleInputValidate = (event) => {
    const { name, value } = event.target;
    value === "" &&
      setValues({
        ...values,
        errors: {
          ...errors,
        },
      });
      return !(errors[name] ? true : false);
  };

  const handleSubmit = (e) => {
      if(e.target.keyCode === 13 || e.type === 'click') {
        const isEmptyErrors = Object.values(errors).every(error => error === null || error === '');
        const isEmptyValues = Object.values(values).some(value => value === null || value === '' || value === {});
        if(isEmptyErrors && !isEmptyValues) {
            const encryptedPassword = hashIt(password);
            const updatedValues = {
                ...values,
                'password': encryptedPassword,
                'confirm_password': encryptedPassword
            }
            localStorage.setItem('userData', JSON.stringify([updatedValues]));
            registeredSuccess();
            setTimeout(() => {
                navigate('/form/sign-in', { replace: true });
              }, 3000);
        }
    }
}


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
                        inputValue={firstname}
                        errMsg={errors.firstname}
                        onInputChange={(e) => handleInputChange(e)}
                        onBlurChange={handleInputValidate}
                    />
                    <Input
                        inputName='lastname'
                        labelName='Last Name'
                        type='text'
                        inputValue={lastname}
                        errMsg={errors.lastname}
                        onInputChange={handleInputChange}
                        onBlurChange={handleInputValidate}
                    />
                    <Input
                        inputName='email'
                        labelName='Email'
                        type='email'
                        inputValue={email}
                        errMsg={errors.email}
                        onInputChange={handleInputChange}
                        onBlurChange={handleInputValidate}
                    />
                    <Input
                        inputName='password'
                        labelName='Password'
                        type='password'
                        inputValue={password}
                        errMsg={errors.password}
                        onInputChange={handleInputChange}
                        onBlurChange={handleInputValidate}
                    />
                    <Input
                        inputName='confirm_password'
                        labelName='Confirm Password'
                        type='password'
                        inputValue={confirm_password}
                        errMsg={errors.confirm_password}
                        onInputChange={handleInputChange}
                        onBlurChange={handleInputValidate}
                    />
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        onKeyPress={(e) => handleSubmit(e)}
                    >
                        Signup
                    </Button>
                </StyledRegisterForm>
                <ToastContainer
                    position="bottom-right"
                    autoClose={500}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Wrapper>
        </StyledRegister>
    )
}

export default Register;