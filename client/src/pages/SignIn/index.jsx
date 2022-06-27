import { StyledForm, StyledSignin, StyledSigninDetails } from './Signin.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Utilities/Button';
import Input from '../../components/Utilities/Input';
import React, { useState } from 'react'
import Wrapper from '../../components/Utilities/Wrapper';
import useValidate from '../../hooks/useValidate';
import { useNavigate } from 'react-router-dom';
import { setIsUserLoggedIn, setUserEmail } from '../../redux/slices/auth';
import { useDispatch, useSelector } from 'react-redux';

const Signin = () => {

    const dispatch = useDispatch();
    const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
    const loginSuccess = () => toast('user logged in successfully !',{position: "top-center"});

    const initialFormFields = {
        form: '',
        email: "",
        password: "",
        errors: {},
    };

    const [values, setValues] = useState(initialFormFields);
    const {inputErrors} = useValidate(values);
    const navigate = useNavigate();
    const {email,password,errors} = values;


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
          [name]: `${name} cannot be blank`,
        },
      });
      return !(errors[name] ? true : false);
  };

  const handleSubmit = (e) => {
    if(e.target.keyCode === 13 || e.target) {
        const isEmpty = Object.values(errors).every(error => error === null || error === '');
        if(isEmpty) {
           const updatedData = {
                'email': email,
            }
            sessionStorage.setItem('userData', JSON.stringify([updatedData]));
            loginSuccess();
            if(updatedData.email) {
              dispatch(setUserEmail(updatedData.email));
              dispatch(setIsUserLoggedIn(true));
            }
            setTimeout(() => {
                navigate('/',{replace:true});
              }, 3000);
        }
    }
}

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
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        onKeyPress={(e) => handleSubmit(e)}
                    >
                        login
                    </Button>
                </StyledForm>
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
        </StyledSignin>
    )
}

export default Signin;