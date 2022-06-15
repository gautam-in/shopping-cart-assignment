import React from 'react';
import { StyledButton } from './Button.styled';

const Button = ({ styleClass, onClick, children }) => {
    const handleClick = (event) => onClick(event);

    const buttonClass = `button ${styleClass}`;

    return (
        <StyledButton type="button" className={buttonClass} onClick={handleClick}>
            {children}
        </StyledButton>
    );
};

export default Button;