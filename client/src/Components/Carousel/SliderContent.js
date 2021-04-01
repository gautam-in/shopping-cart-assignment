import React from 'react'
import styled from "styled-components"

const SliderContentStyle = styled.div`
transform: translateX(-${props => props.translate}px);
transition: transform ease-out ${props => props.transition}s;
height: 100%;
display: flex;
`;

const SliderContent = props => {
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}

export default SliderContent