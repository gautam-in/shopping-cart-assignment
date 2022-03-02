import React from 'react'
import Register from '../../components/Register/Register'

import classes from './Signup.module.css'

const Signup = ()=>{

    return (
        <div className={classes.signup__container}>
            <Register />
        </div>
    )
}


export default Signup;
