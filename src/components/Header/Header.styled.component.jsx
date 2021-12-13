import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const containerStyles = css`
  display: flex;
`;

export const HeaderContainer = styled.div`
  ${containerStyles}
  flex: 1;
  justify-content: space-around;
  height: 80px;
  padding: 8px;
`;
export const AppLogoContainer = styled.div`
  ${containerStyles}
  flex: 1;
  justify-content: center;
`;

export const AppPageHeaders = styled.div`
  ${containerStyles}
  align-items: flex-end;
  flex: 2;
`;

export const AppCartAndAuthHeaders = styled.div`
  ${containerStyles}
  flex-direction: column;
  flex: 1;
`;
export const AppAuthRoutes = styled.div`
  ${containerStyles}
`;

export const LinkContainer = styled(Link)`
  margin: 8px;
`;
export const CartLogoContainer = styled.div`
  ${containerStyles}
  background: #f2f2f2;
`;
export const CartLogoSrc = styled.img`
  height: 40px;
  width: 40px;
  color: #d2687c;
  margin: 0 8px;
`;
