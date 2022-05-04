import styled from 'styled-components';

import devices from '../media/devices';

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin: 10% 10% 0 10%;
  height: 50%;

  img {
    width: 20%;
    height: 30%;

    @media ${devices.mobile} {
      width: 2em;
      margin: 4% 12%;
    }
  }

  @media ${devices.mobile} {
    margin: 4% 12%;
  }
`;

export const ItemCount = styled.span`
  padding-left: 10px;

  @media ${devices.mobile} {
    width: 50%;
    margin: 0;
    padding: 0;
  }
`;
