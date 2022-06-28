import React from 'react'
import { StyledWrapper } from './Wrapper.styled';

const Wrapper = ({ width, children }) => {

    const wrapperWidth = width;

    return (
        <StyledWrapper styledWidth={wrapperWidth} className="wrapper">
            {children}
        </StyledWrapper>
    );
};

export default Wrapper;