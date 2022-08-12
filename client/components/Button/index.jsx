import React from 'react';

export function PrimaryButton({ children = "button", type = "button", className = "", onClick = () => { } }) {
    return (
        <button
            type={type}
            className={`primary ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export function SecondaryButton({ children = "button", type = "button", className = "", onClick = () => { } }) {
    return (
        <button
            type={type}
            className={`secondary ${className}`}
            onClick={onClick}>
            {children}
        </button>
    )
}
