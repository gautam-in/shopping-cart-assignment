import styled from 'styled-components';
import { device } from '../../utils/breakpoints/devices';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 95%;
  margin: 0 auto;
  align-items: center;
  grid-auto-flow: dense;
  direction: rtl;
  direction: ${(props) => (props.index % 2 === 0 ? 'ltr' : 'rtl')};
  /* box-shadow: 0 8px 5px -9px grey; */
  box-shadow: 0 63px 57px -102px black;
  padding: 2rem 0;

  @media ${device.tablet} {
    width: 70%;
    grid-template-columns: 35% 65%;
  }

  img {
    width: 7rem;
    height: auto;

    @media ${device.tablet} {
      width: 14rem;
    }

    @media ${device.desktopL} {
      width: 20rem;
    }
  }
  :last-child {
    box-shadow: none;
  }
`;

export const CategoryDetail = styled.div`
  text-align: center;
`;
