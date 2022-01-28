import React, { useState } from 'react';
import { object } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { loginAction } from '../../../redux/actions';
import LoginRegisterTemplate from '../../rows/login-register-template';
import Button from '../../atoms/button';
import Modal from '../../atoms/modal';
import CustomLink from '../../atoms/link';
import { REGISTER } from '../../../redux/actionTypes';
import {
    _EMAIL,
    _LOGIN,
    _PASSWORD,
    _LOGIN_DESC,
    _SIGNIN,
    _SIGN_UP
} from '../../../utils/constants';

const LoginForm = ({ history }) => {

    const dispatch = useDispatch();
    const { registeredData } = useSelector((state) => state);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
    const handleDialog = () => {
        setShow(!show);
    }

    const onSubmit = data => {
        if (data && data.email) {
            const reqData = registeredData[data.email];
            if (reqData && reqData.password == data.password) {
                dispatch(loginAction(data.email));
                let to = '/';
                if (history.location.state) {
                    to = history.location.state.from;
                }
                history.push(to);
            }
            else {
                handleDialog()
            }
        }
    }

    return (
        <LoginRegisterTemplate>
            <div>
                <div className='heading'>{_LOGIN}</div>
                <div className='description'>{_LOGIN_DESC}</div>
            </div>
            <div className='lr-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label><b>{_EMAIL}</b></label>
                        <input {...register("email", { required: true })} placeholder={_EMAIL} type="email" autoFocus />
                        {errors.email && <span>Email is required</span>}
                    </div>
                    <div>
                        <label><b>{_PASSWORD}</b></label>
                        <input {...register("password", { required: true })} placeholder={_PASSWORD} type="password" />
                        {errors.password && <span>Password is required</span>}
                    </div>
                    <Button label={_LOGIN} type={'submit'} />
                </form>
                <div className='lr-msg'>If you dont't have an account already, please <CustomLink href={REGISTER} label={_SIGN_UP} /></div>
            </div>
            <Modal handleClose={handleDialog} show={show}>{"Invalid credentials. Please enter correct credentials!!"}</Modal>
        </LoginRegisterTemplate>
    );
}

LoginForm.propTypes = {
    history: object
}

export default withRouter(LoginForm);