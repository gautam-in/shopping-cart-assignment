import React from 'react'
import './Button.scss'
function Button({children,...otherProps}) {
    return (
        <button className="common-btn" {...otherProps}>
            {children}
        </button>
    )
}

export default Button
