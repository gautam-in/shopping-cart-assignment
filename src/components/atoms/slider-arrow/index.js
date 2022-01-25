import React from 'react';

function SliderArrow(props) {
    const { className, style, onClick, label } = props;

    return <div onClick={onClick}
        className={className}
        style={{ ...style, background: "rgba(0,0,0,0.3)" }}
    >{label}</div>
}

export default SliderArrow;