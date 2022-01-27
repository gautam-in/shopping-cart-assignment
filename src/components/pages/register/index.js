import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { _EMAIL, _SIGN_UP, _PASSWORD, _REGISTER_DESC, _FIRSTNAME, _LASTNAME, _CONFIRM_PASS } from '../../../utils/constants';

import Button from '../../atoms/button';
import Modal from '../../atoms/modal';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import './register.scss';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../../../redux/actions';

const RegisterForm = ({history}) => {

    const dispatch = useDispatch();
    const { registeredData } = useSelector((state) => state);

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password')], 'Passwords must match')
            
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, watch, formState: { errors } } = useForm(formOptions);
    const [show, setShow] = useState(false);
    const[dialogMsg, setDialogMsg] = useState("You have registered successfully!!");
    const[isexist, setExists] = useState(false);

    const handleDialog = () => {
        setShow(!show);
        if(show && !isexist) {
            history.push("/signin");
        }
    }

    const onSubmit = (data, e) => {
        e.preventDefault();
        if(!Object.keys(registeredData).includes(data.email)) {
            dispatch(registerAction(data));
        }
        else {
            setDialogMsg(`User '${data.email}' already exists!!`);
            setExists(true);
        }
        handleDialog();
    }

    return (
        <div className='register-wrapper'> 
            <div>
                <div className='register'>{_SIGN_UP}</div>
                <div className='register-desc'>{_REGISTER_DESC}</div>
            </div>
            <div className='register-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label><b>{_FIRSTNAME}</b></label>
                        <input {...register("fname", { required: true, maxLength: 1, maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder={_FIRSTNAME} type="text" autoFocus />
                        {errors.fname && <span>Firstname is required</span>}
                    </div>
                    <div>
                        <label><b>{_LASTNAME}</b></label>
                        <input {...register("lname", {maxLength: 20, pattern: /^[A-Za-z]+$/i})} placeholder={_LASTNAME} type="text" />
                    </div>
                    <div>
                        <label><b>{_EMAIL}</b></label>  
                        <input {...register("email", { required: true })} placeholder={_EMAIL} type="email" autoFocus />
                        {errors.email && <span>Email is required</span>}
                    </div>
                    <div>
                        <label><b>{_PASSWORD}</b></label>
                        <input {...register("password", { required: true, minLength: 8 })} placeholder={_PASSWORD} type="password" />
                        {errors.password && <span>Password length should be minimum of 8 characters</span>}
                    </div>
                    <div>
                        <label><b>{_CONFIRM_PASS}</b></label>
                        <input {...register("confirmPassword", { required: true })} placeholder={_CONFIRM_PASS} type="password" />
                        {errors.confirmPassword && <span>Confirm Password should match with Password</span>}
                    </div>
                    <Button label={_SIGN_UP} type={'submit'} />
                </form>
            </div>
            <Modal handleClose={handleDialog} show={show}>{dialogMsg}</Modal>
        </div>
    );
}

export default withRouter(RegisterForm);