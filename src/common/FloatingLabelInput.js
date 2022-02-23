
import React from 'react'
import styled from 'styled-components';
import variableScss from "../theme/variable.scss";

const FloatingLabelInput = styled.div`
  width: 100%;
`;

const FloatingLabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 2em;
  /* border-bottom: 1px solid #ddd; */
  border-bottom-color:${props => (props.active ? variableScss.secondaryColor : '#ddd')};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  font-size: inherit;
`;

const FloatingLabel = styled.label`
  padding: 0;
  margin: 0;
  border: 0;
  position: absolute;
  color: ${props => (props.active ? variableScss.secondaryColor : '#9b9b9b')};
  bottom: 0;
  transition: all 0.2s ease-in-out;
  transform-origin: left top;
  font-size: 1em;
  cursor: text;
  pointer-events: none;
  width: 66.6%;
  transform: ${props =>
    props.active ? 'translate3d(0, -70%, 0) scale(0.70)' : 'none'};
`;

const FloatingInput = styled.input`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  font-size: 1em;
  &::placeholder {
    color: #9b9b9b;
    opacity: ${props => (props.active ? 1 : 0)};
    transition: opacity 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
`;


function Floating_Label_Input(props) {
  const { id, label, onBlur, value, onFocus, type, refs, className, ...otherProps } = props;
  return (
    <div>
      <FloatingLabelInput>
        <FloatingLabelInputContainer
          active={value && value.length > 0}
          className={className}>
          <FloatingLabel className={className} htmlFor={id}
            active={value && value.length > 0}
          >
            {label}
          </FloatingLabel>
          <FloatingInput
            active={value && value.length > 0}
            className={className}
            id={id}
            onBlur={onBlur}
            onFocus={onFocus}
            ref={refs}
            type={type}
            // value={value}
            {...otherProps}
          />
        </FloatingLabelInputContainer>
      </FloatingLabelInput>
    </div>
  )
}

export default Floating_Label_Input

