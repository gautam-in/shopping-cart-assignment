import React from "react";

import './heading.scss';

const Heading = ({heading, className, ...props}) => {

    return <h4 className={`${className} heading`} {...props}>
        {heading}
    </h4>
}

export default Heading;