import styled from 'styled-components';

import { GridMixin, FlexHorizontalCenter, FlexMixin } from './mixins';

export const HeaderStyles = styled.div`
  ${FlexHorizontalCenter()}

  -webkit-box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.21);

  height: 8rem;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    height: 5rem;
  }
`;

export const LogoWrapper = styled.div`
  ${FlexHorizontalCenter()};
`;

export const HeaderWrapper = styled.header`
  ${GridMixin('auto  1fr', 'space-between', 'stretch', '11rem')};

  width: var(--containerWidth);

  line-height: 1;
  height: 100%;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    padding: 0 10px;
    padding-right: 0;
    ${GridMixin('auto  auto', 'space-between', 'stretch', '5rem')};
  }

  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    width: 100%;
    padding: 0 10px;
    padding-right: 0;
  }
`;

export const NavWrapper = styled.nav`
  ${GridMixin('auto auto', 'space-between', 'stretch')};

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    ${GridMixin('auto', 'space-between', 'stretch')};
  }
`;

export const NavElementLeftWrapper = styled.div`
  ${FlexMixin('space-between', 'center')};

  a {
    text-shadow: 0 0 #212121;
    color: #5a5353;
    padding-top: 3rem;
  }

  transition: all 0.5s linear;

  a:not(:last-child) {
    margin-right: 20px;
  }

  a:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

export const NavElementRightWrapper = styled.div`
  ${FlexMixin('space-between', 'flex-end', 'column')};

  width: 12rem;
`;

export const AccountActionWrapper = styled.div`
  ${FlexMixin('space-between', 'center')};

  font-size: 1.3rem;
  width: 88%;

  a {
    text-shadow: 0 0 #212121;
    color: #5a5353;
    padding-bottom: 1rem;
  }

  transition: all 0.5s linear;

  a:hover {
    cursor: pointer;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }

  @media only screen and (min-width: 768px) and (max-width: 1025px) {
    margin-right: 5px;
  }
`;
