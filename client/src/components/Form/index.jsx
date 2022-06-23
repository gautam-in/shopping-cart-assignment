import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Register from '../../pages/Register';
import Signin from '../../pages/SignIn';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formName = useParams().formName;

    switch (formName) {
        case 'register':
            return (<Register />)
            break;
        case 'sign-in':
            return (<Signin />)
        default:
            return null;
            break;
    }
}

export default Form;