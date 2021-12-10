import styled , { css } from 'styled-components';


const containerStyles = css`
      display: flex;
      flex: 1/3;
`

export const HeaderContainer = styled.div`
     display:flex;
     flex:1;
     justify-content: space-around;
`;
export const AppLogoContainer = styled.div`
   ${containerStyles}
`;

export const AppPageHeaders = styled.div`
   ${containerStyles}
`;

export const AppCartAndAuthHeaders = styled.div`
    ${containerStyles}
`;