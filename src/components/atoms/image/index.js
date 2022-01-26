import React from "react";
import {string} from 'prop-types';

import './image.scss';

const Image = ({src, alt, className, ...props}) => {
    return <img src={src} alt={alt} className={className} {...props}/>
}

Image.propTypes = {
    src: string,
    alt: string,
    className: string
}

export default Image;