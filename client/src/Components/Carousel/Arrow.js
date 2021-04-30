import React, { memo } from 'react';
import styled from "styled-components";
import leftArrow from './Images/left-arrow.svg'
import rightArrow from './Images/right-arrow.svg'

const ArrowStyle = styled.div`
display: flex;
position: absolute;
top: 50%;
height: 50px;
width: 50px;
justify-content: center;
background: white;
border-radius: 50%;
cursor: pointer;
align-items: center;
transition: transform ease-in 0.1s;
${props => props.direction === 'right' ? `right: 25px` : `left: 25px`};
&:hover {
    transform: scale(1.1);
  }

  img {
    transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);

    &:focus {
      outline: 0;
    }
  }
  @media screen and (max-width: 640px){
    top: 30%;
    height: 30px;
    width: 30px;
  }
  @media screen and (min-width: 641px){
    top: 50%;
    height: 50px;
    width: 50px;
  }
`;

const Arrow = ({ direction, handleClick }) => {
  return (
    <ArrowStyle onClick={handleClick} direction={direction} >
      {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
    </ArrowStyle>
  )
}

export default memo(Arrow)