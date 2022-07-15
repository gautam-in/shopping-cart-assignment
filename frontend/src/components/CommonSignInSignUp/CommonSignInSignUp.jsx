import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './CommonSignInSignUp.scss';

const CommonSignInSignUp = ({ title, summary, children }) => {


    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    let [loadScreen, setLoadScreen] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {

        if (userInfo) {
            navigate('/homepage', { replace: true });
        } else {
            setLoadScreen(true)
        }
    }, [navigate, userInfo]);

    return (
        <>
            {loadScreen &&
                <div className='auth-section'>
                    <div className='title'>
                        <div>
                            <h2 >{title}</h2>
                            <span>{summary}</span>
                        </div>
                    </div>
                    <div className='form-container'>
                        {children}
                    </div>

                </div>
            }
        </>
    );
}

export default CommonSignInSignUp;
