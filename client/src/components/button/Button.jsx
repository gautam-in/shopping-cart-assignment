import React from 'react'
import classes from './Button.module.css'

const Button = ({children, ...otherprops})=>{

    return (
        <button className={classes.button} {...otherprops}>
        {children}

    </button>
    )
}

export default Button