import React from "react";
import {string} from 'prop-types';

import './heading.scss';

const Heading = ({heading, className, ...props}) => {

    return <h4 className={`${className} heading`} {...props}>
        {heading}
    </h4>
}

Heading.propTypes = {
    heading: string,
    className: string
}

export default Heading;