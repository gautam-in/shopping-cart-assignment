import React, { useState } from 'react';
import { object } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Button from '../../atoms/button';
import Modal from '../../atoms/modal';
import LoginRegisterTemplate from '../../rows/login-register-template';
import { registerAction } from '../../../redux/actions';
import CustomLink from '../../atoms/link';
import { SIGNIN } from '../../../utils/RouteNames';
import {
    _EMAIL,
    _SIGN_UP,
    _PASSWORD,
    _REGISTER_DESC,
    _FIRSTNAME,
    _LASTNAME,
    _CONFIRM_PASS,
    _SIGNIN
} from '../../../utils/constants';

const RegisterForm = ({ history }) => {

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
    const [dialogMsg, setDialogMsg] = useState("You have been registered successfully!!");
    const [isexist, setExists] = useState(false);

    const handleDialog = () => {
        setShow(!show);
        if (show && !isexist) {
            history.push("/signin");
        }
    }

    const onSubmit = (data, e) => {
        e.preventDefault();
        if (!Object.keys(registeredData).includes(data.email)) {
            dispatch(registerAction(data));
        }
        else {
            setDialogMsg(`User '${data.email}' already exists!!`);
            setExists(true);
        }
        handleDialog();
    }

    return (
        <LoginRegisterTemplate>
            <div>
                <div className='heading'>{_SIGN_UP}</div>
                <div className='description'>{_REGISTER_DESC}</div>
            </div>
            <div className='lr-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="fname"><b>{_FIRSTNAME}</b></label>
                        <input id="fname" {...register("fname", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder={_FIRSTNAME} type="text" autoFocus />
                        {errors.fname && <span>Firstname is required</span>}
                    </div>
                    <div>
                        <label htmlFor="lname"><b>{_LASTNAME}</b></label>
                        <input id="lname" {...register("lname", { maxLength: 20, pattern: /^[A-Za-z]+$/i })} placeholder={_LASTNAME} type="text" />
                    </div>
                    <div>
                        <label htmlFor="email"><b>{_EMAIL}</b></label>
                        <input id="email" {...register("email", { required: true })} placeholder={_EMAIL} type="email" />
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
                    <Button label={_SIGN_UP} type={'submit'} id={_SIGN_UP}/>
                </form>
                <div className='lr-msg'>If you have an account already, please <CustomLink href={SIGNIN} label={_SIGNIN} /></div>
            </div>
            <Modal handleClose={handleDialog} show={show}>{dialogMsg}</Modal>
        </LoginRegisterTemplate>
    );
}

RegisterForm.propTypes = {
    history: object
}

export default withRouter(RegisterForm);