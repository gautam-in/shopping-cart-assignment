import React from "react";

import './paragraph.scss';

const Paragraph = ({text, className, ...props}) => {

    return <p className={`${className} paragraph`} {...props}>
        {text}
    </p>
}

export default Paragraph;