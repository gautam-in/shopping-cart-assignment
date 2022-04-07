import styled from 'styled-components';

import Select from 'react-select';
import { device } from '../../utils/breakpoints/devices';

export const CustomSelectContainer = styled(Select)`
  div {
    background-color: #be2857;
    color: white;
    border: transparent;

    span {
      background-color: transparent;
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;
