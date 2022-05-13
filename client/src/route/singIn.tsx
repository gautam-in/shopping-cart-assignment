import React from "react";

import { Container, Grid, Typography } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../store/hook'
import { Dispatch } from 'redux'
import { login } from '../store/action/action'

const SingIn = () => {
  let navigate = useNavigate();
  const dispatch: Dispatch<any> = useAppDispatch()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [emailValid, setEmailValid] = React.useState(false)
  const [passwordValid, setPasswordValid] = React.useState(false)

  const [emailhelperText, setEmailhelperText] = React.useState('')
  const [passwordhelperText, setPasswordhelperText] = React.useState('')

  const onSubmit = () => {
    let flag = true;

    if (email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailhelperText("")
      setEmailValid(false)
     
    } else {
      flag = false
      setEmailValid(true)
      setEmailhelperText("Please provide correct email address.")
    }
    if (!password || password.length < 6 ||  !/[a-zA-Z]/g.test(password) || password.match(/\s/) || !password.match(/\d+/)) {
      flag = false;
      setPasswordValid(true)
      setPasswordhelperText("Please type correct password")
    } else {
      setPasswordhelperText("")
      setPasswordValid(false)
    }

    if (flag) {
      dispatch(login());
      navigate(`/home`);
    }
  }
  const onChange = (id: any, value: any) => {
    switch (id) {
      case 'email':
        setEmail(value);
        setEmailValid(false)
        break;
      case 'password':
        setPassword(value);
        setPasswordValid(false)
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
            Login
          </Typography>
          <Typography sx={information}>
            Get access to your Orders, Wishlist and Recommendations
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Container
            sx={containerForm}
          >
            <TextFieldComponent id='email' label="Email" type={"email"} onChange={onChange} error={emailValid} helperText={emailhelperText && emailhelperText} />
            <TextFieldComponent id='password' label="Password" type={"password"} onChange={onChange} error={passwordValid} helperText={passwordhelperText && passwordhelperText} />
       
            <Button  type="submit" sx={signUpBtn} onClick={onSubmit}>
              <Typography>Login</Typography>
            </Button>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingIn;