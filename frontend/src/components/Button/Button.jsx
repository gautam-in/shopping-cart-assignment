import React from 'react';

import './Button.scss'

const Button = ({ text = "Submit", title = "", color = "primary", size = "medium", ...otherProps }) => {

    return (
        <span className="shop-button">
            <button className={`custom-button ${color} ${size}`} title={title} onClick={otherProps.onClick} {...otherProps}
                aria-label={title}>{(otherProps.children ? otherProps.children : text)}
            </button>
        </span>
    )
}

export default Button;