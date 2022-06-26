import React from 'react'
import Register from '../../pages/Register';
import Signin from '../../pages/SignIn';
import { useParams } from 'react-router-dom';

const Form = () => {
    const formName = useParams().formName;

    switch (formName) {
        case 'register':
            return (<Register />)
        case 'sign-in':
            return (<Signin />)
        default:
            return null;
    }
}

export default Form;