import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../redux/actions';
import { _EMAIL, _LOGIN, _PASSWORD, _LOGIN_DESC } from '../../../utils/constants';

import Button from '../../atoms/button';
import Modal from '../../atoms/modal';

import './signin.scss';

const LoginForm = ({history}) => {

    const dispatch = useDispatch();
    const { registeredData, ...remaining } = useSelector((state) => state);

    console.log(registeredData, remaining);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
    const handleDialog = () => {
        setShow(!show);
    }

    const onSubmit = data => {
        console.log(data);
        if (data && data.email && registeredData[data.email] ) {
            const reqData = registeredData[data.email];
            if(reqData.password == data.password ) {
                dispatch(loginAction(data.email));
                history.push("/");
            }
        } else {
            handleDialog()
        }
    }

    return (
        <div className='login-wrapper'> 
            <div>
                <div className='login'>{_LOGIN}</div>
                <div className='login-desc'>{_LOGIN_DESC}</div>
            </div>
            <div className='login-form'>
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
            </div>
            <Modal handleClose={handleDialog} show={show}>{"Invalid credentials. Please enter correct credentials!!"}</Modal>
        </div>
    );
}

export default withRouter(LoginForm);