import React from 'react';
import { any } from 'prop-types';

import './login-register-template.scss';

const LoginRegisterTemplate = ({ children }) => {
    
    return (
        <div className='lr-wrapper'>
            {children}
        </div>
    );
}

LoginRegisterTemplate.propTypes = {
    children: any
}

export default LoginRegisterTemplate;