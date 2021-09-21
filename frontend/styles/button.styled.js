import styled from 'styled-components';

import { FlexHorizontalCenter } from 'styles/mixins';

export const ButtonWrapper = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};

  ${FlexHorizontalCenter()};

  color: ${(props) => (props.color ? props.color : 'white')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'black')};

  border: none;
  padding: ${(props) => (props.padding ? props.padding : '1rem 0')};
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 1rem;

  cursor: pointer;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 1.1rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 1.3rem;
  }
`;
