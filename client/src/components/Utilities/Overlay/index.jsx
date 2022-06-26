import React from 'react'
import { StyledOverlay } from './Overlay.styled';

const Overlay = ({show, color, onOverlayClick, styleClass}) => {

  const overlayClass = `slide-in-right visible ${styleClass}`;

  const handleClick = (e) => {
    onOverlayClick(e);
  }

  return (
    <StyledOverlay onClick={(onOverlayClick) && ((e) => handleClick(e))} className={`overlay ${show ? overlayClass : ''}`} color={color}>Overlay</StyledOverlay>
  )
}

export default Overlay;