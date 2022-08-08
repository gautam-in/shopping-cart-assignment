import React from 'react';

export function PrimaryButton({ title = "button", className = "", onClick = () => { } }) {
    return (
        <button className={`primary ${className}`} onClick={onClick}>{title}</button>
    )
}

export function SecondaryButton({ title = "button", className = "", onClick = () => { } }) {
    return (
        <button className={`secondary ${className}`} onClick={onClick}>{title}</button>
    )
}
