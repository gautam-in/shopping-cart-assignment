import React from 'react'
import useOverflowHidden from '../../../hooks/useOverflowHidden';
import { StyledOverlay } from './Overlay.styled';

const Overlay = ({show, color, onOverlayClick, styleClass}) => {

  const {overflowHidden,toggleOverflowHide} = useOverflowHidden();
  const overlayClass = `slide-in-right visible ${styleClass}`;

  const handleClick = (e) => {
    onOverlayClick(e);
    toggleOverflowHide(!overflowHidden);
  }

  return (
    <StyledOverlay onClick={(onOverlayClick) && ((e) => handleClick(e))} className={`overlay ${show ? overlayClass : ''}`} color={color}>Overlay</StyledOverlay>
  )
}

export default Overlay;