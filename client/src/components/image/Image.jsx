import React from 'react'

import classes from './Image.module.css'

const Image = ({source, alt, className =""})=> {
    return (
        <img src={source} alt={alt} className={`${className} ${classes.image__wrappper}`} />
    )
}


export default Image