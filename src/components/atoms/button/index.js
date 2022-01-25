import React from "react";

import './button.scss';

const Button = ({label, onClick, className, ...props}) => {

    return <button className={`${className} button`} onClick={onClick} {...props}>
        {label}
    </button>
}

export default Button;