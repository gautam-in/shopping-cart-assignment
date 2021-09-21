import styled from 'styled-components';

export const ShadowDivWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.width ? props.width + '%' : '90%')};
    height: 25px;
    left: ${(props) => (props.width ? (100 - props.width) / 2 : '5%')};
    border-radius: 2%;
    z-index: -1;
    /* box-shadow: 0 8px 12px -10px rgba(0, 0, 0, 0.5); */
    background: ${(props) =>
      !props.secondShadow
        ? 'radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.28) 10px, rgba(255, 255, 255, 0) 65%)'
        : 'radial-gradient( ellipse at 50% 50%,rgba(0,0,0,0.2) 10px,rgba(255,255,255,0) 50% )'};
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  color: white;
  font-size: 3rem;
  border: 0;
`;
