import styled, { css } from "styled-components";

const flexCss = css`
  display: flex;
`;

export const CardContainer = styled.div`
   ${flexCss}
   flex-direction: column;
`;

export const CardHeader = styled.div`
  ${flexCss}
`;

export const CardContent = styled.div`
  ${flexCss}

`;

export const CardFooter = styled.div`
  ${flexCss}
`;
