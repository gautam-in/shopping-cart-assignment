import React from 'react';
import {string, func, object} from 'prop-types';

function SliderArrow(props) {
    const { className, style, onClick, label } = props;

    return <div onClick={onClick}
        className={className}
        style={{ ...style, background: "rgba(0,0,0,0.3)" }}
    >{label}</div>
}

SliderArrow.propTypes = {
    onClick: func,
    label: string,
    style: object,
    className: string,
}

export default SliderArrow;