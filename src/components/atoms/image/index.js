import React from "react";
import { string } from 'prop-types';

const Image = ({ src, alt, className, ...props }) => {
    return <img src={src} alt={alt} className={className} {...props} />
}

Image.propTypes = {
    src: string.isRequired,
    alt: string,
    className: string
}

export default Image;