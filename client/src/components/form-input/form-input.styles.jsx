import styled, { css } from 'styled-components';

const subColor = 'gray';
const mainColor = '#6ccbd4';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 1.5rem 0 0 0;

  &:focus {
    outline: none;
    color: #6ccbd4;
    border-bottom: 2px solid ${mainColor};
  }

  &:focus {
    outline: none;
    color: #6ccbd4;
    border-bottom: 2px solid ${mainColor};
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }

  &.has-error {
    color: #cc3300;
    border-bottom: 2px solid #cc3300;
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
