import React from "react";
import {string, func} from 'prop-types';

import './button.scss';

const Button = ({label, onClick, className, ...props}) => {

    return <button className={`${className} button`} onClick={onClick} {...props}>
        {label}
    </button>
}

Button.propTypes = {
    label: string,
    onClick: func,
    className: string
}

export default Button;