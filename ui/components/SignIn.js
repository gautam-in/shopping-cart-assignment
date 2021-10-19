import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Form from './styles/FormStyles'
import { getCookie, setCookies } from 'cookies-next';
import { useRouter } from 'next/router'

const SignIn = () => {
  const router = useRouter()
  // create state variables for each input
  
  const intialState = {
    email: "",
    password: "",
  };
  const [userDetails, setUserDetails] = useState(intialState);
  const [validation, setValidation] = useState("");


  const handleSubmit = e => {
    e.preventDefault();
    const email = getCookie("email");
    const pwd = getCookie("password");
    if (userDetails.email === email && userDetails.password === pwd) {
      setCookies("status", "logged-in");
      router.push("/");
    } else {
      setValidation("Invalid credentials");
    }
    
  };
  
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
    <div style={{gridColumn:'2/3', alignContent:'center',paddingTop:"15%"}}>
      <h1>Login</h1>
      <p className="font-size">Get access to your Order wishlist and Recomendation</p>
    </div>
    <div style={{gridColumn:'3/4'}}>
      <br/>
      <Form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="filled"
        id="email"
        type="email"
        value={userDetails.email}
        required
        onChange={(event) =>
          setUserDetails({ ...userDetails, email: event.target.value })
        }
      />
      <TextField
        label="Password"
        // variant="filled"
        id="pass"
        type="password"
        value={userDetails.password}
        required
        onChange={(event) =>
          setUserDetails({ ...userDetails, password: event.target.value })
        }
      />
      <p
        style={{
          color: "red",
          textAlign: "center",
        }}
      >
        {validation}
      </p>
      <br/>
      <div>
        <Button type="submit" id="submit" variant="contained" color="primary">
          SignIn
        </Button>
      </div>
    </Form>
    </div>
    </div>
  );
};

export default SignIn;