import React from 'react';
import './PinkButton.scss'

export default function PinkButton(props) {
    return (
        <button className="button-pink" onClick={props.handleClick}>
            {props.text}
        </button>
    )
}
