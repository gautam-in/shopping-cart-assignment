import React, { memo } from 'react'
import styled from "styled-components";

const DotStyled = styled.span`
padding: 10px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        background: ${props => props.active ? 'black' : 'white'};
`;

const Dot = ({ active }) => {
    return (
        <DotStyled />
    )
}

const MemoDot = memo(Dot);

const DotCollection = styled.div`
position: absolute;
bottom: 25px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const Dots = ({ slides, activeSlide }) => {
    return (
        <DotCollection>
            {slides.map((slide, i) => (
                <MemoDot key={slide + i} active={activeSlide === i} />
            ))}
        </DotCollection>
    )
}

export default Dots