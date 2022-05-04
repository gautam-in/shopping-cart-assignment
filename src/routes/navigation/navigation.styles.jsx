import styled from 'styled-components';
import { Link } from 'react-router-dom';

import devices from '../../components/media/devices';

export const NavigationContainer = styled.div`
  display: flex;
  padding: 0 10%;
  border-bottom: 1px solid lightgray;
  justify-content: space-between;

  @media ${devices.mobile}, ${devices.tablet} {
    padding: 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 1%;
  width: 20%;
`;

export const Logo = styled.img`
  width: 75%;

  @media ${devices.mobile} {
    padding-top: 10%;
    width: 100%;
  }
`;

export const LeftMenu = styled.div`
  display: flex;
  align-items: flex-end;

  @media ${devices.mobile} {
    display: none;
  }
`;

export const RightMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 20%;
  height: 10%;

  @media ${devices.mobile}, ${devices.tablet} {
    width: 36%;
  }
`;

export const Auth = styled.div`
  @media ${devices.mobile} {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
`;

export const OutletContainer = styled.div`
  padding: 1% 10%;
`;

export const Footer = styled.footer` 
  padding: 0 10%; 
  background-color: lightgray;
`;
