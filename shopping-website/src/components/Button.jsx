import React from 'react';
import './Button.scss';

const Button = ({ children,classCustom = '', onClick }) => {

    return (
        <button className= {`btn ${classCustom}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;