import styled, { css } from 'styled-components';

const subColor = 'gray';
const mainColor = '#6ccbd4';
const errorRed = '#cc3300';

const shrinkLabelStyles = css`
  top: -0.875rem;
  font-size: 0.75rem;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.3rem;
  top: 0.6rem;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 1.125rem;
  padding: 0.75rem 0.75rem 0.75rem 0.3rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 1.5rem 0 0 0;

  &:focus {
    outline: none;
    color: ${mainColor};
    border-bottom: 2px solid ${mainColor};
  }

  &:focus {
    outline: none;
    color: ${mainColor};
    border-bottom: 2px solid ${mainColor};
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }

  &.has-error {
    color: ${errorRed};
    border-bottom: 2px solid ${errorRed};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const ErrorContainer = styled.span`
  font-size: 0.75rem;
`;
