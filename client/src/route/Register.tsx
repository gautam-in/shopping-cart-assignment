import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button/Button-component";
import TextFieldComponent from "../component/TextFiled/TextField-component";
import {
  container,
  singupText,
  information,
  signUpBtn,
  containerForm,
  gridStyle
} from './login.style'

import { useAppDispatch } from '../store/hook'
import { Dispatch } from 'redux'
import { login } from '../store/action/action'
const Register = () => {
  let navigate = useNavigate();
  const dispatch: Dispatch<any> = useAppDispatch()
  const [name, setName] = React.useState('')
  const [lastName, setlastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setconfirmPassword] = React.useState('')

  const [nameValid, setNameValid] = React.useState(false)
  const [lastNameValid, setlastNameValid] = React.useState(false)
  const [emailValid, setEmailValid] = React.useState(false)
  const [passwordValid, setPasswordValid] = React.useState(false)
  const [confirmPasswordValid, setconfirmPasswordValid] = React.useState(false)

  const [namehelperText, setNamehelperText] = React.useState('')
  const [lastNamehelperText, setlastNamehelperText] = React.useState('')
  const [emailhelperText, setEmailhelperText] = React.useState('')
  const [passwordhelperText, setPasswordhelperText] = React.useState('')
  const [confirmPasswordhelperText, setconfirmPasswordhelperText] = React.useState('')
  const onSubmit = () => {
    let flag = true;
    if (!name) {
      setNameValid(true)
      setNamehelperText("Please type your first name.")
      flag = false
    } else {
      setNameValid(false)
      setNamehelperText("")
    }
    if (!lastName) {
      setlastNameValid(true)
      setlastNamehelperText("Please type your last name.")
      flag = false
    } else {
      setlastNameValid(false)
      setlastNamehelperText("")
    }
    if (email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailhelperText("")
      setEmailValid(false)
    } else {
      flag = false
      setEmailValid(true)
      setEmailhelperText("Please provide correct email address.")
    }
    if (!password || password.length < 6 || !/[a-zA-Z]/g.test(password) || password.match(/\s/) || !password.match(/\d+/)) {
      flag = false;
      setPasswordValid(true)
      setPasswordhelperText("Length of the password should be atleast 6 and passowrd should have atleat one numeric and alphabets without any spaces.")
    } else {
      setPasswordhelperText("")
      setPasswordValid(false)

    }
    if (!confirmPassword || password !== confirmPassword) {
      flag = false
      setconfirmPasswordValid(true)
      setconfirmPasswordhelperText("Password & Confirm password must be same.")
    } else {
      setconfirmPasswordValid(false)
      setconfirmPasswordhelperText("")
    }
    if (flag) {
      dispatch(login());
      navigate(`/home`);
    }
  }
  const onChange = (id: any, value: any) => {
    switch (id) {
      case 'name':
        setName(value);
        setNameValid(false)
        break;
      case 'lastname':
        setlastName(value);
        setlastNameValid(false)
        break;
      case 'email':
        setEmail(value);
        setEmailValid(false)
        break;
      case 'password':
        setPassword(value);
        setPasswordValid(false)
        break;
      case 'confirmpassword':
        setconfirmPassword(value);
        setconfirmPasswordValid(false)
        break;
    }

  }

  return (
    <Container sx={container}>
      <Grid container sx={gridStyle}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="h5"
            sx={singupText}
          >
            Signup
          </Typography>
          <Typography sx={information}>
            We do not share your personal details with anyone
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Container
            sx={containerForm}
          >
            <TextFieldComponent
              id='name' label="First Name" type={"text"} onChange={onChange} error={nameValid} helperText={namehelperText && namehelperText} />
            <TextFieldComponent id='lastname' label="Last Name" type={"text"} onChange={onChange} error={lastNameValid} helperText={lastNamehelperText && lastNamehelperText} />
            <TextFieldComponent id='email' label="Email" type={"email"} onChange={onChange} error={emailValid} helperText={emailhelperText && emailhelperText} />
            <TextFieldComponent id='password' label="Password" type={"password"} onChange={onChange} error={passwordValid} helperText={passwordhelperText && passwordhelperText} />
            <TextFieldComponent id='confirmpassword' label="Confirm Password" type={"password"} onChange={onChange} error={confirmPasswordValid} helperText={confirmPasswordhelperText && confirmPasswordhelperText} />
            <Button type="submit" sx={signUpBtn} onClick={onSubmit}>
              <Typography>
                Signup
              </Typography>
            </Button>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Register;

