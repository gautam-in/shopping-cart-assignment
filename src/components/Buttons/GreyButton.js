import React from 'react';
import './GreyButton.scss';

export default function GreyButton(props) {
    return (
        <button className={`button-grey button-grey-${props.text}`} onClick={props.handleClick}>
            {props.text}
        </button>
    )
}
