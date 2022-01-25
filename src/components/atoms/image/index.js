import React from "react";

import './image.scss';

const Image = ({src, alt, width, height, className, ...props}) => {
    return <img src={src} alt={alt} width={width} height={height} {...props}/>
}

export default Image;