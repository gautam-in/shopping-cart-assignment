import React from 'react'

import SignIn from '../../components/SignIn/SignIn'
import classes from './Login.module.css'

const Login = ()=>{

    return (
        <div className={classes.login__container}>
            <SignIn />           
        </div>
    )
}


export default Login;
