import React from "react";
import { string } from 'prop-types';

import './paragraph.scss';

const Paragraph = ({ text, className, ...props }) => {

    return <p className={`${className} paragraph`} {...props}>
        {text}
    </p>
}

Paragraph.propTypes = {
    text: string.isRequired,
    className: string,
}

export default Paragraph;